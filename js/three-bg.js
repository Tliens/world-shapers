/* ==========================================================
   群星闪耀 · Three.js 星空背景
   粒子星野 + 星云光斑 + 偶发流星，鼠标视差跟随
   - three.js 加载失败 / WebGL 不可用 / 用户偏好减少动效时静默退回 CSS 星空
   - 页签不可见时暂停渲染，DPR 封顶 2
   ========================================================== */
(function () {
  'use strict';

  if (!window.THREE) return;
  var holder = document.getElementById('bg3d');
  if (!holder || !window.innerWidth) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
  } catch (e) {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  holder.appendChild(renderer.domElement);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 600);
  camera.position.z = 70;

  /* ---------- 星野粒子 ---------- */
  var COUNT = Math.max(1200, Math.min(2800, Math.floor(window.innerWidth * window.innerHeight / 650)));
  /* 调色板：金 / 蓝 / 紫 / 白 / 青，权重靠前 */
  var PALETTE = [
    [0.85, 0.66, 0.28],
    [0.85, 0.66, 0.28],
    [0.55, 0.70, 1.00],
    [0.55, 0.70, 1.00],
    [0.80, 0.62, 1.00],
    [1.00, 1.00, 1.00],
    [0.30, 0.78, 0.76]
  ];

  /* 圆形光晕贴图：没有贴图的粒子会被渲染成方块 */
  function dotTexture() {
    var size = 64;
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    var ctx = canvas.getContext('2d');
    var grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.7)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    return new THREE.CanvasTexture(canvas);
  }

  var positions = new Float32Array(COUNT * 3);
  var colors = new Float32Array(COUNT * 3);
  for (var i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 340;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
    positions[i * 3 + 2] = -260 + Math.random() * 210; /* 远景星场，避免近处巨大方块 */
    var c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    var b = 0.5 + Math.random() * 0.5;
    colors[i * 3] = c[0] * b;
    colors[i * 3 + 1] = c[1] * b;
    colors[i * 3 + 2] = c[2] * b;
  }

  var starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  var starMat = new THREE.PointsMaterial({
    size: 2.6,
    map: dotTexture(),
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  var stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  /* ---------- 星云光斑 ---------- */
  function glowTexture(r, g, b) {
    var size = 256;
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    var ctx = canvas.getContext('2d');
    var grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(' + r + ',' + g + ',' + b + ',0.55)');
    grad.addColorStop(0.4, 'rgba(' + r + ',' + g + ',' + b + ',0.18)');
    grad.addColorStop(1, 'rgba(' + r + ',' + g + ',' + b + ',0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    var tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }

  var NEBULA_COLORS = [
    [212, 175, 78],   /* 金 */
    [138, 99, 201],   /* 紫 */
    [74, 127, 212],   /* 蓝 */
    [47, 168, 150],   /* 青 */
    [212, 175, 78]
  ];
  var nebulae = [];
  for (var n = 0; n < 6; n++) {
    var nc = NEBULA_COLORS[n % NEBULA_COLORS.length];
    var sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: glowTexture(nc[0], nc[1], nc[2]),
      transparent: true,
      opacity: 0.05 + Math.random() * 0.06,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    var s = 90 + Math.random() * 110;
    sprite.scale.set(s, s, 1);
    sprite.position.set(
      (Math.random() - 0.5) * 240,
      (Math.random() - 0.5) * 140,
      -100 + Math.random() * 60
    );
    sprite.userData.drift = 0.2 + Math.random() * 0.5;
    scene.add(sprite);
    nebulae.push(sprite);
  }

  /* ---------- 流星 ---------- */
  var cometTex = glowTexture(255, 240, 200);
  var comets = [];
  for (var m = 0; m < 3; m++) {
    var comet = new THREE.Sprite(new THREE.SpriteMaterial({
      map: cometTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    }));
    comet.scale.set(3.2, 3.2, 1);
    comet.userData = { life: 0, wait: 2 + Math.random() * 6, vel: new THREE.Vector3() };
    scene.add(comet);
    comets.push(comet);
  }

  function launchComet(c) {
    c.userData.life = 1;
    c.material.opacity = 0.9;
    c.position.set(
      (Math.random() - 0.3) * 160,
      (Math.random() - 0.2) * 80,
      -40 + Math.random() * 60
    );
    var speed = 90 + Math.random() * 70;
    c.userData.vel.set(-1, -0.45 - Math.random() * 0.3, 0).normalize().multiplyScalar(speed);
  }

  /* ---------- 交互与循环 ---------- */
  var mx = 0, my = 0;
  window.addEventListener('pointermove', function (e) {
    mx = (e.clientX / window.innerWidth) * 2 - 1;
    my = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  }
  window.addEventListener('resize', onResize);

  var clock = new THREE.Clock();
  var rafId = null;

  function loop() {
    rafId = requestAnimationFrame(loop);
    var dt = Math.min(clock.getDelta(), 0.05);

    stars.rotation.y += dt * 0.012;
    stars.rotation.x += dt * 0.002;

    nebulae.forEach(function (nb, idx) {
      nb.position.x += Math.sin(clock.elapsedTime * 0.05 + idx) * dt * nb.userData.drift;
      nb.position.y += Math.cos(clock.elapsedTime * 0.04 + idx * 2) * dt * nb.userData.drift;
    });

    comets.forEach(function (c) {
      if (c.userData.life > 0) {
        c.userData.life -= dt * 0.55;
        c.position.addScaledVector(c.userData.vel, dt);
        c.material.opacity = Math.max(0, c.userData.life) * 0.9;
      } else {
        c.userData.wait -= dt;
        if (c.userData.wait <= 0) {
          c.userData.wait = 4 + Math.random() * 9;
          launchComet(c);
        }
      }
    });

    camera.position.x += (mx * 7 - camera.position.x) * 0.03;
    camera.position.y += (-my * 5 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, -40);
    renderer.render(scene, camera);
  }

  function start() { if (rafId === null) { clock.getDelta(); loop(); } }
  function stop() { if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; } }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });

  /* Three.js 就绪：隐藏 hero 的 CSS 星星，避免两套星空叠加 */
  var hero = document.getElementById('hero');
  if (hero) hero.classList.add('three-on');

  start();
})();
