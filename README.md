# 群星闪耀 · 影响世界的人

一个纯静态的人物主题网站：收录 34 位影响世界的科学家、思想家、发明家、领袖、艺术家与人道主义者，支持领域筛选、关键词搜索、时间轴纵览与深浅色主题。**零依赖、零构建**，任何静态托管都能直接运行。

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
├── index.html        # 页面结构
├── css/style.css     # 全部样式（含深色模式、响应式）
├── js/data.js        # 人物数据（增删人物只改这个文件）
├── js/main.js        # 交互逻辑（筛选/搜索/弹窗/时间轴/主题）
├── .nojekyll         # 跳过 GitHub Pages 的 Jekyll 处理
└── README.md
```

## 如何修改内容

- **增删人物**：编辑 `js/data.js`，复制一条现有记录修改即可；`cat` 取值 `science / thought / invention / leader / art / human`，无 `quote` 字段则详情页不显示名言。
- **改配色 / 字体**：编辑 `css/style.css` 顶部的 `:root` 变量与各领域 `--c` 颜色。
- **改文案**：首屏、关于、页脚文案都在 `index.html` 里。

## 内容说明

人物简介依据公开史料撰写，年代采用通行说法（有争议者以"约"标注）；名言为流传较广的摘录版本，仅作领会人物精神之用。
