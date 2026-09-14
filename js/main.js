/* ==========================================================
   群星闪耀 · 交互逻辑
   筛选 / 搜索 / 排序 / 卡片与时间轴视图 / 详情弹窗 / 主题切换
   ========================================================== */
(function () {
  'use strict';

  var PEOPLE = window.PEOPLE || [];
  var $ = function (s) { return document.querySelector(s); };

  var CATS = [
    { key: 'all',       name: '全部' },
    { key: 'science',   name: '科学家' },
    { key: 'thought',   name: '思想家' },
    { key: 'invention', name: '发明家' },
    { key: 'leader',    name: '领袖与改革者' },
    { key: 'art',       name: '艺术家' },
    { key: 'human',     name: '人道主义者' }
  ];

  var CAT_NAME = {};
  CATS.slice(1).forEach(function (c) { CAT_NAME[c.key] = c.name; });

  var state = { cat: 'all', query: '', sort: 'year', view: 'grid' };
  var filtered = [];
  var currentModalIndex = -1;
  var observer = null;

  /* ---------- 工具 ---------- */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function fmtYear(birth) {
    if (birth < 0) return '前' + Math.abs(birth);
    return String(birth);
  }

  /* ---------- 筛选 / 排序 ---------- */
  function applyFilter() {
    var q = state.query.trim().toLowerCase();
    filtered = PEOPLE.filter(function (p) {
      if (state.cat !== 'all' && p.cat !== state.cat) return false;
      if (!q) return true;
      var hay = [p.name, p.en, p.field, p.summary, CAT_NAME[p.cat]].join(' ').toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (state.sort === 'year') {
      filtered.sort(function (a, b) { return a.birth - b.birth; });
    } else {
      var order = CATS.slice(1).map(function (c) { return c.key; });
      filtered.sort(function (a, b) {
        var d = order.indexOf(a.cat) - order.indexOf(b.cat);
        return d !== 0 ? d : a.birth - b.birth;
      });
    }
  }

  /* ---------- 筛选按钮 ---------- */
  function renderFilters() {
    var wrap = $('#filters');
    wrap.innerHTML = CATS.map(function (c) {
      var n = c.key === 'all'
        ? PEOPLE.length
        : PEOPLE.filter(function (p) { return p.cat === c.key; }).length;
      return '<button class="filter-btn' + (c.key === state.cat ? ' active' : '') +
        '" type="button" data-cat="' + c.key + '">' + esc(c.name) +
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
    return (
      '<article class="card" data-id="' + p.id + '" data-cat="' + p.cat + '" tabindex="0" role="button" aria-label="查看' + esc(p.name) + '">' +
        '<div class="card-top">' +
          '<div class="avatar" aria-hidden="true">' + p.emoji + '</div>' +
          '<span class="era">' + esc(p.years) + '</span>' +
        '</div>' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<p class="en">' + esc(p.en) + '</p>' +
        '<p class="summary">' + esc(p.summary) + '</p>' +
        '<div class="card-foot">' +
          '<span class="chip">' + esc(CAT_NAME[p.cat]) + '</span>' +
          '<span class="more">了解详情 →</span>' +
        '</div>' +
      '</article>'
    );
  }

  function renderGrid() {
    $('#grid').innerHTML = filtered.map(cardHTML).join('');
    bindCards('#grid .card');
  }

  /* ---------- 时间轴视图 ---------- */
  function renderTimeline() {
    var list = filtered.slice().sort(function (a, b) { return a.birth - b.birth; });
    $('#timeline').innerHTML = list.map(function (p) {
      return (
        '<div class="tl-item" data-id="' + p.id + '" data-cat="' + p.cat + '" tabindex="0" role="button" aria-label="查看' + esc(p.name) + '">' +
          '<div class="tl-card">' +
            '<p class="tl-year">' + (p.birth < 0 ? '公元前 ' + Math.abs(p.birth) + ' 年' : '公元 ' + p.birth + ' 年') + '</p>' +
            '<p class="tl-name">' + p.emoji + ' ' + esc(p.name) +
              '<span class="en">' + esc(p.en) + '</span></p>' +
            '<p class="tl-sum">' + esc(p.summary) + '</p>' +
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
    var parts = [];
    if (state.cat !== 'all') parts.push(CAT_NAME[state.cat]);
    if (state.query.trim()) parts.push('“' + state.query.trim() + '”');
    $('#result-count').textContent =
      '共 ' + filtered.length + ' 位' +
      (parts.length ? '（' + parts.join(' · ') + '）' : '') +
      (state.sort === 'year' ? ' · 按时代先后' : ' · 按领域分组');
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

    $('#m-avatar').textContent = p.emoji;
    $('#m-name').textContent = p.name;
    $('#m-en').textContent = p.en;
    $('#m-cat').textContent = CAT_NAME[p.cat];
    $('#m-years').textContent = p.years;
    $('#m-field').textContent = p.field;
    $('#m-desc').textContent = p.desc;

    var modalCard = document.querySelector('.modal-card');
    modalCard.setAttribute('data-cat', p.cat);

    if (p.quote) {
      $('#m-quote').textContent = p.quote;
      $('#m-quote-wrap').classList.remove('hidden');
    } else {
      $('#m-quote-wrap').classList.add('hidden');
    }

    updateModalNav();
    $('#modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function updateModalNav() {
    var has = currentModalIndex >= 0 && filtered.length > 1;
    var prev = $('#m-prev'), next = $('#m-next');
    prev.disabled = !has || currentModalIndex <= 0;
    next.disabled = !has || currentModalIndex >= filtered.length - 1;
    prev.textContent = '← ' + (has && currentModalIndex > 0 ? filtered[currentModalIndex - 1].name : '上一人');
    next.textContent = (has && currentModalIndex < filtered.length - 1 ? filtered[currentModalIndex + 1].name : '下一人') + ' →';
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

  /* ---------- 星空 ---------- */
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

  /* ---------- 主题 ---------- */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    var theme = saved || 'light';
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
  }

  /* ---------- 启动 ---------- */
  initTheme();
  makeStars();
  renderFilters();
  render();
  bind();
  animateStats();
})();
