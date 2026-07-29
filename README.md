# Nexus — AI 资源导航站

面向全球 AI 开发者、工程师、初创团队与企业的一站式 AI 资源导航网站。基于 Astro 静态生成，采用 Apple / Linear / Stripe / Vercel 风格的极简高级设计，内置暗色与亮色双主题。

定位：精选、测评、维护 AI 模型、API、工具与数据集，帮助构建者快速找到并落地合适的 AI 技术栈。

## 技术栈

- **Astro** `^7.1.3` — 静态站点生成框架，零运行时框架 JS，首屏极快
- **Tailwind CSS** `^4.3.3` — 经 `@tailwindcss/vite` 接入，使用 v4 的 `@theme` / `@custom-variant` 进行配置
- **@astrojs/sitemap** `^3.7.3` — 构建时自动生成站点地图
- **Node** `>=22.12.0` — 运行环境要求
- **字体** — Inter（正文）+ Space Grotesk（标题），通过 Google Fonts 按需加载
- **图标** — Lucide 图标，以内联 SVG 方式封装（无额外请求、可随主题变色）

## 目录结构

```text
/
├── public/
│   ├── favicon.svg          # 品牌渐变图标
│   ├── favicon.ico
│   └── robots.txt           # 全站放行 + 指向 sitemap
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # 全局布局（SEO、字体、主题初始化、滚动动效）
│   ├── components/
│   │   ├── Navbar.astro         # 导航栏（主题切换 + 移动端菜单）
│   │   ├── Hero.astro           # 首屏
│   │   ├── LogoCloud.astro      # 品牌信任云（跑马灯）
│   │   ├── Categories.astro     # 资源分类
│   │   ├── FeaturedResources.astro  # 精选资源（可筛选）
│   │   ├── Stats.astro          # 数据统计（数字滚动）
│   │   ├── Features.astro       # 核心优势（Bento 布局）
│   │   ├── Testimonials.astro   # 用户评价
│   │   ├── CTA.astro            # 行动号召（订阅表单）
│   │   ├── Footer.astro         # 页脚
│   │   └── Icon.astro           # Lucide 图标组件
│   ├── pages/
│   │   └── index.astro      # 首页（组合所有区块）
│   └── styles/
│       └── global.css       # 设计系统：令牌、主题、组件类、动画
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 设计系统（`src/styles/global.css`）

整套视觉由 CSS 自定义属性驱动，集中管理于全局样式，便于统一调整与主题切换。

- **配色**：主色 `#4F46E5`、次色 `#06B6D4`、强调色 `#8B5CF6`；背景白 `#FFFFFF` / 浅灰 `#F8FAFC`。
- **语义令牌**：`--bg`、`--surface`、`--text`、`--border` 等在 `:root` 与 `.dark` 下分别取值，实现暗色/亮色一键切换。
- **排版**：标题使用 Space Grotesk（紧凑字距），正文使用 Inter。
- **圆角**：卡片统一 16–20px（`--radius-card` / `--radius-card-sm`）。
- **组件类**：`.btn` / `.btn-gradient` / `.btn-ghost`（渐变按钮带悬停位移与阴影）、`.card` / `.card-hover`、`.gradient-text`、`.glass`（毛玻璃）、`.chip`（标签胶囊）、`.icon-tile`（图标底色块）、`.grid-bg`（网格底纹）、`.orb`（模糊光球）。
- **动画**：`floaty`、`floaty-slow`、`spin-slow`、`pulse-glow`、`marquee`、`shimmer` 等关键帧，并支持 `prefers-reduced-motion` 降级。
- **滚动揭示**：`[data-reveal]` 元素进入视口时添加 `.in-view` 类，带交错延迟。

## 网站模块说明

网站由首页 `src/pages/index.astro` 自上而下组合下列模块，每个模块对应一个独立组件，职责清晰、可单独维护。

### 布局层 · `Layout.astro`

页面骨架，提供：

- SEO 元信息（title / description / canonical / Open Graph / Twitter Card）。
- Google Fonts 预连接与按需加载。
- **无闪烁主题初始化脚本**：在首屏渲染前读取 `localStorage` 或系统偏好，提前为 `<html>` 添加 `.dark` 类，避免暗色模式闪烁。
- 全局 **滚动揭示观察器**：监听所有 `[data-reveal]` 元素，进入视口即触发淡入上移动效。

### 导航栏 · `Navbar.astro`

固定顶部、毛玻璃悬浮的胶囊导航。

- 品牌标识「Nexus」+ 渐变图标。
- 桌面端导航：Resources、Categories、Why Nexus、Community（锚点跳转）。
- **主题切换按钮**：太阳/月亮图标切换暗色与亮色，状态写入 `localStorage` 持久化。
- **「Submit a tool」渐变主按钮**。
- 移动端汉堡菜单，点击展开下拉面板，点击链接自动收起。

### 首屏 · `Hero.astro`

全站视觉核心，传递价值主张。

- 背景由网格底纹 + 三颗渐变光球（主色 / 次色 / 强调色）构成柔和氛围。
- 顶部标签「1,200+ curated AI resources」。
- 主标题：「The AI resource hub for **modern builders**」（关键词渐变高亮）。
- 双按钮：渐变「Explore resources」+ 描边「Submit your tool」。
- 信任行：用户头像组 + 五星评分 +「Trusted by 40,000+ builders」。
- 下方产品可视化卡片：模拟资源浏览器（窗口控件、搜索框、6 个渐变资源磁贴），两侧悬浮「Avg latency 84ms」「+62 tools」玻璃信息卡，带浮动动画。

### 品牌信任云 · `LogoCloud.astro`

横向跑马灯展示合作/使用方品牌词（OpenLayer、Quantix、Helio 等），两侧渐隐遮罩，营造「被快速团队采用」的信任感。

### 资源分类 · `Categories.astro`

六大资源分类卡片，每张含渐变图标、标题、描述与资源数量徽标：

- AI Models（模型）、APIs & SDKs、Datasets（数据集）、Dev Tools（开发工具）、Templates & UI（模板与界面）、Learning（学习资源）。

卡片悬停上浮，并带交错揭示动效。

### 精选资源 · `FeaturedResources.astro`

人工精选资源列表，支持客户端筛选。

- 顶部筛选标签：All / Models / APIs / Tools / Datasets，点击实时过滤卡片。
- 6 张资源卡（Lumina API、Forge Models、DataLake Pro、VectorKit、PromptLab、Atlas Deploy），每张含品牌首字母渐变 Logo、名称、分类标签、简介、评分与「Visit」转化入口。
- 当前为示例占位数据，后续可替换为真实联盟资源并接入外链。

### 数据统计 · `Stats.astro`

四组关键数字卡片，进入视口时执行数字滚动动画：

- 1,200+ 精选资源、38 分类与标签、40,000+ 活跃构建者、4.9/5 平均评分。

### 核心优势 · `Features.astro`

Bento 网格布局阐述差异化价值：

- 大卡「Vetted, not vaporware」：列出四条审核标准（工程师评审、真实负载基准、license 与定价核验、30 天内更新）。
- 小卡：Always up to date（每日索引与版本追踪）、Compare side by side（基准/延迟/定价对比）、Community-driven（社区提交与投票）、Developer-first（文档与代码示例）。

### 用户评价 · `Testimonials.astro`

三栏评价卡片，配引号图标、五星、品牌首字母头像与身份：

- Aria Chen（ML Lead, Quantix）、Marco Silva（Founder, Helio）、Riya Patel（Staff Engineer, Cobalt）。

### 行动号召 · `CTA.astro`

全宽渐变面板，引导订阅每周 AI 资源邮件：

- 标题「Ship faster with the right AI stack」，邮箱订阅表单（含校验与提交重置），辅以「Free forever · No credit card」等信任提示。

### 页脚 · `Footer.astro`

品牌简介 + 社交图标（Twitter / GitHub / LinkedIn）+ 四列链接（Product / Resources / Company / Legal）+ 版权与语言标识。

### 图标 · `Icon.astro`

封装 35+ 个 Lucide 图标为内联 SVG 组件，通过 `name` 属性按需渲染，`currentColor` 跟随主题，零额外网络请求。

## 主题与交互

- **暗色 / 亮色**：基于 `<html>` 上的 `.dark` 类切换语义令牌，导航栏按钮即时切换并持久化，首屏无闪烁。
- **滚动揭示**：`Layout.astro` 中的 `IntersectionObserver` 统一驱动全站 `[data-reveal]` 元素的入场动效，支持交错延迟。
- **资源筛选**：`FeaturedResources.astro` 内脚本按 `data-category` 过滤卡片。
- **数字滚动**：`Stats.astro` 内脚本在元素进入视口时以缓动函数动画计数。
- **移动端菜单**：`Navbar.astro` 内脚本控制展开收起与图标切换。
- **无障碍**：动画在 `prefers-reduced-motion` 下自动降级。

## 配置模块

- **`astro.config.mjs`**：站点地址 `https://lightsteelblue-crow-139650.hostingersite.com`（Hostinger）、`output: 'static'` 静态输出、`@astrojs/sitemap` 集成、Tailwind 经 Vite 插件接入。
- **`tsconfig.json`**：继承 `astro/tsconfigs/strict`，启用严格类型检查。
- **`public/robots.txt`**：`Allow: /` 全站放行并声明 sitemap。

## 开发命令

在项目根目录执行：

| 命令 | 说明 |
| :--- | :--- |
| `npm install` | 安装依赖 |
| `npm run dev` | 启动本地开发服务器（默认 `localhost:4321`） |
| `npm run build` | 构建生产产物到 `./dist/` |
| `npm run preview` | 本地预览构建产物 |

> 后台开发模式可使用 `astro dev --background`，配合 `astro dev stop` / `astro dev status` / `astro dev logs` 管理（见 `AGENTS.md`）。

## 部署信息

- 目标域名：`https://lightsteelblue-crow-139650.hostingersite.com`（Hostinger）。
- 构建产物：`./dist/`，可直接上传至 Hostinger 静态托管；构建时自动生成 `/sitemap-index.xml`。

## 后续可扩展方向

- 将示例资源抽离为 Astro Content Collection 或数据文件，统一管理并接入真实联盟外链。
- 新增资源详情页、搜索页与 `/blog` 内容板块。
- 接入真实用户评价与提交表单后端。
- 按需补充 3D AI 插画素材，进一步强化首屏视觉。
