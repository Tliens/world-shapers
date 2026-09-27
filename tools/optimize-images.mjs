/* 将 assets/portraits/*.jpg 转为 WebP 并删除原图，重写 portraits.js 清单
   用法：node tools/optimize-images.mjs   （需要 cwebp，brew install webp） */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '..', 'assets', 'portraits');
const QUALITY = 80;

const jpgs = fs.readdirSync(dir).filter((f) => f.endsWith('.jpg'));
let saved = 0;
let ok = 0;
for (const jpg of jpgs) {
  const full = path.join(dir, jpg);
  const webp = full.replace(/\.jpg$/, '.webp');
  const before = fs.statSync(full).size;
  try {
    execSync(`cwebp -q ${QUALITY} "${full}" -o "${webp}" -quiet`, { stdio: 'pipe' });
  } catch (e) {
    console.error(`✗ ${jpg}: cwebp 转换失败，保留原图`);
    if (fs.existsSync(webp)) fs.unlinkSync(webp);
    continue;
  }
  const after = fs.statSync(webp).size;
  if (after >= before) {
    /* 转换没变小就保留 jpg */
    fs.unlinkSync(webp);
    continue;
  }
  fs.unlinkSync(full);
  saved += before - after;
  ok++;
  process.stdout.write(`✓ ${jpg} ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB\n`);
}

/* 重写清单：.jpg → .webp */
const manifestPath = path.join(dir, 'portraits.js');
let manifest = fs.readFileSync(manifestPath, 'utf8');
manifest = manifest.replace(/\.jpg/g, '.webp');
fs.writeFileSync(manifestPath, manifest);

const webps = fs.readdirSync(dir).filter((f) => f.endsWith('.webp'));
console.log(`\n完成：转换 ${ok}/${jpgs.length} 张，节省 ${(saved / 1024 / 1024).toFixed(1)}MB，现有 WebP ${webps.length} 张`);
