# 群星闪耀 · 影响世界的人

一个纯静态的人物主题网站：收录 69 位影响世界的科学家、思想家、发明家、领袖、探险家、艺术家与人道主义者，配有真实肖像封面与两段式详细生平，支持领域筛选、关键词搜索、时间轴纵览、Three.js 星空背景动效。**中英双语**：默认英文，检测到中国大陆时区/系统语言自动切换中文，右上角可手动切换并记忆；**默认夜间模式**。零运行时外部依赖（three.js 与肖像均已本地化）。

**线上地址**：https://tliens.github.io/world-shapers/

## 本地预览

直接双击 `index.html` 即可在浏览器打开；或起一个本地服务：

```bash
# 在项目目录下
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署到 GitHub Pages

### 方式一：用 GitHub CLI（最简单）

```bash
cd 本目录
git init
git add -A
git commit -m "init: 群星闪耀 · 影响世界的人"
gh repo create world-shapers --public --source=. --push
gh api repos/{owner}/world-shapers/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

一两分钟后即可访问：`https://tliens.github.io/world-shapers/`

### 方式二：在网页上操作

1. 在 GitHub 上新建一个仓库（如 `person`，Public）；
2. 把本目录的所有文件推送上去：

   ```bash
   git init
   git add -A
   git commit -m "init: 群星闪耀"
   git remote add origin git@github.com:<用户名>/person.git
   git branch -M main
   git push -u origin main
   ```

3. 打开仓库页面 → **Settings** → 左侧 **Pages** → **Build and deployment** 下的 Source 选 **Deploy from a branch**，Branch 选 **main / (root)**，保存；
4. 等待 1–2 分钟，访问 `https://<你的用户名>.github.io/person/`。

> 想让地址直接是 `https://<用户名>.github.io/`，把仓库名命名为 `<用户名>.github.io` 即可。

## 目录结构

```
.
├── index.html              # 页面结构
├── css/style.css           # 全部样式（含深色模式、响应式）
├── js/data.js              # 人物数据（中文，增删人物只改这个文件）
├── js/data.en.js           # 人物数据（英文，与 data.js 按 id 对应）
├── js/i18n.js              # 界面文案词典 + 语言自动检测（中国时区→中文）
├── js/main.js              # 交互逻辑（双语渲染/筛选/搜索/弹窗/时间轴/主题）
├── js/vote-issues.js       # 人物 id → 投票 Issue 编号映射（脚本生成）
├── js/three-bg.js          # Three.js 银河星空背景（开源 galaxy-generator 着色器方案）
├── js/vendor/three.min.js  # 本地化的 three.js（r149）
├── assets/portraits/       # 人物肖像（含 portraits.js 清单）
├── tools/fetch-portraits.mjs  # 肖像抓取脚本（node tools/fetch-portraits.mjs）
├── .nojekyll               # 跳过 GitHub Pages 的 Jekyll 处理
└── README.md
```

## 投票功能（GitHub Issues）

票箱就是本仓库的 Issues：每位人物一个带 `vote` 标签的 Issue，访客点卡片左上角的 **▲**（或详情页的「👍 投票」）跳转到对应 Issue，点一个 👍 即为一票（需登录 GitHub）。页面通过 GitHub API 一次请求拉回全部票数（10 分钟本地缓存），支持「按票数排序」。

相关命令：

```bash
# 为新增人物补建投票 Issue（幂等，按正文标记去重）
node tools/create-vote-issues.mjs
```

## 如何修改内容

- **增删人物**：编辑 `js/data.js`，同时在 `js/data.en.js` 补一条同 id 的英文记录；`cat` 取值 `science / thought / invention / leader / explorer / art / human`，无 `quote` 字段则详情页不显示名言；`wiki` 字段（如 `en/Isaac Newton`）用于抓取肖像。
- **更新肖像**：改完数据后运行 `node tools/fetch-portraits.mjs`，脚本会按 `wiki` 字段从维基百科下载条目配图到 `assets/portraits/` 并更新清单；抓取失败的人物自动退回 emoji 头像。
- **改界面文案**：中英文界面文案都在 `js/i18n.js` 的词典里。
- **改配色 / 字体**：编辑 `css/style.css` 顶部的 `:root` 变量与各领域 `--c` 颜色。

## 内容说明

人物简介依据公开史料撰写，年代采用通行说法（有争议者以"约"标注）；名言为流传较广的摘录版本，仅作领会人物精神之用。
