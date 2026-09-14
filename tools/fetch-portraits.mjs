/* 从维基百科抓取人物肖像，存入 assets/portraits/ 并生成 assets/portraits.js
   用法：node tools/fetch-portraits.mjs
   抓取失败的人物不会写入 manifest，页面会自动退回 emoji 头像 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'assets', 'portraits');
fs.mkdirSync(outDir, { recursive: true });

const src = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
const window = {};
new Function('window', src + '; return window.PEOPLE;')(window);
const PEOPLE = window.PEOPLE;
if (!Array.isArray(PEOPLE) || !PEOPLE.length) throw new Error('未读取到人物数据');

const UA = 'world-shapers-site/1.0 (https://github.com/Tliens/world-shapers; personal educational site)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchSummary(lang, title) {
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}?redirect=true`;
  const res = await fetch(url, { headers: { 'User-Agent': UA, 'Api-User-Agent': UA } });
  if (!res.ok) throw new Error(`summary ${res.status}`);
  return res.json();
}

function pickUrl(page) {
  const o = page.originalimage;
  const t = page.thumbnail && page.thumbnail.source;
  // 原图尺寸适中则用原图，否则退回现成缩略图（尺寸改写可能超出原图而 400）
  if (o && o.width >= 360 && o.width <= 1600) return stripQuery(o.source);
  if (t) return stripQuery(t);
  return null;
}

function stripQuery(url) {
  return url.split('?')[0];
}

async function download(url, file) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 2000) throw new Error('file too small, likely error page');
  fs.writeFileSync(file, buf);
  return buf.length;
}

const manifest = {};
const failed = [];

for (const p of PEOPLE) {
  if (!p.wiki) { failed.push([p.id, 'no wiki field']); continue; }
  const [lang, title] = p.wiki.split('/');
  const file = path.join(outDir, `${p.id}.jpg`);
  try {
    const page = await fetchSummary(lang, title);
    const url = pickUrl(page);
    if (!url) throw new Error('no thumbnail');
    await download(url, file);
    manifest[p.id] = { src: `assets/portraits/${p.id}.jpg`, credit: 'Wikimedia Commons' };
    process.stdout.write(`✓ ${p.id}\n`);
  } catch (e) {
    failed.push([p.id, e.message]);
    process.stdout.write(`✗ ${p.id}: ${e.message}\n`);
  }
  await sleep(150);
}

const jsPath = path.join(outDir, 'portraits.js');
fs.writeFileSync(jsPath, `/* 由 tools/fetch-portraits.mjs 生成：人物肖像清单（缺项自动退回 emoji 头像） */\nwindow.PORTRAITS = ${JSON.stringify(manifest, null, 2)};\n`);

console.log(`\n完成：${Object.keys(manifest).length}/${PEOPLE.length} 成功，清单已写入 ${path.relative(root, jsPath)}`);
if (failed.length) {
  console.log('失败列表：');
  for (const [id, why] of failed) console.log(`  - ${id}: ${why}`);
}
