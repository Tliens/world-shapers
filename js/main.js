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
  var HIGHLIGHTS = window.HIGHLIGHTS || {};
  var VOTE_ISSUES = window.VOTE_ISSUES || {};
  var VOTES = {}; /* 人物 id → 👍 票数 */
  var $ = function (s) { return document.querySelector(s); };

  var LANG = (window.AppI18N && window.AppI18N.detect()) || 'zh';
  function T() { return window.AppI18N.dict[LANG]; }

  var CATS = ['all', 'science', 'thought', 'invention', 'leader', 'explorer', 'art', 'human'];

  var state = { cat: 'all', query: '', sort: 'year', view: 'grid' };
  var filtered = [];
  var currentModalIndex = -1;
  var modalList = [];      /* 弹窗上/下一人的导航上下文 */
  var pushedHash = false;  /* 本次弹窗是否由我们推入 history */
  var baseHistLen = 0;     /* 打开弹窗前的 history 长度，关闭时一次退回 */
  var lastFocused = null;  /* 弹窗打开前的焦点元素，关闭时归还 */
  var observer = null;

  /* ---------- hash 路由 #/person/<id> ---------- */
  function personFromHash() {
    var m = /^#\/person\/([a-z0-9]+)$/i.exec(location.hash);
    return m ? m[1] : null;
  }

  function setHash(id) {
    var target = '#/person/' + id;
    if (location.hash !== target) {
      pushedHash = true;
      location.hash = target;
    }
  }

  function clearHash() {
    pushedHash = false;
    if (location.hash) {
      history.replaceState(null, '', location.pathname + location.search);
    }
  }

  function onHashChange() {
    var id = personFromHash();
    if (id && PEOPLE.some(function (p) { return p.id === id; })) {
      var current = currentModalIndex >= 0 && modalList[currentModalIndex];
      if (current && current.id === id && !$('#modal').classList.contains('hidden')) return; /* 已打开同一人 */
      openModal(id, { fromHash: true });
    } else if (!$('#modal').classList.contains('hidden')) {
      closeModal({ skipHistory: true });
    }
  }

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
  /* 逐元素容错写入：版面上缺哪个元素就跳过哪句文案，不中断整站 */
  function setText(sel, txt) {
    var el = document.querySelector(sel);
    if (el) el.textContent = txt;
  }
  function setHTML(sel, html) {
    var el = document.querySelector(sel);
    if (el) el.innerHTML = html;
  }

  function renderStaticText() {
    var t = T();
    document.documentElement.setAttribute('lang', LANG === 'en' ? 'en' : 'zh-CN');
    document.title = t.title;

    setHTML('.brand', '<span class="brand-star">✦</span>' + t.brand);
    setText('.nav a[href="#explore"]', t.nav_people);
    setText('#nav-timeline', t.nav_timeline);
    setText('.nav a[href="#about"]', t.nav_about);

    var themeBtn = $('#theme-toggle');
    if (themeBtn) {
      themeBtn.title = t.theme_title;
      themeBtn.setAttribute('aria-label', t.theme_title);
    }

    var langBtn = $('#lang-toggle');
    if (langBtn) {
      langBtn.textContent = LANG === 'en' ? '中' : 'EN';
      langBtn.title = LANG === 'en' ? '切换到中文' : 'Switch to English';
    }

    setHTML('.hero h1', t.hero_h1);
    setHTML('.lede', t.lede);

    var search = $('#search');
    if (search) {
      search.placeholder = t.search_ph;
      search.setAttribute('aria-label', t.search_aria);
    }
    setText('#random-btn', t.random);

    var labels = document.querySelectorAll('#stats .stat span');
    if (labels.length >= 3) {
      labels[0].textContent = t.stat_people;
      labels[1].textContent = t.stat_fields;
      labels[2].textContent = t.stat_years;
    }

    setText('.sort-wrap span', t.sort_label);
    var sortSel = $('#sort');
    if (sortSel) {
      sortSel.options[0].textContent = t.sort_year;
      sortSel.options[1].textContent = t.sort_votes;
      sortSel.options[2].textContent = t.sort_cat;
    }

    setText('#view-grid', t.view_grid);
    setText('#view-timeline', t.view_timeline);

    setText('.empty p:nth-of-type(2)', t.empty);
    setText('#clear-search', t.clear);

    var cards = document.querySelectorAll('.about-card');
    if (cards.length >= 3) {
      cards[0].querySelector('h3').innerHTML = t.about1_t;
      cards[0].querySelector('p').innerHTML = t.about1_p;
      cards[1].querySelector('h3').innerHTML = t.about2_t;
      cards[1].querySelector('p').innerHTML = t.about2_p;
      cards[2].querySelector('h3').innerHTML = t.about3_t;
      cards[2].querySelector('p').innerHTML = t.about3_p;
    }

    setHTML('.footer-brand', '<span class="brand-star">✦</span> ' + t.footer_brand);
    setText('.footer-note', t.footer_note);
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
    } else if (state.sort === 'votes') {
      filtered.sort(function (a, b) {
        var d = (VOTES[b.id] || 0) - (VOTES[a.id] || 0);
        return d !== 0 ? d : a.birth - b.birth;
      });
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
    var votePill = voteUrl(p.id)
      ? '<button class="vote-pill" type="button" data-vote="' + p.id + '" title="' + esc(t.vote_tooltip) +
        '" aria-label="' + esc(t.vote_aria) + '">▲ <span class="vcount">' +
        (VOTES[p.id] !== undefined ? VOTES[p.id] : '·') + '</span></button>'
      : '';
    return (
      '<article class="card" data-id="' + p.id + '" data-cat="' + p.cat + '" tabindex="0" role="button" aria-label="' +
        esc(t.view_aria + info.name) + '">' +
        media +
        votePill +
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
    bindVoteButtons('#grid .card');
    watchLazyImages();
  }

  /* ---------- 投票 ---------- */
  function voteUrl(id) {
    return VOTE_ISSUES[id]
      ? 'https://github.com/Tliens/world-shapers/issues/' + VOTE_ISSUES[id]
      : null;
  }

  function bindVoteButtons(scope) {
    document.querySelectorAll(scope + ' .vote-pill').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var url = voteUrl(btn.getAttribute('data-vote'));
        if (url) window.open(url, '_blank');
      });
    });
  }

  /* 从 GitHub Issues 拉取 👍 票数（10 分钟本地缓存，1 次请求取全部） */
  function loadVoteCounts() {
    if (!Object.keys(VOTE_ISSUES).length) return;
    var cached = null;
    try { cached = JSON.parse(localStorage.getItem('voteCache') || 'null'); } catch (e) {}
    if (cached && cached.c && Date.now() - cached.t < 600000) {
      applyVoteCounts(cached.c);
      return;
    }
    fetch('https://api.github.com/repos/Tliens/world-shapers/issues?per_page=100&state=all&labels=vote')
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (list) {
        var counts = {};
        list.forEach(function (it) {
          if (!it.reactions) return;
          for (var id in VOTE_ISSUES) {
            if (VOTE_ISSUES[id] === it.number) counts[id] = it.reactions['+1'] || 0;
          }
        });
        try { localStorage.setItem('voteCache', JSON.stringify({ t: Date.now(), c: counts })); } catch (e) {}
        applyVoteCounts(counts);
      })
      .catch(function () {
        /* 限流或离线：退回过期缓存（若有），票数仍在只是略旧 */
        if (cached && cached.c) applyVoteCounts(cached.c);
      });
  }

  function applyVoteCounts(counts) {
    Object.keys(counts).forEach(function (id) { VOTES[id] = counts[id]; });
    document.querySelectorAll('.vote-pill').forEach(function (pill) {
      var id = pill.getAttribute('data-vote');
      if (VOTES[id] !== undefined) pill.querySelector('.vcount').textContent = VOTES[id];
    });
    if (currentModalIndex >= 0 && modalList[currentModalIndex]) {
      updateModalVote(modalList[currentModalIndex]);
    }
    if (state.sort === 'votes') render();
  }

  function updateModalVote(p) {
    var btn = $('#m-vote');
    if (!btn) return;
    var url = voteUrl(p.id);
    btn.disabled = !url;
    var n = VOTES[p.id];
    btn.textContent = T().vote_btn + (n !== undefined ? ' · ' + n : '');
  }

  /* ---------- 弹窗附加：维基原文 / 分享 / 相关人物 ---------- */
  function wikiUrl(p) {
    if (!p.wiki) return null;
    var parts = p.wiki.split('/');
    return 'https://' + parts[0] + '.wikipedia.org/wiki/' + encodeURIComponent(parts.slice(1).join('/'));
  }

  function shareUrl(p) {
    return location.origin + location.pathname + '#/person/' + p.id;
  }

  function updateModalLinks(p) {
    var t = T();
    var wikiBtn = $('#m-wiki'), shareBtn = $('#m-share');
    var wUrl = wikiUrl(p);
    if (wikiBtn) {
      wikiBtn.disabled = !wUrl;
      wikiBtn.onclick = function () { var u = wikiUrl(p); if (u) window.open(u, '_blank'); };
      wikiBtn.textContent = t.wiki_link;
    }
    if (shareBtn) {
      shareBtn.textContent = t.share;
      shareBtn.onclick = function () {
        var data = { title: document.title, text: personInfo(p).name + ' — ' + personInfo(p).summary, url: shareUrl(p) };
        if (navigator.share) {
          navigator.share(data).catch(function () {});
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(data.url).then(function () {
            shareBtn.textContent = t.share_copied;
            setTimeout(function () { shareBtn.textContent = t.share; }, 1600);
          }).catch(function () {});
        }
      };
    }

    /* 相关人物：同领域、年代最接近的四位 */
    var relWrap = $('#m-related');
    if (!relWrap) return;
    var relList = $('#m-related-list');
    var relTitle = $('#m-related-title');
    var rel = PEOPLE.filter(function (x) { return x.cat === p.cat && x.id !== p.id; })
      .sort(function (a, b) { return Math.abs(a.birth - p.birth) - Math.abs(b.birth - p.birth); })
      .slice(0, 4);
    if (relTitle) relTitle.textContent = t.related;
    if (!rel.length) { relWrap.classList.add('hidden'); return; }
    relWrap.classList.remove('hidden');
    relList.innerHTML = rel.map(function (r) {
      var src = portraitOf(r.id);
      var face = src
        ? '<img src="' + esc(src) + '" alt="" loading="lazy" />'
        : '<span class="related-emoji">' + r.emoji + '</span>';
      return '<button class="related-item" type="button" data-id="' + r.id + '" title="' + esc(personInfo(r).name) + '">' +
        face + '<span class="related-name">' + esc(personInfo(r).name) + '</span></button>';
    }).join('');
    relList.querySelectorAll('.related-item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        openModal(btn.getAttribute('data-id'));
      });
    });
  }

  /* ---------- 今日人物（按日期轮换，每天一位） ---------- */
  function fillTodayPerson() {
    var btn = $('#today-person');
    if (!btn || !PEOPLE.length) return;
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var day = Math.floor((now - start) / 864e5);
    var p = PEOPLE[day % PEOPLE.length];
    var info = personInfo(p);
    btn.innerHTML = '<span class="today-label">' + esc(T().today_label) + '</span>' +
      '<span class="today-name">' + p.emoji + ' ' + esc(info.name) + '</span>' +
      '<span class="today-cta">' + esc(T().today_cta) + '</span>';
    btn.classList.remove('hidden');
    btn.onclick = function () { openModal(p.id); };
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
      (state.sort === 'year' ? t.sorted_era
        : state.sort === 'votes' ? t.sorted_votes : t.sorted_cat);
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
      el.addEventListener('click', function (e) {
        if (e.target.closest('.vote-pill')) return; /* 投票按钮自己处理 */
        openModal(el.getAttribute('data-id'));
      });
      el.addEventListener('keydown', function (e) {
        if (e.target !== el) return; /* 投票按钮等子元素的按键不触发弹窗 */
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
  function openModal(id, opts) {
    opts = opts || {};
    var p = PEOPLE.find(function (x) { return x.id === id; });
    if (!p) return;
    /* 导航上下文：优先当前筛选结果，人物不在其中（如深链接）则用全量 */
    var idx = filtered.findIndex(function (x) { return x.id === id; });
    modalList = idx >= 0 ? filtered : PEOPLE;
    currentModalIndex = modalList.findIndex(function (x) { return x.id === id; });
    if ($('#modal').classList.contains('hidden')) baseHistLen = history.length;
    if (!opts.fromHash) setHash(id);

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

    /* 主要成就亮点 */
    var hlWrap = $('#m-highlights');
    var hl = HIGHLIGHTS[p.id];
    if (hl && (hl[LANG] || hl.zh)) {
      var items = hl[LANG] || hl.zh;
      $('#m-hl-title').textContent = T().hl_title;
      $('#m-hl-list').innerHTML = items.map(function (it) {
        return '<li>' + esc(it) + '</li>';
      }).join('');
      hlWrap.classList.remove('hidden');
    } else {
      hlWrap.classList.add('hidden');
    }

    if (info.quote) {
      $('#m-quote').textContent = info.quote;
      $('#m-quote-wrap').classList.remove('hidden');
    } else {
      $('#m-quote-wrap').classList.add('hidden');
    }

    updateModalNav();
    updateModalVote(p);
    updateModalLinks(p);
    $('#modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modalCard.scrollTop = 0;

    /* 焦点管理：记住来源焦点并移到弹窗内 */
    lastFocused = document.activeElement;
    var closeBtn = modalCard.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function updateModalNav() {
    var t = T();
    var has = currentModalIndex >= 0 && modalList.length > 1;
    var prev = $('#m-prev'), next = $('#m-next');
    prev.disabled = !has || currentModalIndex <= 0;
    next.disabled = !has || currentModalIndex >= modalList.length - 1;
    prev.textContent = (has && currentModalIndex > 0)
      ? '← ' + personInfo(modalList[currentModalIndex - 1]).name
      : t.prev;
    next.textContent = (has && currentModalIndex < modalList.length - 1)
      ? personInfo(modalList[currentModalIndex + 1]).name + ' →'
      : t.next;
  }

  function closeModal(opts) {
    opts = opts || {};
    $('#modal').classList.add('hidden');
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
    lastFocused = null;
    if (!opts.skipHistory) {
      if (pushedHash && personFromHash()) {
        var delta = history.length - baseHistLen;
        if (delta > 0) {
          history.go(-delta); /* 一次性退回打开弹窗前的位置，hashchange 完成收尾 */
        } else {
          clearHash();
        }
      } else {
        clearHash();
      }
    }
  }

  function step(dir) {
    var i = currentModalIndex + dir;
    if (i >= 0 && i < modalList.length) {
      openModal(modalList[i].id);
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
    function on(sel, evt, fn) {
      var el = document.querySelector(sel);
      if (el) el.addEventListener(evt, fn);
    }

    on('#search', 'input', function (e) {
      state.query = e.target.value;
      render();
    });

    on('#sort', 'change', function (e) {
      state.sort = e.target.value;
      render();
    });

    on('#view-grid', 'click', function () { setView('grid', false); });
    on('#view-timeline', 'click', function () { setView('timeline', false); });
    on('#nav-timeline', 'click', function () { setView('timeline', true); });

    on('#random-btn', 'click', function () {
      var pool = PEOPLE;
      if (state.cat !== 'all') pool = PEOPLE.filter(function (p) { return p.cat === state.cat; });
      var pick = pool[Math.floor(Math.random() * pool.length)];
      openModal(pick.id);
    });

    on('#clear-search', 'click', function () {
      state.query = '';
      state.cat = 'all';
      var s = $('#search');
      if (s) s.value = '';
      renderFilters();
      render();
    });

    document.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    on('#m-prev', 'click', function () { step(-1); });
    on('#m-next', 'click', function () { step(1); });

    on('#m-vote', 'click', function () {
      if (currentModalIndex >= 0 && modalList[currentModalIndex]) {
        var url = voteUrl(modalList[currentModalIndex].id);
        if (url) window.open(url, '_blank');
      }
    });

    document.addEventListener('keydown', function (e) {
      var modal = $('#modal');
      if (!modal || modal.classList.contains('hidden')) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'ArrowLeft') { step(-1); return; }
      if (e.key === 'ArrowRight') { step(1); return; }
      /* 焦点陷阱：Tab 在弹窗内循环 */
      if (e.key === 'Tab') {
        var focusables = modal.querySelectorAll('button:not(:disabled), [href], input, [tabindex="0"]');
        if (!focusables.length) return;
        var first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    });

    on('#theme-toggle', 'click', toggleTheme);

    on('#lang-toggle', 'click', function () {
      LANG = LANG === 'zh' ? 'en' : 'zh';
      window.AppI18N.save(LANG);
      closeModal({ skipHistory: true });
      clearHash();
      renderStaticText();
      fillDynamicNumbers();
      renderFilters();
      render();
    });

    window.addEventListener('hashchange', onHashChange);

    /* 手机端汉堡菜单 */
    var navToggle = $('#nav-toggle');
    var nav = document.querySelector('.nav');
    if (!navToggle || !nav) return;
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('a, button').forEach(function (el) {
      el.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.textContent = '☰';
      });
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== navToggle) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.textContent = '☰';
      }
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
  loadVoteCounts();
  fillTodayPerson();

  /* 深链接：#/person/<id> 直接打开详情 */
  var hashId = personFromHash();
  if (hashId) openModal(hashId, { fromHash: true });
})();
