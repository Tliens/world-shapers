/* ==========================================================
   群星闪耀 · Three.js 星空背景 v2
   采用 three.js 社区经典的开源「银河生成器」点云着色器方案：
   - 4 旋臂螺旋星系盘（金芯蓝臂）+ 球状远星晕，自定义 shader
     实现软圆粒子、按距离衰减的尺寸、逐粒子闪烁
   - 星系盘缓慢自转，鼠标视差跟随
   - 深色主题叠加发光（additive），浅色主题自动换深色配色与混合模式
   - three.js 不可用 / WebGL 失败 / 系统偏好减少动效时退回 CSS 星空
   - 页签不可见暂停渲染，DPR 封顶 2
   ========================================================== */
(function () {
  'use strict';

  if (!window.THREE) return;
  var holder = document.getElementById('bg3d');
  if (!holder || !window.innerWidth) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  try {

  var renderer;
  try {
    /* 不透明画布：透明画布会让加法混合的星星被 alpha 通道二次衰减而发暗 */
    renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false, powerPreference: 'high-performance' });
  } catch (e) { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  holder.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 600);
  camera.position.set(0, 0, 55);

  /* ---------- 参数 ---------- */
  var isMobile = window.innerWidth < 720;
  var DISC_COUNT = isMobile ? 14000 : 32000;
  var HALO_COUNT = isMobile ? 700 : 1500;
  var RADIUS = 48, BRANCHES = 3, SPIN = 2.6, RANDOMNESS = 0.25, POWER = 2.8;

  /* 每主题配色：星系盘内圈/外圈、星晕、星云光斑 */
  var THEMES = {
    dark: {
      clear: 0x12151b,
      inside: new THREE.Color('#ffcf7a'),
      outside: new THREE.Color('#5f7bd8'),
      halo: [new THREE.Color('#fff3d6'), new THREE.Color('#d4af4e'), new THREE.Color('#8fb3ff')],
      glowRGB: [[212, 175, 78], [95, 118, 216], [138, 99, 201]],
      glowOpacity: [0.07, 0.06, 0.05],
      additive: true,
      opacity: 0.95
    },
    light: {
      clear: 0xf6f2ea,
      inside: new THREE.Color('#b8891f'),
      outside: new THREE.Color('#54679e'),
      halo: [new THREE.Color('#7a6a3f'), new THREE.Color('#54679e'), new THREE.Color('#7d6ba8')],
      glowRGB: [[184, 145, 46], [84, 103, 158], [138, 99, 201]],
      glowOpacity: [0.05, 0.04, 0.035],
      additive: false,
      opacity: 0.75
    }
  };

  /* ---------- 着色器 ---------- */
  var vertexShader = [
    'uniform float uSize;',
    'uniform float uPixelRatio;',
    'attribute float aScale;',
    'attribute vec3 aColor;',
    'attribute float aPhase;',
    'varying vec3 vColor;',
    'varying float vPhase;',
    'void main() {',
    '  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);',
    '  gl_PointSize = uSize * uPixelRatio * aScale * (60.0 / -mvPosition.z);',
    '  gl_Position = projectionMatrix * mvPosition;',
    '  vColor = aColor;',
    '  vPhase = aPhase;',
    '}'
  ].join('\n');

  var fragmentShader = [
    'uniform float uTime;',
    'uniform float uOpacity;',
    'varying vec3 vColor;',
    'varying float vPhase;',
    'void main() {',
    '  float d = distance(gl_PointCoord, vec2(0.5));',
    '  float disc = smoothstep(0.5, 0.06, d);',
    '  float twinkle = 0.72 + 0.28 * sin(uTime * (1.2 + vPhase * 0.2) + vPhase * 6.2831);',
    '  float alpha = disc * twinkle * uOpacity;',
    '  if (alpha < 0.015) discard;',
    '  gl_FragColor = vec4(vColor, alpha);',
    '}'
  ].join('\n');

  var material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 2.2 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uOpacity: { value: 0.95 }
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  /* ---------- 几何：星系盘 ---------- */
  function buildGeometry(count, makePosition, colorFn, scaleFn) {
    var geo = new THREE.BufferGeometry();
    var positions = new Float32Array(count * 3);
    var colors = new Float32Array(count * 3);
    var scales = new Float32Array(count);
    var phases = new Float32Array(count);
    for (var i = 0; i < count; i++) {
      var p = makePosition(i);
      positions[i * 3] = p[0]; positions[i * 3 + 1] = p[1]; positions[i * 3 + 2] = p[2];
      var c = colorFn(i, count);
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
      scales[i] = scaleFn();
      phases[i] = Math.random();
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(new Float32Array(phases), 1));
    return geo;
  }

  function randSigned(power, amount) {
    var v = Math.pow(Math.random(), power) * (Math.random() < 0.5 ? 1 : -1);
    return v * amount;
  }

  /* 盘面位置：4 条旋臂 + 随机散布（开源 galaxy generator 的标准生成式） */
  function discPosition(i) {
    var r = Math.random() * RADIUS;
    var branchAngle = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;
    var spinAngle = r * SPIN;
    return [
      Math.cos(branchAngle + spinAngle) * r + randSigned(POWER, RANDOMNESS * r),
      randSigned(POWER, RANDOMNESS * r * 0.45),
      Math.sin(branchAngle + spinAngle) * r + randSigned(POWER, RANDOMNESS * r)
    ];
  }

  /* 星晕位置：压扁的球壳，营造远星空 */
  function haloPosition() {
    var r = 55 + Math.random() * 110;
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    return [
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi) * 0.65,
      r * Math.sin(phi) * Math.sin(theta)
    ];
  }

  function currentMode() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function haloColor() {
    var list = THEMES[currentMode()].halo;
    return list[Math.floor(Math.random() * list.length)].clone();
  }

  function discScale() { return 0.35 + Math.pow(Math.random(), 3) * 2.4; }
  function haloScale() { return 0.3 + Math.pow(Math.random(), 2) * 1.5; }

  var galaxy = new THREE.Group();
  galaxy.rotation.x = 0.9;    /* 俯视倾角 */
  galaxy.rotation.z = -0.35;  /* 构图斜置 */
  galaxy.position.set(-4, -6, -22); /* 星系中心偏左下并推向远处 */
  var disc = new THREE.Points(buildGeometry(DISC_COUNT, discPosition, function () { return new THREE.Color(); }, discScale), material);
  var halo = new THREE.Points(buildGeometry(HALO_COUNT, haloPosition, haloColor, haloScale), material);
  galaxy.add(disc);
  galaxy.add(halo);
  scene.add(galaxy);

  /* 按主题填充颜色 */
  function fillColors(points, mode) {
    var geo = points.geometry;
    var attr = geo.getAttribute('aColor');
    var count = attr.count;
    var isDisc = points === disc;
    var i, c;
    for (i = 0; i < count; i++) {
      if (isDisc) {
        c = THEMES[mode].inside.clone().lerp(THEMES[mode].outside, Math.random());
      } else {
        var list = THEMES[mode].halo;
        c = list[Math.floor(Math.random() * list.length)].clone();
      }
      attr.setXYZ(i, c.r, c.g, c.b);
    }
    attr.needsUpdate = true;
  }

  /* ---------- 星云光斑 ---------- */
  function glowTexture(r, g, b) {
    var size = 256;
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    var ctx = canvas.getContext('2d');
    var grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',0.5)');
    grad.addColorStop(0.4, 'rgba(' + r + ',' + g + ',' + b + ',0.16)');
    grad.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }

  var glows = [];
  for (var n = 0; n < 3; n++) {
    var sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(212, 175, 78),
      transparent: true,
      opacity: 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    var s = 110 + n * 40;
    sprite.scale.set(s, s, 1);
    sprite.position.set((n - 1) * 70, (n % 2 === 0 ? 1 : -1) * 26, -70);
    sprite.userData.baseOpacity = 0.06;
    scene.add(sprite);
    glows.push(sprite);
  }

  /* ---------- 主题 ---------- */
  function applyTheme() {
    var mode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var t = THEMES[mode];
    renderer.setClearColor(t.clear, 1);
    material.blending = t.additive ? THREE.AdditiveBlending : THREE.NormalBlending;
    material.uniforms.uOpacity.value = t.opacity;
    material.needsUpdate = true;
    fillColors(disc, mode);
    fillColors(halo, mode);
    glows.forEach(function (g, idx) {
      var rgb = t.glowRGB[idx % t.glowRGB.length];
      g.material.map = glowTexture(rgb[0], rgb[1], rgb[2]);
      g.material.opacity = t.glowOpacity[idx % t.glowOpacity.length];
      g.material.blending = t.additive ? THREE.AdditiveBlending : THREE.NormalBlending;
      g.material.needsUpdate = true;
    });
  }
  applyTheme();
  new MutationObserver(applyTheme).observe(document.documentElement, {
    attributes: true, attributeFilter: ['data-theme']
  });

  /* ---------- 交互与循环 ---------- */
  var mx = 0, my = 0;
  window.addEventListener('pointermove', function (e) {
    mx = (e.clientX / window.innerWidth) * 2 - 1;
    my = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    material.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  var clock = new THREE.Clock();
  var rafId = null;

  function loop() {
    rafId = requestAnimationFrame(loop);
    var dt = Math.min(clock.getDelta(), 0.05);
    material.uniforms.uTime.value += dt;

    disc.rotation.y += dt * 0.045;              /* 星系盘自转 */
    halo.rotation.y -= dt * 0.008;              /* 星晕反向极慢漂移 */
    glows.forEach(function (g, idx) {
      g.position.y += Math.sin(clock.elapsedTime * 0.18 + idx * 2.1) * dt * 1.4;
    });

    camera.position.x += (mx * 5 - camera.position.x) * 0.03;
    camera.position.y += (-my * 3.5 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }

  function start() { if (rafId === null) { clock.getDelta(); loop(); } }
  function stop() { if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; } }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });

  /* 调试句柄（可在控制台检查渲染状态） */
  window.__bg3d = { renderer: renderer, scene: scene, camera: camera, disc: disc, halo: halo, material: material };

  /* Three.js 就绪：隐藏 hero 的 CSS 星星，避免两套星空叠加 */
  var hero = document.getElementById('hero');
  if (hero) hero.classList.add('three-on');

  start();
  } catch (err) {
    window.__bg3dError = (err && (err.stack || err.message)) || String(err);
  }
})();
