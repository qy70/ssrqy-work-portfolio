window.AI_PORTFOLIO_DATA = {
  en: {
    pageTitle: 'Qianyu · AI Systems & Product Portfolio',
    brandName: 'Qianyu',
    brandTag: 'AI Systems Portfolio',
    navThesis: 'Philosophy',
    navTa: 'Ta (祂)',
    navWorkbench: 'Workbench',
    navHarness: 'Agent & OSS',
    navAdapt: 'Execution',
    backToAi: '← Chat with My AI',
    themeToDark: 'Dark',
    themeToLight: 'Light',
    copiedEmail: 'Email copied: qy20040625@gmail.com',

    hero: {
      eyebrow: 'COMPOUND AI & MULTI-AGENT SYSTEMS ENGINEER · HONG KONG (UTC+8, SGT-ALIGNED)',
      title: 'I pair stateless reasoning engines with deterministic tools so AI holds up in production.',
      sub: 'My core architectural principle: every LLM inference turn is stateless—excelling at semantic synthesis and decision routing, while production reliability depends on externalized state layers: progressive context directories, strict ownership isolation, deterministic ledgers, and dynamic tool gating.',
      ctaPrimary: 'Talk to My Digital Twin',
      ctaPrimaryUrl: 'https://ssrqy.cn/',
      ctaSecondary: 'Explore Flagship: Ta (祂)',
      ctaSecondaryUrl: 'https://ssrqy.cn/ta/app/',
      ctaGithub: 'GitHub',
      ctaGithubUrl: 'https://github.com/qy70',
      ctaResume: 'Resume PDF (EN)',
      ctaResumeUrl: '../resume/Qianyu-Resume-EN.pdf',
      metrics: [
        { val: '3 Shipped Systems', label: 'Mobile PWA, Desktop Electron & Open Source' },
        { val: '414 Checks', label: '374 Business Regressions + 40 E2E Branch Checks' },
        { val: '4 Verticals', label: 'Business Ops Abstracted into Structured Workflows' },
        { val: 'EN & ZH', label: 'Bilingual Docs & Daily Technical Collaboration' },
      ],
    },

    thesis: {
      kicker: '01 · COMPOUND AI ARCHITECTURE',
      title: 'Progressive Context Disclosure & Directory-First Two-Pass Retrieval',
      desc: 'Instead of diluting attention by stuffing full history or unranked vector chunks into one bloated prompt, I externalize canonical state locally and expose a compact directory map on pass one.',
      legendLlm: 'Stateless Semantic Reasoning Engine (Intent & Selection)',
      legendTool: 'Deterministic Tooling & Externalized State (Ledger, Auth, Anchors)',
      repoLabel: 'Reference Code (GitHub) ↗',
      repoUrl: 'https://github.com/qy70/directory-first-retrieval',
      tabs: [
        { id: 'directory', label: 'My Approach: Directory-First Two-Pass' },
        { id: 'naive', label: 'Vs. Naive Prompt Stuffing / Blind RAG' },
      ],
      modes: {
        directory: {
          bullets: [
            {
              title: '1 · Lightweight Directory First',
              body: 'Each turn pairs the user query with a compact structured directory (group names, scopes, ownership) instead of raw payloads.',
            },
            {
              title: '2 · Model Picks, Tools Retrieve',
              body: 'The LLM selects exact categories needed; deterministic code fetches those full entries under strict token budgets (<=70% cap).',
            },
            {
              title: '3 · Clean Boundary & Faster Latency',
              body: 'Code handles IDs, permissions, money math, and caching prefixes; the LLM focuses purely on reasoning and natural output.',
            },
          ],
          svgCaption: 'Two-Pass Directory Retrieval Loop: Sharp Signal, Low Latency, Zero Arithmetic Hallucination',
        },
        naive: {
          bullets: [
            {
              title: '1 · Attention Dilution in Giant Prompts',
              body: 'Injecting full chat history and knowledge bases burns tokens linearly and buries crucial facts in the noisy middle.',
            },
            {
              title: '2 · Ownership & Era Bleed',
              body: 'Unstructured vector snippets lose who owns which fact ("user vs. AI") and expose modern search tools inside historical worlds.',
            },
            {
              title: '3 · Fragile Math & Unchecked Actions',
              body: 'Asking an LLM to calculate tiered percentages or fire external writes directly produces subtle, costly operational errors.',
            },
          ],
          svgCaption: 'Single-Pass Stuffing: Bloated Context, Drift Over Long Sessions, Unbounded Actions',
        },
      },
    },

    ta: {
      kicker: '02 · FLAGSHIP LIVE PRODUCT',
      title: 'Ta (祂) — Long-Memory AI Creation & Companion App',
      desc: 'An end-to-end production app (Android APK + Web/iOS PWA) I designed and shipped to solve the hardest failure modes of long-horizon AI: amnesia, persona drift, and worldview immersion breaks.',
      links: [
        { label: 'Launch Live Web App →', url: 'https://ssrqy.cn/ta/app/', primary: true },
        { label: 'Product Landing', url: 'https://ssrqy.cn/ta/', primary: false },
      ],
      diagramTitle: 'Four-Layer Compound AI Architecture Around a Stateless Engine',
      tradeoffs: [
        {
          tag: 'MEMORY ENGINEERING',
          tagType: 'llm',
          title: 'Why 2-Stage Catalog Recall Instead of Naive Context Stuffing?',
          body: 'Dumping memory logs ruins cost and recall precision as conversations grow. Splitting memory into a 3-trait Resident Layer plus an 11-group Episodic Catalog lets the model scan a tiny index first, then tools inject only selected records within a 70% context budget.',
        },
        {
          tag: 'STATE INTEGRITY',
          tagType: 'tool',
          title: 'Why 4-Subject Ownership + Manual Edit Locks?',
          body: 'Long chat extraction routinely confuses who said what ("user vs. character"). Enforcing explicit subject tags (user / character / shared / world) plus locking human-written facts prevents AI overwrites, while growth snapshots stay safely reversible.',
        },
        {
          tag: 'TOOLING & CACHE',
          tagType: 'tool',
          title: 'Why Era-Bound Tool Guards & End-of-User Timestamps?',
          body: 'Historical or fantasy characters physically lose live web-search tools so they never break character. Appending real-world timestamps at the end of the user message—not in the system prompt—keeps the static system prefix warm for upstream Prompt Cache hits.',
        },
      ],
      gallery: [
        { src: './assets/ta-home.webp', cap: 'CN App UI — Home: Multi-worldview roster & cross-platform chat entry (v2.0.1)' },
        { src: './assets/ta-chat.webp', cap: 'CN App UI — Chat: Era-aware tool guard strips live web search in historical/mythic scenes' },
        { src: './assets/ta-memory.webp', cap: 'CN App UI — Vault: 4-subject tabs (user/char/shared/world), human edit lock & time filters' },
      ],
    },

    workbench: {
      kicker: '03 · ENTERPRISE TOOL / LLM DECOUPLING',
      title: 'AI Ops Workbench (v1.5.0) — Human-in-the-Loop & Zero-Hallucination Ledger',
      desc: 'A production-grade Electron + SQLite (schema v22) + DeepSeek-Harness desktop system engineered for high-stakes commercial operations—demonstrating a strict boundary between code-owned ledgers and read-only AI assistance.',
      repoLabel: 'Ledger Reference Code (GitHub) ↗',
      repoUrl: 'https://github.com/qy70/integer-cent-ledger',
      diagramTitle: 'Hard Architectural Boundary: Deterministic Engine vs. Semantic Assistant',
      tradeoffs: [
        {
          tag: 'FINANCIAL DETERMINISM',
          tagType: 'tool',
          title: 'Why Lock Money & Tiered Commissions Inside BigInt Code?',
          body: 'Fixed fees, percentages, progressive tiers, retroactive full-tier upgrades, and refund clawbacks fail silently if delegated to LLM math. Storing integer cents and computing ledgers inside SQLite v22 deterministic rules guarantees exact, auditable numbers every time.',
        },
        {
          tag: 'SAFETY BOUNDARY',
          tagType: 'llm',
          title: 'Why Keep External Messaging Strictly Read-Only Human-in-the-Loop?',
          body: 'AI reads 3 physically isolated memory stores (customer service, social feed, embedded agent) behind a mandatory pending -> approved governance gate to draft contextual replies, while humans retain final review and send authority.',
        },
        {
          tag: 'MULTIMODAL GUARDRAIL',
          tagType: 'tool',
          title: 'Why Ban Vision Models from Minting Stable Customer IDs?',
          body: 'General vision models extract conversation screenshots accurately into structured drafts, but OCR nicknames are noisy. Records missing identity proof automatically route to a pending-verification queue until human or multi-source confirmation.',
        },
      ],
      gallery: [
        { src: './assets/wb-xiaoyu.webp', cap: 'CN Desktop UI — Left: module nav · Center: embedded agent studio · Right: live persona sliders' },
        { src: './assets/wb-wecom.webp', cap: 'CN Desktop UI — Left: client chat · Center: AI reply draft awaiting human audit · Right: KB rules' },
        { src: './assets/wb-channels.webp', cap: 'CN Desktop UI — SQLite v22 partner tier ledger & deterministic BigInt payout records' },
      ],
    },

    harness: {
      kicker: '04 · CONTEXT ENGINEERING & MULTI-AGENT ORCHESTRATION',
      title: 'Agentic Harnesses, Context Governance & Open-Source Tooling',
      desc: 'Beyond individual shipped apps, I run a multi-runtime AI workflow across Antigravity, Codex, DeepSeek-Harness, Grokbot, and WorkBuddy—standardizing directory retrieval, AGENTS.md governance, and deterministic verification.',
      cards: [
        {
          title: 'Qianyu QQ Agent (Open Source)',
          badge: 'PYTHON 3.12 · PYWEBVIEW · C#',
          body: 'Packages stateless DeepSeek-compatible APIs, NapCat messaging, per-account externalized memory, and local document retrieval inside a visual desktop runtime—with private business configs cleanly decoupled for v0.3.14 release.',
          linkLabel: 'View Repository on GitHub →',
          linkUrl: 'https://github.com/qy70/qianyu',
        },
        {
          title: 'Context Governance & Multi-Agent Orchestration',
          badge: 'AGENTS.MD · 5 AI RUNTIMES',
          body: 'Orchestrates daily architecture, code synthesis, research, and automated QA across Antigravity, Codex, DeepSeek-Harness, Grokbot, and WorkBuddy—governed by AGENTS.md protocols, 3-file topic KBs, handoff logs, and link/skill checks.',
          linkLabel: 'View Governance Kit on GitHub →',
          linkUrl: 'https://github.com/qy70/agent-context-governance',
        },
        {
          title: 'Interactive Digital Twin Portal',
          badge: 'SSRQY.CN · VOLCENGINE ARK',
          body: 'This portfolio’s companion portal at ssrqy.cn runs a 7-module weighted intent router over Node.js SSE streaming, 0-token guardrail filtering, and masked /24 query analytics—turning passive resume reading into interactive Q&A.',
          linkLabel: 'Open Digital Twin Chat →',
          linkUrl: 'https://ssrqy.cn/',
        },
      ],
      gallery: [
        { src: './assets/qy-home.webp', cap: 'CN Desktop UI — Left: service & QQ bridge status · Right: per-account config & local docs' },
        { src: './assets/qy-persona.webp', cap: 'CN Desktop UI — Visual persona editor & prompt presets without editing raw config files' },
      ],
      hobbyTitle: 'Engineering Discipline Beyond AI (Non-AI Personal Hobby):',
      hobbyBody:
        'Built an indie visual novel ("It\'s White Album Season Again") completely unrelated to AI—yet engineered with a custom web runtime (6 branches, 607 dialogue lines, dynamic BGM ducking), a deterministic script compiler, and 40 headless Chrome CDP verification checks across Mac & Windows.',
    },

    adaptability: {
      kicker: '05 · CROSS-DOMAIN EXECUTION',
      title: 'Why My AI Systems Fit Real Businesses Fast',
      desc: 'Since 2023.07, I have stepped into four distinct industries—learning unit economics fast, formalizing messy frontline habits into 1,517-node XMind blueprints & CRMs, and wiring AI directly into execution.',
      verticals: [
        {
          period: '2025.12 – Present',
          title: 'Health & Vocational Ed',
          desc: 'Built organic content-to-B2B inbound pipelines, shipped official site & Serverless BaaS (CloudBase) lead-attribution CRM, and launched partner channel playbooks.',
        },
        {
          period: '2025.03 – 2025.11',
          title: 'Knowledge & Study Tours',
          desc: 'Standardized consultation SOPs and searchable FAQ libraries (12x ad ROI), co-developed new study-tour offers as PM, and forged media partner channels.',
        },
        {
          period: '2024.10 – 2025.03',
          title: 'B2B Apparel Supply Chain',
          desc: 'Led a 10-person team building multi-channel B2B funnels and layered CRM segmentation systems focused on repeat wholesale conversion.',
        },
        {
          period: '2023.07 – 2024.10',
          title: 'Gaming & Trendy-Toy Ops',
          desc: 'Managed high-frequency user communities and built a new trendy-toy operations unit from zero to 5,000+ members with repeatable SOPs.',
        },
      ],
      cnNote: 'Looking for my detailed Chinese Domestic Private-Domain Ops Portfolio (XMind mindmaps, training decks, local market cases)?',
      cnBtn: 'Visit China Ops Portfolio (CN) →',
      cnUrl: 'https://portfolio.ssrqy.cn/',
    },

    footer: {
      title: 'Want to probe any architectural trade-off live?',
      sub: 'Ask my bilingual digital twin on ssrqy.cn directly—or reach out for AI product, agent engineering, or systems roles. Based in Hong Kong · available immediately · remote, full-time or on-site.',
      btnAi: 'Open AI Digital Twin →',
      btnAiUrl: 'https://ssrqy.cn/',
      btnEmail: 'Copy Email (qy20040625@gmail.com)',
      btnGithub: 'GitHub (@qy70)',
    },
  },

  zh: {
    pageTitle: 'Qianyu · 千羽 AI 系统与产品作品集',
    brandName: '千羽 Qianyu',
    brandTag: 'AI 系统与工程作品集',
    navThesis: '大模型架构观',
    navTa: '「祂」产品架构',
    navWorkbench: '工作台解耦',
    navHarness: 'Agent 与开源',
    navAdapt: '跨行业落地',
    backToAi: '← 回到主页 AI 对话',
    themeToDark: '暗色',
    themeToLight: '亮色',
    copiedEmail: '已复制邮箱：qy20040625@gmail.com',

    hero: {
      eyebrow: '复合 AI 系统与多 Agent 编排构建者 · 香港 / 新加坡零时差（UTC+8）',
      title: '以确定性工程约束无状态推理引擎，让 AI 在生产环境稳定交付。',
      sub: '我的核心架构原则：大模型在单次推理中本质是“无状态语义推理引擎”，擅长意图理解与结构化决策；真正决定系统上限的，是外部的渐进式目录检索、四主语持久化隔离、确定性代码账本与动态工具门控。',
      ctaPrimary: '和我的主页 AI 分身对话',
      ctaPrimaryUrl: 'https://ssrqy.cn/',
      ctaSecondary: '在线试玩「祂」Web 版',
      ctaSecondaryUrl: 'https://ssrqy.cn/ta/app/',
      ctaGithub: 'GitHub 主页',
      ctaGithubUrl: 'https://github.com/qy70',
      ctaResume: '英文简历 PDF（1页）',
      ctaResumeUrl: '../resume/Qianyu-Resume-EN.pdf',
      metrics: [
        { val: '3 套真实交付', label: '跨端 AI 应用 / 桌面级协同工作台 / GitHub 开源宿主' },
        { val: '414 项自动化校验', label: '工作台 374 项业务回归 + 个人引擎 40 项全流程检测' },
        { val: '4 类行业抽象', label: '多次从 0 拆解陌生商业链路并沉淀为可执行系统' },
        { val: '中英双语协作', label: '支持英文技术/产品文档读写与日常英文书面协作' },
      ],
    },

    thesis: {
      kicker: '01 · 复合 AI 核心架构观',
      title: '渐进式上下文披露 × 目录驱动两阶段检索（Two-Pass Retrieval）',
      desc: '我不靠无脑堆长上下文或盲切向量片段赌运气——核心事实留在本地结构化存储里，第一轮仅向模型披露轻量目录映射，由它按需决策后再经确定性工具调回完整原文。',
      legendLlm: '无状态语义推理引擎（意图理解、路由决策与自然生成）',
      legendTool: '确定性工具与外部持久化状态（账本、权限与时间锚点）',
      repoLabel: '参考代码实现 (GitHub) ↗',
      repoUrl: 'https://github.com/qy70/directory-first-retrieval',
      tabs: [
        { id: 'directory', label: '我的架构：目录驱动二次调用' },
        { id: 'naive', label: '对比传统方案：长文本硬塞 / 盲切 RAG' },
      ],
      modes: {
        directory: {
          bullets: [
            {
              title: '1 · 第一轮只喂“轻量化信息目录”',
              body: '把知识库、记忆按主题拆分成清晰分组；每轮对话只给模型轻量目录索引，大幅压低首轮 Token 消耗与噪声干扰。',
            },
            {
              title: '2 · 模型自主决策，工具精准取原文',
              body: '由大模型判断当下真正需要哪几个模块，确定性工具按预算上限（≤70% 上下文）精准调出完整原文做二次生成。',
            },
            {
              title: '3 · 成本更低、响应更快、口径更稳',
              body: 'ID、金额核算、权限门槛与静态缓存前缀全由代码守住；模型只干它最擅长的推理与对话，双方各司其职。',
            },
          ],
          svgCaption: '目录驱动两阶段闭环：高信噪比、低延迟、零数值与越权幻觉',
        },
        naive: {
          bullets: [
            {
              title: '1 · 长上下文注意稀释与账单失控',
              body: '把历史记录和几十万字资料一股脑塞进提示词，不仅 Token 成本呈指数上升，核心事实也容易被“迷失在中间”。',
            },
            {
              title: '2 · 主语错乱与世界观串台',
              body: '普通切片检索丢失“这句话是用户说的还是角色设定”，还容易让古代/架空角色突然调用现代联网工具出戏。',
            },
            {
              title: '3 · 模型直接算账与执行越权风险',
              body: '让大模型直接算阶梯返佣、退费冲减或直接对外发消息，必然在关键业务节点埋下高风险隐患。',
            },
          ],
          svgCaption: '单轮硬塞方案：高成本、长对话漂移、数值与权限不可控',
        },
      },
    },

    ta: {
      kicker: '02 · 旗舰上线代表作',
      title: '「祂」— 长记忆 AI 创作与陪伴应用（Android + Web PWA）',
      desc: '由我独立定义系统架构并全链路上线生产的跨端复合 AI 应用。聚焦解决长程对话最棘手的三大工程难题：上下文长度瓶颈与漂移、多人物主语归因错乱，以及工具调用越界导致的跨时代出戏。',
      links: [
        { label: '打开线上网页版试玩 →', url: 'https://ssrqy.cn/ta/app/', primary: true },
        { label: '项目官网与下载', url: 'https://ssrqy.cn/ta/', primary: false },
      ],
      diagramTitle: '围绕「无状态推理引擎」构建的四层外部工程底座',
      tradeoffs: [
        {
          tag: '上下文与成本工程',
          tagType: 'llm',
          title: '为什么做“常驻 3 类 + 11 组目录”二次调忆？',
          body: '长对话如果全量进 Prompt，聊到几十轮就会爆 Token 且遗忘关键设定。分层后每轮仅直发核心 3 类称呼关系，模型看轻量目录按需取回情节原文并严守 70% 预算，成本与精准度同时可控。',
        },
        {
          tag: '状态与幻觉治理',
          tagType: 'tool',
          title: '为什么强制“四主语隔离 + 用户手写锁定”？',
          body: '大模型总结长历史时极易把“用户说过的偏好”记成“AI 自己的设定”。我在数据层强制绑定 user / character / shared / world 四主语标签，并锁死人工手写记忆不被模型覆写，成长快照也全程可回退。',
        },
        {
          tag: 'Tooling 与缓存调优',
          tagType: 'tool',
          title: '为什么按时代剥离工具，且时间故意拼在 user 末尾？',
          body: '古风或奇幻角色在工具层物理移除联网搜索，从根源避免出戏；同时故意不把实时时间戳放进 System Prompt，而是追加在 user 消息末尾，完整保住静态系统前缀的上游 Prompt Cache 命中率。',
        },
      ],
      gallery: [
        { src: './assets/ta-home.webp', cap: '多世界观角色矩阵与跨端气泡 UI（v2.0.1）' },
        { src: './assets/ta-chat.webp', cap: '世界观动态工具守卫：古风/神域角色物理隔离现代搜索' },
        { src: './assets/ta-memory.webp', cap: '四主语隔离记忆库与人工锁定纠偏界面' },
      ],
    },

    workbench: {
      kicker: '03 · 企业级工具与大模型解耦工程',
      title: '千羽私域运营工作台（v1.5.0 桌面端架构）',
      desc: '基于 Electron + SQLite (v22) + DeepSeek-Harness 构建的跨行业桌面协同系统，展示我如何划清「确定性代码引擎」与「语义理解 AI 助理」的边界，让 AI 在真实商业流程中安全审计、可迁移复用。',
      repoLabel: '账本算法参考代码 (GitHub) ↗',
      repoUrl: 'https://github.com/qy70/integer-cent-ledger',
      diagramTitle: '硬核边界拆解：确定性账本/状态引擎 vs. 只读语义协同层',
      tradeoffs: [
        {
          tag: '金融级确定性',
          tagType: 'tool',
          title: '为什么金额、阶梯返佣与退款追回必须用 BigInt 代码锁死？',
          body: '企业合作涉及固定金额、百分比、分段累进、达档全额阶梯及跨月回算，任何微小误差都会引发财务纠纷。全程采用整数分落库与 BigInt 规则引擎确定性计算，绝不让 LLM 碰算账和账本写权限。',
        },
        {
          tag: '安全边界设计',
          tagType: 'llm',
          title: '为什么对外沟通刻意坚守只读 Human-in-the-Loop？',
          body: '客服、朋友圈、专属助理三套记忆物理隔离，新知识一律经「待确认 → 人工批准」才能进入检索；AI 基于合规依据起草建议回复，最终审核权与对外发送权完全留给人，确保商业合规。',
        },
        {
          tag: '多模态工程兜底',
          tagType: 'tool',
          title: '为什么禁止通用视觉模型编造稳定客户 ID？',
          body: '视觉模型能高效把对话截图抽取为结构化记录，但昵称截屏天然带有歧义。程序在代码层硬性禁止模型生成正式 ID，线索不足统一入待核对池，靠后续多维资料确认后再关联归档。',
        },
      ],
      gallery: [
        { src: './assets/wb-xiaoyu.webp', cap: '内置专属 AI 助理：性格刻度与系统提示词实时注入' },
        { src: './assets/wb-wecom.webp', cap: '只读人机协同：AI 起草建议回复 + 待人工审核边界' },
        { src: './assets/wb-channels.webp', cap: '确定性工具内核：SQLite + BigInt 多模式阶梯佣金与流水台账' },
      ],
    },

    harness: {
      kicker: '04 · 上下文工程与多 Agent 协同编排',
      title: '把多 AI 协同方法沉淀为可复用的工程基础设施',
      desc: '除独立交付的应用与桌面工作台外，我日常在 Antigravity、Codex、DeepSeek-Harness、Grokbot 与 WorkBuddy 之间按任务特性编排调度，并将「推理引擎与外部工具解耦」沉淀为开源宿主、上下文治理协议与数字分身架构。',
      cards: [
        {
          title: '千鱼 QQ Agent（GitHub 开源）',
          badge: 'PYTHON 3.12 · PYWEBVIEW · C#',
          body: '将 DeepSeek 兼容模型接口、NapCat 消息协议、分账号持久化记忆隔离与本地文档检索整合为开箱即用的中文桌面宿主，并完成私有业务配置与开源代码库的彻底解耦（v0.3.14 干净发行版）。',
          linkLabel: '访问 GitHub 开源仓库 →',
          linkUrl: 'https://github.com/qy70/qianyu',
        },
        {
          title: '上下文治理协议（AGENTS.md）与多 AI 编排',
          badge: 'CONTEXT GOVERNANCE · 5 RUNTIMES',
          body: '在 Antigravity / Codex / DeepSeek-Harness / Grokbot / WorkBuddy 多工具协同中建立统一上下文治理规范：开工必读置顶规则、只读原料隔离、倒序交接日志及断链/技能校验脚本，消除多会话协作漂移。',
          linkLabel: '访问 GitHub 治理协议仓库 →',
          linkUrl: 'https://github.com/qy70/agent-context-governance',
        },
        {
          title: '千羽数字分身主站架构',
          badge: 'SSRQY.CN · 火山方舟流式代理',
          body: '正在交互的 ssrqy.cn 基于 7 个高密度知识分片做加权意图路由，配合 Node.js 流式透传、前置 0-Token 护栏及 /24 脱敏统计，把静态履历转成随时可追问的产品演示。',
          linkLabel: '前往主页直接对话 →',
          linkUrl: 'https://ssrqy.cn/',
        },
      ],
      gallery: [
        { src: './assets/qy-home.webp', cap: '千鱼开源桌面 Agent 管理控制台（v0.3.14）' },
        { src: './assets/qy-persona.webp', cap: '可视化人设切换、提示词与分账号记忆隔离配置' },
      ],
      hobbyTitle: 'AI 之外的工程洁癖（纯个人兴趣 · 非 AI）：',
      hobbyBody:
        '独立制作视觉小说《又到了白色相簿的季节》（与 AI 无关），依然自研了 Web 演出引擎（6 条分支、607 句对白、音频动态压低）、结构化剧本编译器及 40 项 Chrome CDP 无头自动化通关校验，打通双端交付。',
    },

    adaptability: {
      kicker: '05 · 跨行业商业适应力与抽象能力',
      title: '三年跨越 4 类陌生业务，让我知道 AI 该嵌在哪一层',
      desc: '自 2023.07 起进入游戏、ToB 服装供应链、知识付费及大健康/教育四类完全不同的行业——核心不是卖老式销售话术，而是迅速摸清单位经济模型，将一线复杂规则抽象为 1,517 节点决策导图、CRM 与 AI 工具流。',
      verticals: [
        {
          period: '2025.12 – 至今',
          title: '大健康与职业教育',
          desc: '搭建内容到 B2B 渠道获客链路，独立交付官网、CloudBase 线索归因系统与标准化 BD/运营手册。',
        },
        {
          period: '2025.03 – 2025.11',
          title: '知识付费与产业游学',
          desc: '沉淀可检索 FAQ 与标准化咨询 SOP，以 PM 视角推进游学新产品与媒体渠道合作落地。',
        },
        {
          period: '2024.10 – 2025.03',
          title: 'ToB 服装供应链',
          desc: '带 10 人团队梳理多渠道 B2B 获客漏斗与分层客户跟进体系，聚焦高复购转化链路抽象。',
        },
        {
          period: '2023.07 – 2024.10',
          title: '游戏与潮玩社群运营',
          desc: '高活跃高频社群运营起步，从 0 建立标准化 SOP 跑通 5,000+ 用户潮玩新品类冷启动。',
        },
      ],
      cnNote: '如果你想查看偏向国内私域/渠道运营的详细交接资料、思维导图原件与培训 PPT 预览：',
      cnBtn: '查看国内私域运营作品集（中文） →',
      cnUrl: 'https://portfolio.ssrqy.cn/',
    },

    footer: {
      title: '想直接就某个架构细节展开追问？',
      sub: '点击前往 ssrqy.cn 与我的数字分身实时交流，或发邮件至 qy20040625@gmail.com 联系我。现居香港，可随时入职，远程、全职或到岗均可。',
      btnAi: '打开个人 AI 分身对话 →',
      btnAiUrl: 'https://ssrqy.cn/',
      btnEmail: '复制邮箱（qy20040625@gmail.com）',
      btnGithub: 'GitHub (@qy70)',
    },
  },
};
