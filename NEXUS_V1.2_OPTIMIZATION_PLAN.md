# Nexus V1.2 网站、内容、知识库与 AI 产品商业化优化方案

> 目标：将 `https://nexus.myoboku.com/` 从“AI 工具导航站”逐步升级为“AI Tools + AI Products + Affiliate + 未来 SaaS”的海外产品入口。
>
> 第一款自有产品：**AI Custom Bracelet Design**，以“水晶手链 + 光珠手链定制设计”为第一个商业 Demo。
>
> 核心目标：
> 1. 最快验证第一笔海外收入
> 2. 不大规模重做现有网站
> 3. 保留 AI Tools / Affiliate 资产
> 4. 为未来 AI 产品和 SaaS 留出产品入口
> 5. 建立真实、可信、可持续更新的网站内容体系

---

# 0. V1.2 总体策略

## 当前网站定位

目前 Nexus 首页以：

> Discover the best AI tools for every workflow

为核心，强调 AI Tools Directory、AI Services Directory、工具比较与 Affiliate。首页当前展示 16 个 AI tools、12 个 categories，并包含 Featured / Trending / Recently added / Services / Blog / Newsletter 等模块。

Tools 页当前显示 16 个工具。

Services 页当前显示 9+ featured services、7 个类别，同时页面搜索框使用“Search 1,200+ AI services”。

About 页同时出现 1,200+ Resources、40K+ Builders、38 Categories，而首页实际显示的工具规模只有 16，因此需要统一真实数据口径。

Contact、Privacy、Terms 页面目前使用 `@nexus.ai` 邮箱地址，而网站实际域名是 `nexus.myoboku.com`，需要统一为真实可用联系方式。

## V1.2 新定位

不建议把 Nexus 整站改造成“手链网站”。

建议定位为：

**Nexus — AI Tools, Products & Workflows**

核心业务结构：

```text
AI Tools
  ↓
Affiliate

AI Guides / Workflows
  ↓
免费流量与信任

AI Products
  ↓
自有数字产品 / AI 服务

AI Product Demo
  ↓
AI Custom Bracelet Design

验证成功
  ↓
Free Tool
  ↓
SaaS
  ↓
Extension / API / MCP
```

---

# 1. 产品定位与信息架构调整

## 目标

保留现有 AI Tools 和 Affiliate 体系，同时建立真正属于 Nexus 的“自有产品”入口。

## V1.2 顶部导航建议

从：

```text
Services
Tools
About
Contact
```

调整为：

```text
AI Tools
AI Products
AI Guides
Services
About
Contact
```

优先级：

1. AI Products
2. AI Tools
3. AI Guides
4. Services

不要立即删除 Services，但降低其核心地位。

## AI Products 页面

新增：

```text
/products/
```

页面内容：

```text
Featured Product
New Products
Digital Products
AI Services
Custom AI Design
Coming Soon
```

第一款产品：

```text
/products/ai-custom-bracelet-design/
```

## Codex Prompt — 阶段 1

```text
请基于当前 Nexus 网站代码执行 V1.2 信息架构优化。

目标：
将 Nexus 从单一 AI Tools Directory 升级为：

AI Tools + AI Products + AI Guides + Affiliate

要求：

1. 保留现有 AI Tools、Services、About、Contact 等功能。
2. 顶部导航增加：
   - AI Products
   - AI Guides
3. AI Products 使用独立路由 /products/。
4. 不破坏现有 URL 和已有页面。
5. AI Products 是未来数字产品、AI 服务、SaaS 的统一入口。
6. 不把 Nexus 整站改成手链垂直站。
7. 为第一款 AI Custom Bracelet Design 产品预留 Featured Product 区域。
8. 保持现有视觉风格、响应式布局和交互逻辑。
9. 不重复创建页面。
10. 先扫描现有路由、组件、数据结构，再实施修改。
11. 修改后运行现有测试和构建流程。

输出：
- 修改文件列表
- 新增路由
- 页面层级
- 兼容性检查结果
```

---

# 2. 首页优化：从“工具导航”变成“工具 + 产品入口”

## 现状问题

首页内容比较完整，但商业 CTA 主要围绕：

> Explore AI Tools

用户很容易成为：

```text
浏览 → 点击第三方 → 离开
```

而不是：

```text
浏览 → 注册 → 购买 Nexus 自有产品
```

首页需要增加一个明确的自有产品入口。

## V1.2 首页结构

建议：

```text
Hero
  ↓
Explore AI Tools
  ↓
Featured AI Product
  ↓
Popular AI Categories
  ↓
Featured AI Tools
  ↓
AI Guides / Workflows
  ↓
Services
  ↓
Newsletter
```

### Hero

建议保留 AI Tools 核心定位，同时增加产品价值：

**Discover AI tools. Build with AI. Explore products that turn ideas into workflows.**

两个 CTA：

```text
Explore AI Tools
Explore AI Products
```

### Featured AI Product

第一款产品：

**AI Custom Bracelet Design**

副标题：

> Turn your story, style, budget and inspiration into a personalized bracelet design proposal.

CTA：

> Design Your Bracelet

## Codex Prompt — 阶段 2

```text
优化 Nexus 首页，但不要推翻重做。

目标：
让首页同时承担：
1. AI Tools 获客
2. AI Products 转化
3. Newsletter 留资
4. Affiliate 变现

要求：

1. 保留原有 Hero 的 AI Tools 核心定位。
2. Hero 增加第二 CTA：Explore AI Products。
3. 在 Hero 后增加 Featured AI Product。
4. Featured Product 使用 AI Custom Bracelet Design。
5. 产品区域需要展示：
   - 产品图
   - 一句话价值
   - 输入什么
   - 输出什么
   - CTA
6. 不直接宣传“AI 自动生成图片”，而是突出：
   Customer Story → Design Proposal → Confirmation → Final Product Package。
7. Featured Product 必须链接到 /products/ai-custom-bracelet-design/。
8. 不虚构用户数量、订单、客户案例或评价。
9. 视觉保持现有 Nexus 风格。
10. 移动端优先检查。

完成后检查首页：
- CTA 是否清晰
- 产品入口是否显眼
- Affiliate 区域是否仍然自然
- 首屏是否过于拥挤
```

---

# 3. 第一款产品放在哪里

## 推荐位置

### 一级导航

```text
AI Products
```

### 产品分类

```text
Custom AI Design
```

### 具体页面

```text
/products/ai-custom-bracelet-design/
```

### 首页

放：

```text
Featured AI Product
```

### Tools / Services

暂时不要把它混进去。

原因：

> 它不是第三方 AI Tool，也不是传统 AI Service Directory 条目。

它是：

**Nexus 自有产品。**

---

# 4. 第一款产品页面设计

产品名称：

# AI Custom Bracelet Design

副标题：

> Turn a personal story, emotion, style and budget into a personalized bracelet design proposal.

## 页面结构

```text
Hero
  ↓
How It Works
  ↓
What You Share
  ↓
What You Receive
  ↓
Design Example
  ↓
Materials & Craft
  ↓
Why This Is Different
  ↓
Pricing
  ↓
FAQ
  ↓
CTA
```

## What You Share

支持：

```text
Emotion
Occasion
Budget
Wrist Size
Style
Colors
Material Preference
Personal Story
Reference Image
Person / Travel / Mood Image
```

## What You Receive

第一阶段明确交付：

```text
Design Proposal
Design Story
Design Meaning
Material Selection
Bead Layout
Craft Method
Product Visual Concept
Product Description
```

客户必须先确认 Design Proposal。

确认后再进入最终视觉生产。

---

# 5. 第一款产品的实际商业模式

V1 不开发完整在线 AI SaaS。

采用：

```text
Customer
↓
Payment
↓
Intake Form
↓
AI Design Proposal
↓
Customer Revision
↓
Customer Confirmation
↓
Production
↓
Digital Delivery
```

建议第一阶段设置：

### Starter

$19

- 1 个设计方案
- 故事
- 寓意
- 材料
- 珠子排列
- 编制方式

### Premium

$39

- 3 个设计方向
- 设计确认
- 产品视觉方案
- 材料清单
- 编制说明
- 商品文案

### Full

$69

增加：

- 最终产品视觉
- 佩戴/场景图
- 商品 Listing
- Pinterest 内容
- PDF 产品包

价格只是 V1 测试起点，后续以真实客户反馈调整。

---

# 6. 第一款产品不要立即在线自动生成

V1 阶段采用：

```text
Nexus
  ↓
Checkout
  ↓
Customer Intake
  ↓
WorkBuddy
  ↓
Bracelet Knowledge Base
  ↓
Design Proposal
  ↓
人工审核
  ↓
Customer Confirmation
  ↓
ComfyUI
  ↓
Final Package
```

目标：

> 先验证付费需求，而不是验证软件架构。

---

# 7. 第一款产品的 WorkBuddy 生产流程

## Stage A — Customer Brief

输入：

```text
情感
场景
预算
手围
风格
颜色
材料
故事
图片
```

输出：

```text
Customer Brief
```

## Stage B — Design Proposal

调用：

```text
Bracelet Knowledge Base
```

参考：

```text
Materials
Styles
Patterns
Craft
Sizing
Symbolism
Scenarios
Pricing
Cases
```

输出：

```text
2~3 个设计方向
```

## Stage C — Confirmation

客户选择：

```text
Confirm
Modify
Regenerate
```

## Stage D — Production

确认后：

```text
Image
Mockup
Materials
Layout
Tutorial
Story
Listing
Pinterest
PDF
```

---

# 8. Codex Prompt — 阶段 3：第一款产品页面

```text
请在 Nexus 中新增第一款自有产品页面：

/products/ai-custom-bracelet-design/

产品：
AI Custom Bracelet Design

定位：
AI-assisted personalized bracelet design service.

第一阶段不是 SaaS，不需要用户在网站实时调用模型。

页面必须解释真实服务流程：

1. Share Your Story
2. Add Your Style, Budget & Size
3. Upload Optional Images
4. Receive a Design Proposal
5. Review & Request Changes
6. Confirm the Design
7. Receive the Final Product Package

必须强调：
“设计方案确认后才开始最终视觉和内容生产”。

不要虚构：
- AI 自动下单
- 自动生产
- 自动采购
- 已有大量客户
- 虚假评价
- 虚假订单
- 虚假案例数量

页面必须包含：
- 产品价值
- 输入内容
- 输出内容
- 示例
- 服务流程
- 定价
- FAQ
- Refund / Revision 说明
- Commercial Usage 说明（如果有）
- CTA

页面视觉：
保持 Nexus 现有风格，不另起一个完全不同的网站风格。

需要预留：
- Checkout URL
- Intake Form URL
- 后续 SaaS 入口

完成后输出：
- 文件
- 路由
- 产品数据结构
- CTA 数据
- 后续支付接入点
```

---

# 9. Website Content 优化

## 内容方向

Nexus 不要全部继续做“Top AI tools”。

需要增加：

### AI Tool Reviews

- What it does
- Who it's for
- Pricing
- Strengths
- Limitations
- Best workflow
- Alternatives
- Affiliate disclosure

### AI Workflow

例如：

> How to build an AI content workflow

### AI Product Use Cases

例如：

> Turn a product idea into a digital product

### AI Product Demo / Case Study

例如：

> Turn a personal story into a bracelet design

这类内容既能服务第一款产品，又不会让 Nexus 失去 AI 主站定位。

---

# 10. 第一批手链内容

不要直接做成“水晶百科”，而应该作为：

> AI Product Demo / Design Case

建议先做：

```text
How AI Can Turn a Personal Story Into a Bracelet Design
How to Design a Personalized Crystal Bracelet
AI Bracelet Design Workflow
From Story to Product: A Custom Bracelet Case
```

后续再扩展：

```text
Crystal Bracelet Design
Luminous Bead Bracelet Design
Pearl Bracelet Design
Incense Bead Bracelet Design
Crystal + Incense Bead Design
```

---

# 11. SEO 优化

不要大量生成低质量文章。

优先做：

```text
Product Pages
Tool Pages
Comparison Pages
Use Case Pages
Workflow Pages
Case Studies
```

每个页面解决一个明确问题。

## Codex Prompt — 阶段 4：内容与 SEO

```text
优化 Nexus 的内容体系和 SEO，不进行无意义的大量文章生成。

目标：
建立：
AI Tools
AI Workflows
AI Products
AI Ecommerce
AI Design
Case Studies

要求：

1. 保留现有工具目录 SEO。
2. 增加 AI Products 内容体系。
3. 为 AI Custom Bracelet Design 建立独立 SEO Landing Page。
4. 增加 3~5 个与产品高度相关的内容页面。
5. 每篇文章解决一个明确搜索意图。
6. 每个核心页面完善：
   - title
   - meta description
   - canonical
   - OG title
   - OG description
   - OG image
   - structured data（适用时）
7. 不生成虚假统计。
8. 不关键词堆砌。
9. 不复制第三方网站内容。
10. Affiliate 页面保持透明。

输出 SEO 检查报告。
```

---

# 12. 可信度优化：必须优先完成

当前 Nexus 存在明显的数据口径问题：

```text
Home:
16 AI tools

Tools:
16 tools

About:
1,200+ Resources
40K+ Builders
38 Categories
```

Services 页还显示 9+ featured services、7 categories，同时存在“Search 1,200+ AI services”的文案。

V1.2 建议统一为真实可验证的数据，例如：

```text
16+ AI Tools
12 Categories
Independent AI Resource Hub
```

达到真实规模后再升级数字。

---

# 13. 联系方式优化

当前 Contact / Privacy / Terms 使用：

```text
hello@nexus.ai
support@nexus.ai
press@nexus.ai
privacy@nexus.ai
```

如果这些邮箱不是你实际控制的邮箱，全部修改为真实地址。

例如：

```text
hello@nexus.myoboku.com
support@nexus.myoboku.com
privacy@nexus.myoboku.com
```

或以后改为你实际拥有的独立域名邮箱。

同步检查：

```text
Footer
Terms
Privacy
Contact
Affiliate Disclosure
Product Pages
```

必须统一。

## Codex Prompt — 阶段 5：Trust / Legal Cleanup

```text
对 Nexus 做 Trust & Compliance Cleanup。

要求：

1. 扫描所有页面中的：
   - 公司信息
   - 品牌名称
   - 联系邮箱
   - 社交链接
   - 数量统计
   - 用户统计
   - 评论数量
   - 评分
   - Affiliate Disclosure

2. 找出与当前真实数据库不一致的数字。
3. 删除或替换无法验证的统计。
4. 所有联系方式统一为实际可控制邮箱。
5. Terms / Privacy / Affiliate Disclosure 保持一致。
6. 为数字产品增加适当的：
   - Digital Product Terms
   - Refund Policy
   - Delivery Policy
   - Revision Policy
7. 为 Custom Bracelet Design 增加：
   - 客户上传图片说明
   - 文件用途
   - 数据保存与删除政策
   - 商业使用权说明（如适用）
8. 不虚构公司主体、资质、客户和经营数据。

完成后生成 Trust & Compliance Checklist。
```

---

# 14. 知识库工作

知识库不直接放在 Nexus 网站。

建议：

```text
飞牛 NAS
└── Bracelet/
    ├── 00_System/
    ├── 01_Knowledge/
    ├── 02_Cases/
    ├── 03_Design-Library/
    ├── 04_Assets/
    ├── 05_Products/
    ├── 06_AI/
    ├── 07_References/
    ├── 08_Inbox/
    └── 99_Archive/
```

管理：

```text
Obsidian
```

维护：

```text
Python Knowledge Manager
```

AI 生产：

```text
WorkBuddy
```

Nexus 只展示已经确认的：

```text
Product
Case
Design
CTA
```

不要把内部知识、客户资料直接暴露给前端。

---

# 15. Nexus 与 Bracelet Knowledge Base 的关系

```text
Bracelet Knowledge Base
        ↓
WorkBuddy
        ↓
Design Proposal
        ↓
Customer
        ↓
Confirm
        ↓
Production
        ↓
Nexus Product / Case
```

Nexus 不保存完整内部知识。

内部知识是你的商业资产。

---

# 16. Codex Prompt — 阶段 6：预留知识库接口

```text
不要把 Bracelet Knowledge Base 直接写入 Nexus 前端代码。

要求：

1. 创建独立 Product Data Model。
2. AI Custom Bracelet Design 产品数据可从 JSON / API 加载。
3. 不将具体水晶知识、编制知识、客户案例硬编码在组件。
4. Product 页面只消费产品数据。
5. 为未来预留：
   GET /products
   GET /products/{id}
   GET /cases/{id}
6. 当前不需要真实 API 时，可以先用本地 JSON。
7. 产品展示内容和内部知识库必须分离。
8. 客户私有资料不得被前端访问。
```

---

# 17. Conversion / Analytics

V1.2 至少定义：

```text
page_view
ai_products_click
bracelet_product_view
start_design
checkout_click
purchase
intake_submit
proposal_sent
proposal_confirmed
project_completed
```

核心漏斗：

```text
Visitors
 ↓
Product Views
 ↓
Start Design
 ↓
Checkout
 ↓
Purchase
 ↓
Intake
 ↓
Confirmed
 ↓
Completed
```

## Codex Prompt — 阶段 7：转化事件

```text
为 Nexus V1.2 增加基础产品转化事件。

至少支持：

- product_view
- product_cta_click
- start_design
- checkout_click
- purchase
- intake_submit
- proposal_confirmed

要求：

1. 不影响页面性能。
2. 不记录敏感客户图片内容。
3. 不在事件中记录完整客户需求。
4. 统一事件命名。
5. 为以后 GA4 / Plausible / PostHog 等分析工具预留接入层。
6. 不与业务数据库强耦合。

输出：
- event schema
- 事件触发位置
- 验证方法
```

---

# 18. TikTok Shop：网站应该承担什么角色

Nexus 可以作为：

- 品牌官网
- 业务说明
- 产品展示
- 联系方式
- 内容与案例
- 品牌真实性的一部分

但是：

> **不要把网站本身写成“TikTok Shop 注册资质”。**

截至 2026 年 9 月，美国 TikTok Shop 官方注册仍要求卖家完成平台自身的业务/身份等验证；另外，美国站 Virtual Goods 目前明确是 invite-only，数字商品能否在 TikTok Shop 销售需要先满足对应类目资格。citeturn182793search0turn182793search2turn182793search9

因此：

```text
Nexus
 ↓
真实品牌 + 真实产品 + 真实业务内容
 ↓
独立完成第一笔海外销售
 ↓
再单独申请/核验 TikTok Shop
```

不要为了申请店铺而制造虚假的销量、客户、评价或业务规模。

---

# 19. V1.2 第一款产品的真正商业路径

```text
Nexus
  ↓
AI Custom Bracelet Design
  ↓
Customer Intake
  ↓
$19 / $39 / $69
  ↓
WorkBuddy
  ↓
Bracelet Knowledge Base
  ↓
Design Proposal
  ↓
Customer Confirmation
  ↓
ComfyUI
  ↓
Final Product Package
```

最终交付：

```text
Design
Story
Meaning
Materials
Bead Layout
Craft Guide
Images
Listing
Social Content
PDF
```

---

# 20. 第一批手链品类

你规划的品类可以保留：

```text
串珠/马赛克手链
穿珠手链
水晶手链
珍珠手链
合香珠
中药文化手串
合香珠 + 水晶
```

但 V1.2 只上线：

```text
Crystal Bracelet
Luminous Bead Bracelet
```

先验证：

> 用户是否愿意为“故事 + 设计 + 选料 + 编制”的定制方案付款。

之后再逐步加入：

```text
Pearl
Ceramic
Incense Beads
Crystal + Incense
```

---

# 21. V1.2 30 天开发顺序

## Week 1 — 网站商业化基础

```text
AI Products
↓
产品详情页
↓
首页 Product CTA
↓
真实数据
↓
真实邮箱
↓
Trust / Legal
```

目标：

> Nexus 具备真实产品网站的基本可信度。

---

## Week 2 — 第一款产品

```text
AI Custom Bracelet Design
↓
Checkout
↓
Intake
↓
WorkBuddy
↓
Bracelet Knowledge Base
```

目标：

> 完成一次真实客户交付。

---

## Week 3 — 案例与素材

```text
5~10 个设计 Demo
↓
1~3 个完整案例
↓
产品图
↓
PDF
↓
Case Study
```

目标：

> 网站出现真正可以展示的产品证据。

---

## Week 4 — 获客

重点：

```text
Pinterest
TikTok
Reddit
Instagram
AI / DIY / Jewelry Communities
```

内容围绕：

```text
Customer Story
↓
AI Design Proposal
↓
Materials
↓
Final Bracelet
```

目标：

> 第一个陌生访客 → 第一次询盘 → 第一个付费客户。

---

# 22. V1.2 完成标准

```text
[✓] AI Products 有独立入口
[✓] 第一款产品已上线
[✓] 首页有产品入口
[✓] 产品购买入口正常
[✓] 客户需求采集正常
[✓] WorkBuddy 可以生产 Design Proposal
[✓] 客户可以修改设计
[✓] 客户确认机制存在
[✓] 可以完成最终交付
[✓] 至少 1 个完整案例
[✓] 网站数据真实
[✓] 联系方式真实
[✓] Legal 与数字产品一致
[✓] 基础转化统计可用
```

---

# 23. V1.3 / V2 只在真实需求出现后再做

```text
V1.3
Free Bracelet Idea Generator

V1.4
AI Design Assistant

V1.5
Online Design Workspace

V2
AI Bracelet Designer SaaS

V2.1
Image Generation

V2.2
Product Mockups

V2.3
Commerce Integration

V3
API / MCP / Agent
```

---

# 24. 最终 Codex 总提示词

如果你希望 Codex 按阶段直接执行，可以把下面作为总控提示：

```text
你现在负责将当前 Nexus 网站升级为 V1.2。

网站：
https://nexus.myoboku.com/

核心目标：

将 Nexus 从：
AI Tools / Services Directory

升级为：
AI Tools + AI Products + AI Guides + Affiliate

第一款自有产品：
AI Custom Bracelet Design

第一阶段业务不是 SaaS，而是人工审核 + AI 辅助的定制设计数字服务。

必须遵守：

1. 先扫描整个现有项目。
2. 不推翻现有架构。
3. 不重复创建已有页面。
4. 不虚构数据、用户、评价、订单或资源数量。
5. 保持现有视觉语言。
6. 优先复用已有组件和数据结构。
7. 不将 Nexus 整站改成手链垂直站。
8. AI Products 是新的一级商业入口。
9. 第一款产品放在：
   /products/ai-custom-bracelet-design/
10. 首页展示 Featured AI Product。
11. 为未来 SaaS/API 预留数据接口。
12. 客户资料必须和公开产品内容隔离。

执行顺序：

PHASE 1
审计现有项目、路由、组件、数据和样式。

PHASE 2
增加 AI Products 信息架构。

PHASE 3
首页增加 Featured AI Product。

PHASE 4
建立 AI Custom Bracelet Design 产品页。

PHASE 5
优化真实数据、联系邮箱和 Trust 信息。

PHASE 6
补充数字产品相关 Legal / Refund / Delivery / Revision 信息。

PHASE 7
增加 Product 转化事件。

PHASE 8
进行完整 QA。

产品页面必须表达：

Customer Story
→ Design Brief
→ AI Design Proposal
→ Customer Revision
→ Customer Confirmation
→ Final Production
→ Digital Delivery

第一阶段不要开发在线实时 AI 生成。

所有与 Bracelet 有关的内部知识：
不要硬编码到 Nexus。
未来通过 Knowledge API / WorkBuddy 接入。

每个 PHASE 完成后：
1. 运行测试
2. 检查现有页面没有被破坏
3. 检查移动端
4. 检查 console errors
5. 输出修改记录

最后生成：
docs/NEXUS_V1.2_CHANGELOG.md

内容：
- 已完成
- 修改文件
- 新增页面
- 新增路由
- 数据结构变化
- QA 结果
- 未完成项
- V1.3 建议

不要为了“完善”而增加与商业目标无关的功能。
优先目标是：
第一款自有 AI 产品可以真实展示、购买、交付。
```

---

# 25. V1.2 的核心原则

不要把 V1.2 做成：

> “一个看起来很成熟的大型 AI 平台”。

真正的完成标准是：

> **一个陌生海外访客进入 Nexus → 看懂你是谁 → 发现 AI Products → 理解 AI Custom Bracelet Design → 点击购买 → 提交需求 → 你用 WorkBuddy + Bracelet Knowledge Base 完成设计 → 客户确认 → 数字交付。**

当前 Nexus 已经有 Tools、Services、Blog、Newsletter、Affiliate Disclosure、Privacy、Terms 等基础，因此 V1.2 的重点不是推倒重来，而是补上**自有产品、真实可信度和成交闭环**。

---

# Sources

- Nexus Home — https://nexus.myoboku.com/
- Nexus Tools — https://nexus.myoboku.com/tools/
- Nexus Services — https://nexus.myoboku.com/services/
- Nexus About — https://nexus.myoboku.com/about/
- Nexus Contact — https://nexus.myoboku.com/contact/
- Nexus Privacy — https://nexus.myoboku.com/privacy/
- Nexus Terms — https://nexus.myoboku.com/terms/
- Nexus Affiliate Disclosure — https://nexus.myoboku.com/affiliate-disclosure/
- TikTok Shop US Virtual Goods Requirements — https://seller-us.tiktok.com/university/essay?knowledge_id=7563407075510030
- TikTok Shop US Seller Registration Guidelines — https://seller-us.tiktok.com/university/essay?knowledge_id=2449541886658306
- TikTok Shop US Corporation / Partnership Registration — https://seller-us.tiktok.com/university/essay?knowledge_id=7750756652844842
