/* ==========================================================
   群星闪耀 · 多语言支持
   - 默认英文；时区/系统语言显示为中国时自动切换为中文
   - 用户手动切换后存入 localStorage，优先于自动检测
   ========================================================== */
window.AppI18N = (function () {
  'use strict';

  var DICT = {
    zh: {
      nav_people: '人物', nav_timeline: '时间线', nav_about: '关于',
      theme_title: '切换深浅色',
      search_ph: '搜索人物、领域或关键词…', search_aria: '搜索人物',
      random: '✨ 随机认识一位',
      stat_people: '位人物', stat_fields: '大领域', stat_years: '年跨度',
      hero_h1: '影响世界的<em>人</em>',
      lede: '从轴心时代到信息时代，<span id="hero-count">69</span> 颗照亮人类文明的星。<br class="br-desktop" />他们的思想、发现与勇气，写成了我们今天生活的世界。',
      sort_label: '排序', sort_year: '时代先后', sort_cat: '按领域',
      view_grid: '卡片', view_timeline: '时间轴',
      count_a: '共 ', count_b: ' 位', count_open: '（', count_close: '）',
      sorted_era: ' · 按时代先后', sorted_cat: ' · 按领域分组',
      empty: '没有找到匹配的人物', clear: '清除筛选',
      view_aria: '查看', more: '了解详情 →',
      prev: '← 上一人', next: '下一人 →',
      credit: '肖像：Wikimedia Commons',
      year_bc: '公元前 {n} 年', year_ad: '公元 {n} 年',
      about1_t: '<span class="about-star">✦</span> 为什么是这些人',
      about1_p: '收录标准不是"最伟大"，而是"影响最深"：<span id="about-count">69</span> 位人物横跨科学、思想、发明、政治、探险、艺术与人道七大领域，兼顾不同文明、时代与性别。评选难免主观——正是这种主观，值得被公开讨论。',
      about2_t: '<span class="about-star">✦</span> 资料与图片来源',
      about2_p: '简介依据公开史料撰写，人物年代采用通行说法，存在争议者以"约"标注；名言为流传较广的摘录版本，仅作领会人物精神之用。人物肖像来自维基百科条目配图（维基媒体共享资源，多为公有领域或开放授权）。',
      about3_t: '<span class="about-star">✦</span> 如何使用',
      about3_p: '点击任意卡片查看详细生平与名言，支持方向键切换；按领域筛选、关键词搜索；切换"时间轴"视图纵览两千六百年；右上角可切换深浅色模式与语言。背景星空由 Three.js 实时渲染。',
      footer_brand: '群星闪耀 · 影响世界的人',
      footer_note: '人物与史实仅供学习参考 · 肖像来自 Wikimedia Commons · 托管于 GitHub Pages',
      title: '群星闪耀 · 影响世界的人',
      cat_all: '全部', cat_science: '科学家', cat_thought: '思想家',
      cat_invention: '发明家', cat_leader: '领袖与改革者', cat_explorer: '探险家',
      cat_art: '艺术家', cat_human: '人道主义者'
    },
    en: {
      nav_people: 'People', nav_timeline: 'Timeline', nav_about: 'About',
      theme_title: 'Toggle light / dark theme',
      search_ph: 'Search people, fields or keywords…', search_aria: 'Search people',
      random: '✨ Meet someone random',
      stat_people: 'people', stat_fields: 'fields', stat_years: 'years',
      hero_h1: 'The people who <em>shaped</em> the world',
      lede: 'From the Axial Age to the Information Age — <span id="hero-count">69</span> stars that lit up human civilization.<br class="br-desktop" />Their ideas, discoveries and courage wrote the world we live in today.',
      sort_label: 'Sort', sort_year: 'By era', sort_cat: 'By field',
      view_grid: 'Cards', view_timeline: 'Timeline',
      count_a: '', count_b: ' results', count_open: ' (', count_close: ')',
      sorted_era: ' · sorted by era', sorted_cat: ' · grouped by field',
      empty: 'No matching people found', clear: 'Clear filters',
      view_aria: 'View', more: 'Details →',
      prev: '← Previous', next: 'Next →',
      credit: 'Portrait: Wikimedia Commons',
      year_bc: '{n} BC', year_ad: '{n}',
      about1_t: '<span class="about-star">✦</span> Why these people',
      about1_p: 'The bar is not "greatest" but "most consequential": <span id="about-count">69</span> figures spanning science, thought, invention, politics, exploration, art and humanitarian work, across civilizations, eras and genders. Such a list is inevitably subjective — and that subjectivity is exactly worth debating in public.',
      about2_t: '<span class="about-star">✦</span> Sources & images',
      about2_p: 'Biographies are written from public historical sources; dates follow common usage, with "c." marking contested chronology. Quotes are widely circulated renderings, included to convey each figure\u2019s spirit rather than as verified originals. Portraits come from the subjects\u2019 Wikipedia articles (Wikimedia Commons — mostly public domain or openly licensed).',
      about3_t: '<span class="about-star">✦</span> How to use',
      about3_p: 'Click any card for a detailed biography and quotes; arrow keys page through people. Filter by field, search by keyword, or switch to the Timeline view to span 2,600 years. Use the buttons at the top right to switch theme and language. The starry background is rendered live with Three.js.',
      footer_brand: 'World Shapers · People who shaped the world',
      footer_note: 'For educational reference · Portraits from Wikimedia Commons · Hosted on GitHub Pages',
      title: 'World Shapers · People who shaped the world',
      cat_all: 'All', cat_science: 'Scientists', cat_thought: 'Thinkers',
      cat_invention: 'Inventors', cat_leader: 'Leaders & Reformers', cat_explorer: 'Explorers',
      cat_art: 'Artists', cat_human: 'Humanitarians'
    }
  };

  /* 中国大陆时区（含新疆、西藏通用时区名） */
  function isChinaTZ() {
    try {
      var tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '');
      return /Asia\/(Shanghai|Chongqing|Harbin|Urumqi|Kashgar)/i.test(tz);
    } catch (e) { return false; }
  }

  /* 语言决策：手动选择 > 中国（时区，其次系统语言）> 英文 */
  function detect() {
    var saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (saved === 'zh' || saved === 'en') return saved;
    if (isChinaTZ()) return 'zh';
    try {
      if ((navigator.language || '').toLowerCase().indexOf('zh') === 0) return 'zh';
    } catch (e) {}
    return 'en';
  }

  function save(lang) {
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  return { dict: DICT, detect: detect, save: save };
})();
