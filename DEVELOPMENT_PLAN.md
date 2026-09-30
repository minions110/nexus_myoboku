# Myoboku AI 短期开发计划

> 基于 `NEXUS_V1.2_OPTIMIZATION_PLAN.md`，结合项目当前实际进度整理。

---

## 当前进度总览

| 阶段 | 内容 | 状态 |
|------|------|------|
| 第一阶段 | 品牌名 & 邮箱统一 | ✅ 已完成 |
| 第二阶段 | 信息架构升级（/products/ + 首页产品入口） | ✅ 已完成 |
| 第三阶段 | 数字产品 Legal 页面 | ⬜ 待开发 |
| 第四阶段 | 转化事件与分析 | ⬜ 待开发 |
| 第五阶段 | SEO 与内容 | ⬜ 待开发 |
| 第六阶段 | 获客与验证 | ⬜ 待开发 |

---

## 第一阶段：品牌名 & 邮箱统一 ✅

### 已完成内容

- [x] 全站 `Nexus` → `Myoboku AI`（约 30 个文件，含页面 title、Layout、Footer、Navbar、Blog、FAQ、Affiliate Disclosure、Privacy、Terms、数据文件 seoTitle）
- [x] 全站 `@nexus.ai` 系列邮箱 → `myobokuai@gmail.com`（15 处）
- [x] 导航栏 Logo 替换为 `/images/logo/nexus1.png`（48×48）
- [x] 导航栏网站名称改为 Myoboku AI

### 未完成（数据口径，暂缓）

- [ ] Hero.astro "1,200+ curated AI resources" → 改为真实数量
- [ ] Hero.astro "40,000+ builders" → 删除或改为真实表述
- [ ] Stats.astro `value: 1200` → 改为实际工具数
- [ ] services.astro "Search 1,200+ AI services" → 改为真实数量
- [ ] about/Mission.astro 1,200+ / 40K+ → 同步修改

---

## 第二阶段：信息架构升级 ✅

### 已完成内容

- [x] 创建 `src/data/products.ts` 产品数据模型（Product / PricingTier / ProductFaq 接口 + 第一款产品完整数据）
- [x] 创建 `/products/` 产品列表页（Available / Coming Soon 分区）
- [x] 创建 `/products/ai-custom-bracelet-design/` 产品详情页（Hero → How It Works → What You Share/Receive → Pricing → FAQ → CTA）
- [x] 创建 `src/components/FeaturedProduct.astro` 首页 Featured Product 卡片
- [x] Navbar 桌面端 + 移动端增加 "AI Products" 导航项
- [x] Hero 增加 "Explore AI Products" 第二 CTA
- [x] 首页 Hero 后插入 FeaturedProduct 组件

### 关键路由

| 路由 | 用途 |
|------|------|
| `/products/` | AI Products 列表入口 |
| `/products/ai-custom-bracelet-design/` | 第一款产品详情页 |

---

## 第三阶段：数字产品 Legal 页面 ⬜

### 目标

为 AI Custom Bracelet Design 补充数字产品合规文件，建立真实可信的交易基础。

### 步骤

1. 新增 Refund Policy 页面
   - 数字产品退款规则（设计方案确认前可全额退款 / 确认后按阶段退款）
2. 新增 Delivery Policy 页面
   - 明确数字交付方式（PDF / 图片包 / 文案），交付时限（3–5 工作日）
3. 新增 Revision Policy 页面
   - 修改次数、范围、费用
4. 新增 Digital Product Terms 页面
   - 商业使用权说明（个人使用 vs 商用授权）
5. 在产品详情页 Pricing 区域添加指向以上页面的链接
6. 更新 Footer 增加以上页面入口

### 新增文件预估

```text
src/pages/refund-policy.astro
src/pages/delivery-policy.astro
src/pages/revision-policy.astro
src/pages/digital-product-terms.astro
```

---

## 第四阶段：转化事件与分析 ⬜

### 目标

建立基础转化漏斗追踪，验证第一款产品是否有付费需求。

### 步骤

1. 定义事件 Schema（不依赖具体分析工具）

   ```text
   product_view
   product_cta_click
   start_design
   checkout_click
   purchase
   intake_submit
   proposal_confirmed
   project_completed
   ```

2. 创建 `src/lib/analytics.ts` 事件触发层
3. 在产品详情页关键位置埋点：
   - Hero CTA → `start_design`
   - Pricing 按钮 → `checkout_click`
   - 页面加载 → `product_view`
4. 预留 GA4 / Plausible / PostHog 接入接口
5. 事件中不记录客户敏感内容（图片、故事内容等）

### 新增文件预估

```text
src/lib/analytics.ts
```

---

## 第五阶段：SEO 与内容 ⬜

### 目标

围绕第一款产品建立内容体系，获取自然流量。

### 步骤

1. 产品详情页 SEO 完善
   - 补齐 OG title / OG description / OG image
   - 添加 Product structured data (schema.org)
   - 添加 FAQ structured data
2. 撰写 3–5 篇与产品高度相关的内容页

   ```text
   How AI Can Turn a Personal Story Into a Bracelet Design
   How to Design a Personalized Crystal Bracelet
   AI Bracelet Design Workflow
   From Story to Product: A Custom Bracelet Case
   ```

3. 每篇文章解决一个明确搜索意图，不关键词堆砌
4. 更新 sitemap 配置，确保新页面被收录
5. 为 products 页面添加 BreadcrumbList structured data

### 新增文件预估

```text
src/pages/blog/ai-bracelet-design-story.astro
src/pages/blog/ai-bracelet-design-workflow.astro
src/pages/blog/personalized-crystal-bracelet-guide.astro
src/pages/blog/bracelet-design-case-study.astro
```

---

## 第六阶段：获客与验证 ⬜

### 目标

获得第一个陌生访客 → 第一次询盘 → 第一笔付费订单。

### 步骤

1. 准备产品 Demo 素材
   - 5–10 个设计 Demo（含产品图、故事、材料、成品）
   - 1–3 个完整 Case Study
   - Pinterest 板子素材
2. 渠道运营

   | 渠道 | 内容方向 |
   |------|----------|
   | Pinterest | 设计图 + 故事卡片 |
   | TikTok | 制作过程 + 设计展示短视频 |
   | Reddit | r/DIY / r/jewelry 社区分享 |
   | Instagram | Reels + Story 展示设计流程 |

3. 建立客户询盘 → Intake Form → Design Proposal → 确认 → 交付的完整流程
4. 收集第一批真实客户反馈，调整定价和产品描述
5. 用真实案例替换 Demo 素材

---

## 完成标准（所有阶段完成后检查）

```text
[✓] 品牌名全站统一为 Myoboku AI
[✓] 联系方式真实可用（myobokuai@gmail.com）
[✓] AI Products 有独立入口（/products/）
[✓] 第一款产品详情页已上线
[✓] 首页有产品入口
[✓] 数字产品 Legal 页面完整（Refund / Delivery / Revision / Terms）
[✓] 基础转化事件可用
[✓] 产品 SEO 完善
[✓] 至少 1 个完整案例
[ ] 网站数据口径真实（数据修改暂缓，待验证后执行）
[ ] 第一笔付费订单
```

---

## 后续版本规划（V1.3+，有真实需求后再做）

```text
V1.3  Free Bracelet Idea Generator（免费引流工具）
V1.4  AI Design Assistant（辅助设计）
V1.5  Online Design Workspace（在线设计工作台）
V2    AI Bracelet Designer SaaS
V2.1  Image Generation
V2.2  Product Mockups
V2.3  Commerce Integration
V3    API / MCP / Agent
```
