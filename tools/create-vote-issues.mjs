/* 在 GitHub 仓库创建投票 Issue（每人一个），并生成 id→issue 映射 js/vote-issues.js
   用法：node tools/create-vote-issues.mjs   （需要 gh 已登录）
   幂等：以 issue 正文中的 <!-- vote:<id> --> 标记去重，重复运行只会补缺 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const REPO = 'Tliens/world-shapers';
const LABEL = 'vote';

const token = execSync('gh auth token').toString().trim();
const api = async (path, opts = {}) => {
  const res = await fetch(`https://api.github.com/repos/${REPO}/${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'world-shapers-vote-setup',
      'Content-Type': 'application/json',
      ...(opts.body ? {} : {}),
    },
  });
  if (!res.ok) throw new Error(`${opts.method || 'GET'} ${path} → ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.status === 204 ? null : res.json();
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function loadData(file, key) {
  const window = {};
  new Function('window', fs.readFileSync(path.join(root, file), 'utf8') + `; return window.${key};`)(window);
  return window[key];
}
const PEOPLE = loadData('js/data.js', 'PEOPLE');
const EN = {};
(loadData('js/data.en.js', 'PEOPLE_EN') || []).forEach((e) => { EN[e.id] = e; });

/* 1. 确保标签存在 */
try {
  await api(`labels`, { method: 'POST', body: JSON.stringify({ name: LABEL, color: 'd4af4e', description: '为人物投票 · Vote for a person' }) });
  console.log('✓ 已创建标签 vote');
} catch (e) {
  if (!/422/.test(e.message)) throw e; // 422 = 已存在
  console.log('• 标签 vote 已存在');
}
await sleep(300);

/* 2. 读取已有投票 issue，按正文标记去重 */
const existing = await api(`issues?per_page=100&state=all&labels=${LABEL}`);
const byId = {};
for (const it of existing) {
  const m = /<!-- vote:([a-z]+) -->/.exec(it.body || '');
  if (m) byId[m[1]] = it.number;
}
console.log(`已有投票 issue：${Object.keys(byId).length} 个`);

/* 3. 补缺创建 */
const map = { ...byId };
let created = 0;
for (const p of PEOPLE) {
  if (map[p.id]) continue;
  const en = EN[p.id];
  const title = `投票 · ${p.name} ${en ? en.name : p.en}`;
  const body = [
    `**${p.field}** · ${p.years}`,
    '',
    p.summary,
    '',
    '---',
    '👉 点击右侧 Reactions 的 **👍 (+1)** 即为一票（需登录 GitHub）。',
    'Click the **👍 (+1)** reaction to vote for this person (GitHub sign-in required).',
    '',
    `<!-- vote:${p.id} -->`,
  ].join('\n');
  const it = await api('issues', {
    method: 'POST',
    body: JSON.stringify({ title, body, labels: [LABEL] }),
  });
  map[p.id] = it.number;
  created++;
  process.stdout.write(`✓ #${it.number} ${p.name}\n`);
  await sleep(250);
}

/* 4. 写映射文件 */
const out = `/* 由 tools/create-vote-issues.mjs 生成：人物 id → 投票 Issue 编号 */
window.VOTE_ISSUES = ${JSON.stringify(map, null, 2)};
`;
fs.writeFileSync(path.join(root, 'js', 'vote-issues.js'), out);
console.log(`\n完成：新建 ${created} 个，总计 ${Object.keys(map).length}/${PEOPLE.length} 个投票 issue`);
console.log(`映射已写入 js/vote-issues.js`);
