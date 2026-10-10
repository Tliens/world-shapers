/* 数据完整性校验：node tools/lint-data.mjs
   检查 id 唯一、必填字段、中英对齐、成就/投票/肖像覆盖、引用文件存在
   有错误时退出码为 1，可用于 CI */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const window = {};
for (const [file, key] of [
  ['js/data.js', 'PEOPLE'],
  ['js/data.en.js', 'PEOPLE_EN'],
  ['js/highlights.js', 'HIGHLIGHTS'],
  ['js/vote-issues.js', 'VOTE_ISSUES'],
  ['assets/portraits/portraits.js', 'PORTRAITS'],
]) {
  new Function('window', fs.readFileSync(path.join(root, file), 'utf8') + `; return window.${key};`)(window);
}

const PEOPLE = window.PEOPLE, EN = window.PEOPLE_EN, HL = window.HIGHLIGHTS;
const VOTES = window.VOTE_ISSUES, PORTRAITS = window.PORTRAITS;
const CATS = ['science', 'thought', 'invention', 'leader', 'explorer', 'art', 'human'];
let errors = 0, warnings = 0;
const err = (m) => { errors++; console.error('✗ ' + m); };
const warn = (m) => { warnings++; console.warn('⚠ ' + m); };

/* id 唯一 + 必填字段 */
const seen = new Set();
for (const p of PEOPLE) {
  if (seen.has(p.id)) err(`重复 id: ${p.id}`);
  seen.add(p.id);
  for (const f of ['name', 'en', 'emoji', 'years', 'birth', 'cat', 'field', 'summary', 'desc', 'wiki']) {
    if (p[f] === undefined || p[f] === '') err(`${p.id} 缺字段 ${f}`);
  }
  if (!CATS.includes(p.cat)) err(`${p.id} 未知领域: ${p.cat}`);
  if (typeof p.birth !== 'number') err(`${p.id} birth 必须为数字`);
  if (!/\//.test(p.wiki)) err(`${p.id} wiki 字段格式应为 "语言/条目名"`);
}

/* 中英 1:1 */
const zhIds = new Set(PEOPLE.map((p) => p.id));
const enIds = new Set(EN.map((e) => e.id));
for (const e of EN) {
  if (!zhIds.has(e.id)) err(`英文多出: ${e.id}`);
  for (const f of ['name', 'alt', 'years', 'field', 'summary', 'desc']) {
    if (e[f] === undefined || e[f] === '') err(`英文 ${e.id} 缺字段 ${f}`);
  }
}
for (const p of PEOPLE) {
  if (!enIds.has(p.id)) err(`英文缺: ${p.id}`);
}

/* 成就亮点 */
for (const p of PEOPLE) {
  const h = HL[p.id];
  if (!h) { warn(`${p.id} 无成就亮点（详情页将不显示该区块）`); continue; }
  for (const lang of ['zh', 'en']) {
    if (!Array.isArray(h[lang]) || h[lang].length < 3) err(`成就 ${p.id}.${lang} 应为至少 3 条的数组`);
  }
}
const hlExtra = Object.keys(HL).filter((id) => !zhIds.has(id));
if (hlExtra.length) err(`成就里的人物不存在: ${hlExtra.join(', ')}`);

/* 投票与肖像 */
const voteIds = Object.keys(VOTES);
for (const p of PEOPLE) {
  if (!VOTES[p.id]) warn(`${p.id} 无投票 Issue（运行 tools/create-vote-issues.mjs 补建）`);
  if (!PORTRAITS[p.id]) warn(`${p.id} 无肖像（运行 node tools/fetch-portraits.mjs 补抓）`);
}
for (const id of voteIds) {
  if (!zhIds.has(id)) err(`投票映射里的人物不存在: ${id}`);
  const src = PORTRAITS[id] ? '' : VOTES[id] ? '' : '';
}
for (const [id, v] of Object.entries(PORTRAITS)) {
  const f = path.join(root, v.src);
  if (!fs.existsSync(f)) err(`肖像文件缺失: ${v.src}`);
}
const ptExtra = Object.keys(PORTRAITS).filter((id) => !zhIds.has(id));
if (ptExtra.length) err(`肖像清单里的人物不存在: ${ptExtra.join(', ')}`);

/* 结果 */
console.log(`\n校验完成：${PEOPLE.length} 位人物，${errors} 个错误，${warnings} 个警告`);
process.exit(errors ? 1 : 0);
