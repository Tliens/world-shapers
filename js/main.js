/* ==========================================================
   群星闪耀 · 交互逻辑
   双语（zh/en）/ 筛选 / 搜索 / 排序 / 卡片与时间轴 / 弹窗 / 主题
   语言：默认英文；中国大陆访客自动中文；手动切换后记忆
   人物肖像来自 assets/portraits/portraits.js（缺失时退回 emoji）
   ========================================================== */
(function () {
  'use strict';

  var PEOPLE = window.PEOPLE || [];
  var PEOPLE_EN_BY_ID = {};
  (window.PEOPLE_EN || []).forEach(function (e) { PEOPLE_EN_BY_ID[e.id] = e; });
  var PORTRAITS = window.PORTRAITS || {};
  var $ = function (s) { return document.querySelector(s); };

  var LANG = (window.AppI18N && window.AppI18N.detect()) || 'zh';
  function T() { return window.AppI18N.dict[LANG]; }

  var CATS = ['all', 'science', 'thought', 'invention', 'leader', 'explorer', 'art', 'human'];

  var state = { cat: 'all', query: '', sort: 'year', view: 'grid' };
  var filtered = [];
  var currentModalIndex = -1;
  var observer = null;

  /* ---------- 多语言取值 ---------- */
  function catName(key) { return T()['cat_' + key] || key; }

  function personInfo(p) {
    if (LANG === 'en') {
      var e = PEOPLE_EN_BY_ID[p.id];
      if (e) {
        return { name: e.name, sub: e.alt, years: e.years, field: e.field,
          summary: e.summary, desc: e.desc, quote: e.quote };
      }
    }
    return { name: p.name, sub: p.en, years: p.years, field: p.field,
      summary: p.summary, desc: p.desc, quote: p.quote };
  }

  /* ---------- 工具 ---------- */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function portraitOf(id) {
    return PORTRAITS[id] ? PORTRAITS[id].src : null;
  }

  /* 首屏与关于区的动态数字 */
  function fillDynamicNumbers() {
    var n = PEOPLE.length;
    var cats = CATS.length - 1;
    var min = Infinity, max = -Infinity;
    PEOPLE.forEach(function (p) {
      if (p.birth < min) min = p.birth;
      if (p.birth > max) max = p.birth;
    });
    var span = Math.round((max - min) / 100) * 100;

    var hc = $('#hero-count');
    var ac = $('#about-count');
    if (hc) hc.textContent = n;
    if (ac) ac.textContent = n;
    var stats = document.querySelectorAll('#stats b');
    stats[0].setAttribute('data-count', n);
    stats[1].setAttribute('data-count', cats);
    stats[2].setAttribute('data-count', span);
  }

  /* ---------- 静态 UI 文案 ---------- */
  function renderStaticText() {
    var t = T();
    document.documentElement.setAttribute('lang', LANG === 'en' ? 'en' : 'zh-CN');
    document.title = t.title;

    document.querySelector('.nav a[href="#explore"]').textContent = t.nav_people;
    $('#nav-timeline').textContent = t.nav_timeline;
    document.querySelector('.nav a[href="#about"]').textContent = t.nav_about;

    var themeBtn = $('#theme-toggle');
    themeBtn.title = t.theme_title;
    themeBtn.setAttribute('aria-label', t.theme_title);

    var langBtn = $('#lang-toggle');
    langBtn.textContent = LANG === 'en' ? '中' : 'EN';
    langBtn.title = LANG === 'en' ? '切换到中文' : 'Switch to English';

    document.querySelector('.hero h1').innerHTML = t.hero_h1;
    document.querySelector('.lede').innerHTML = t.lede;

    var search = $('#search');
    search.placeholder = t.search_ph;
    search.setAttribute('aria-label', t.search_aria);
    $('#random-btn').textContent = t.random;

    var labels = document.querySelectorAll('#stats .stat span');
    labels[0].textContent = t.stat_people;
    labels[1].textContent = t.stat_fields;
    labels[2].textContent = t.stat_years;

    document.querySelector('.sort-wrap span').textContent = t.sort_label;
    $('#sort').options[0].textContent = t.sort_year;
    $('#sort').options[1].textContent = t.sort_cat;

    $('#view-grid').textContent = t.view_grid;
    $('#view-timeline').textContent = t.view_timeline;

    document.querySelector('.empty p:nth-of-type(2)').textContent = t.empty;
    $('#clear-search').textContent = t.clear;

    var cards = document.querySelectorAll('.about-card');
    cards[0].querySelector('h3').innerHTML = t.about1_t;
    cards[0].querySelector('p').innerHTML = t.about1_p;
    cards[1].querySelector('h3').innerHTML = t.about2_t;
    cards[1].querySelector('p').innerHTML = t.about2_p;
    cards[2].querySelector('h3').innerHTML = t.about3_t;
    cards[2].querySelector('p').innerHTML = t.about3_p;

    document.querySelector('.footer-brand').innerHTML =
      '<span class="brand-star">✦</span> ' + t.footer_brand;
    document.querySelector('.footer-note').textContent = t.footer_note;
  }

  /* ---------- 筛选 / 排序 ---------- */
  function applyFilter() {
    var q = state.query.trim().toLowerCase();
    filtered = PEOPLE.filter(function (p) {
      if (state.cat !== 'all' && p.cat !== state.cat) return false;
      if (!q) return true;
      var info = personInfo(p);
      /* 双语检索：当前语言字段 + 两种语言的姓名 */
      var hay = [info.name, info.sub, info.field, info.summary, catName(p.cat),
        p.name, p.en].join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (state.sort === 'year') {
      filtered.sort(function (a, b) { return a.birth - b.birth; });
    } else {
      var order = CATS.slice(1);
      filtered.sort(function (a, b) {
        var d = order.indexOf(a.cat) - order.indexOf(b.cat);
        return d !== 0 ? d : a.birth - b.birth;
      });
    }
  }

  /* ---------- 筛选按钮 ---------- */
  function renderFilters() {
    var wrap = $('#filters');
    wrap.innerHTML = CATS.map(function (key) {
      var n = key === 'all'
        ? PEOPLE.length
        : PEOPLE.filter(function (p) { return p.cat === key; }).length;
      return '<button class="filter-btn' + (key === state.cat ? ' active' : '') +
        '" type="button" data-cat="' + key + '">' + esc(catName(key)) +
        ' <span class="count">' + n + '</span></button>';
    }).join('');

    wrap.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.cat = btn.getAttribute('data-cat');
        wrap.querySelectorAll('.filter-btn').forEach(function (b) {
          b.classList.toggle('active', b === btn);
        });
        render();
      });
    });
  }

  /* ---------- 卡片视图 ---------- */
  function cardHTML(p) {
    var t = T();
    var info = personInfo(p);
    var src = portraitOf(p.id);
    var media;
    if (src) {
      media =
        '<div class="card-media">' +
          '<img class="card-img" src="' + esc(src) + '" alt="' + esc(info.name) + '" loading="lazy" data-lazy="1" />' +
          '<span class="badge-emoji" aria-hidden="true">' + p.emoji + '</span>' +
        '</div>';
    } else {
      media =
        '<div class="card-media fallback">' +
          '<span class="fallback-emoji" aria-hidden="true">' + p.emoji + '</span>' +
        '</div>';
    }
    return (
      '<article class="card" data-id="' + p.id + '" data-cat="' + p.cat + '" tabindex="0" role="button" aria-label="' +
        esc(t.view_aria + info.name) + '">' +
        media +
        '<span class="card-era">' + esc(info.years) + '</span>' +
        '<div class="card-body">' +
          '<h3>' + esc(info.name) + '</h3>' +
          '<p class="en">' + esc(info.sub) + '</p>' +
          '<p class="summary">' + esc(info.summary) + '</p>' +
          '<div class="card-foot">' +
            '<span class="chip">' + esc(catName(p.cat)) + '</span>' +
            '<span class="more">' + esc(t.more) + '</span>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function renderGrid() {
    $('#grid').innerHTML = filtered.map(cardHTML).join('');
    bindCards('#grid .card');
    watchLazyImages();
  }

  /* 图片加载完成后的淡入 */
  function watchLazyImages() {
    document.querySelectorAll('#grid img[data-lazy]').forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', function () { img.classList.add('loaded'); });
        img.addEventListener('error', function () { img.style.display = 'none'; });
      }
    });
  }

  /* ---------- 时间轴视图 ---------- */
  function timelineYear(birth) {
    var t = T();
    return birth < 0
      ? t.year_bc.replace('{n}', Math.abs(birth))
      : t.year_ad.replace('{n}', birth);
  }

  function renderTimeline() {
    var list = filtered.slice().sort(function (a, b) { return a.birth - b.birth; });
    $('#timeline').innerHTML = list.map(function (p) {
      var info = personInfo(p);
      var t = T();
      return (
        '<div class="tl-item" data-id="' + p.id + '" data-cat="' + p.cat + '" tabindex="0" role="button" aria-label="' +
          esc(t.view_aria + info.name) + '">' +
          '<div class="tl-card">' +
            '<p class="tl-year">' + esc(timelineYear(p.birth)) + '</p>' +
            '<p class="tl-name">' + p.emoji + ' ' + esc(info.name) +
              '<span class="en">' + esc(info.sub) + '</span></p>' +
            '<p class="tl-sum">' + esc(info.summary) + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join('');
    bindCards('#timeline .tl-item');
  }

  /* ---------- 渲染入口 ---------- */
  function render() {
    applyFilter();
    renderGrid();
    renderTimeline();
    updateCount();
    updateEmpty();
    observeReveal();
  }

  function updateCount() {
    var t = T();
    var parts = [];
    if (state.cat !== 'all') parts.push(catName(state.cat));
    if (state.query.trim()) parts.push('\u201C' + state.query.trim() + '\u201D');
    var countB = t.count_b;
    if (LANG === 'en') countB = filtered.length === 1 ? ' result' : ' results';
    $('#result-count').textContent =
      t.count_a + filtered.length + countB +
      (parts.length ? t.count_open + parts.join(' · ') + t.count_close : '') +
      (state.sort === 'year' ? t.sorted_era : t.sorted_cat);
  }

  function updateEmpty() {
    var isEmpty = filtered.length === 0;
    $('#empty').classList.toggle('hidden', !isEmpty);
    $('#grid').classList.toggle('hidden', isEmpty || state.view !== 'grid');
    $('#timeline').classList.toggle('hidden', isEmpty || state.view !== 'timeline');
  }

  /* ---------- 卡片点击 ---------- */
  function bindCards(selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener('click', function () {
        openModal(el.getAttribute('data-id'));
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(el.getAttribute('data-id'));
        }
      });
    });
  }

  /* ---------- 视图切换 ---------- */
  function setView(view, scroll) {
    state.view = view;
    var isGrid = view === 'grid';
    $('#grid').classList.toggle('hidden', !isGrid);
    $('#timeline').classList.toggle('hidden', isGrid);
    $('#view-grid').classList.toggle('active', isGrid);
    $('#view-grid').setAttribute('aria-pressed', String(isGrid));
    $('#view-timeline').classList.toggle('active', !isGrid);
    $('#view-timeline').setAttribute('aria-pressed', String(!isGrid));
    updateEmpty();
    observeReveal();
    if (scroll) {
      $('#explore').scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ---------- 弹窗 ---------- */
  function openModal(id) {
    var p = PEOPLE.find(function (x) { return x.id === id; });
    if (!p) return;
    currentModalIndex = filtered.findIndex(function (x) { return x.id === id; });

    var modalCard = document.querySelector('.modal-card');
    modalCard.setAttribute('data-cat', p.cat);

    var portrait = $('#m-portrait');
    var src = portraitOf(p.id);
    var oldImg = portrait.querySelector('img');
    if (oldImg) oldImg.remove();
    if (src) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = personInfo(p).name;
      portrait.appendChild(img);
    }
    $('#m-avatar').textContent = p.emoji;
    $('#m-credit').textContent = src ? T().credit : '';

    var info = personInfo(p);
    $('#m-name').textContent = info.name;
    $('#m-en').textContent = info.sub;
    $('#m-cat').textContent = catName(p.cat);
    $('#m-years').textContent = info.years;
    $('#m-field').textContent = info.field;

    $('#m-desc').innerHTML = String(info.desc).split('\n').map(function (para) {
      return '<p>' + esc(para) + '</p>';
    }).join('');

    if (info.quote) {
      $('#m-quote').textContent = info.quote;
      $('#m-quote-wrap').classList.remove('hidden');
    } else {
      $('#m-quote-wrap').classList.add('hidden');
    }

    updateModalNav();
    $('#modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modalCard.scrollTop = 0;
  }

  function updateModalNav() {
    var t = T();
    var has = currentModalIndex >= 0 && filtered.length > 1;
    var prev = $('#m-prev'), next = $('#m-next');
    prev.disabled = !has || currentModalIndex <= 0;
    next.disabled = !has || currentModalIndex >= filtered.length - 1;
    prev.textContent = (has && currentModalIndex > 0)
      ? '← ' + personInfo(filtered[currentModalIndex - 1]).name
      : t.prev;
    next.textContent = (has && currentModalIndex < filtered.length - 1)
      ? personInfo(filtered[currentModalIndex + 1]).name + ' →'
      : t.next;
  }

  function closeModal() {
    $('#modal').classList.add('hidden');
    document.body.style.overflow = '';
  }

  function step(dir) {
    var i = currentModalIndex + dir;
    if (i >= 0 && i < filtered.length) {
      openModal(filtered[i].id);
    }
  }

  /* ---------- 头像走廊 ---------- */
  function renderFaceStrip() {
    var strip = $('#face-strip');
    var withFaces = PEOPLE.filter(function (p) { return portraitOf(p.id); });
    if (withFaces.length < 8) { strip.parentElement.style.display = 'none'; return; }
    var faces = withFaces.map(function (p) {
      return '<img class="face" src="' + esc(portraitOf(p.id)) + '" alt="" loading="lazy" />';
    });
    /* 复制一份实现无缝滚动 */
    strip.innerHTML = faces.concat(faces).join('');
  }

  /* ---------- 首屏数字滚动 ---------- */
  function animateStats() {
    document.querySelectorAll('#stats b').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var start = null, dur = 1300;
      function tick(ts) {
        if (!start) start = ts;
        var t = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased).toLocaleString();
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  /* ---------- CSS 星空（Three.js 不可用时的后备） ---------- */
  function makeStars() {
    var wrap = $('#stars');
    var html = '';
    for (var i = 0; i < 70; i++) {
      var size = (Math.random() * 1.9 + 0.8).toFixed(1);
      html += '<span class="star" style="left:' + (Math.random() * 100).toFixed(2) +
        '%;top:' + (Math.random() * 100).toFixed(2) +
        '%;width:' + size + 'px;height:' + size + 'px;--d:' + (2.6 + Math.random() * 4).toFixed(1) +
        's;--delay:' + (Math.random() * 5).toFixed(1) + 's;"></span>';
    }
    wrap.innerHTML = html;
  }

  /* ---------- 入场动画 ---------- */
  function observeReveal() {
    if (observer) observer.disconnect();
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.card, .tl-item').forEach(function (el) { el.classList.add('in'); });
      return;
    }
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.card:not(.in), .tl-item:not(.in)').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 主题（默认夜间） ---------- */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    var theme = saved || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    $('#theme-toggle').textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function toggleTheme() {
    var cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', cur);
    try { localStorage.setItem('theme', cur); } catch (e) {}
    $('#theme-toggle').textContent = cur === 'dark' ? '☀️' : '🌙';
  }

  /* ---------- 事件绑定 ---------- */
  function bind() {
    $('#search').addEventListener('input', function (e) {
      state.query = e.target.value;
      render();
    });

    $('#sort').addEventListener('change', function (e) {
      state.sort = e.target.value;
      render();
    });

    $('#view-grid').addEventListener('click', function () { setView('grid', false); });
    $('#view-timeline').addEventListener('click', function () { setView('timeline', false); });
    $('#nav-timeline').addEventListener('click', function () { setView('timeline', true); });

    $('#random-btn').addEventListener('click', function () {
      var pool = PEOPLE;
      if (state.cat !== 'all') pool = PEOPLE.filter(function (p) { return p.cat === state.cat; });
      var pick = pool[Math.floor(Math.random() * pool.length)];
      openModal(pick.id);
    });

    $('#clear-search').addEventListener('click', function () {
      state.query = '';
      state.cat = 'all';
      $('#search').value = '';
      renderFilters();
      render();
    });

    document.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    $('#m-prev').addEventListener('click', function () { step(-1); });
    $('#m-next').addEventListener('click', function () { step(1); });

    document.addEventListener('keydown', function (e) {
      if ($('#modal').classList.contains('hidden')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });

    $('#theme-toggle').addEventListener('click', toggleTheme);

    $('#lang-toggle').addEventListener('click', function () {
      LANG = LANG === 'zh' ? 'en' : 'zh';
      window.AppI18N.save(LANG);
      closeModal();
      renderStaticText();
      fillDynamicNumbers();
      renderFilters();
      render();
    });
  }

  /* ---------- 启动 ---------- */
  renderStaticText();
  initTheme();
  makeStars();
  renderFaceStrip();
  fillDynamicNumbers();
  renderFilters();
  render();
  bind();
  animateStats();
})();
