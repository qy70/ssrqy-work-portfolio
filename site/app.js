(function () {
  const DATA = window.AI_PORTFOLIO_DATA;

  function detectInitialLang() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('lang');
    if (q === 'en' || q === 'zh') return q;
    try {
      const shared = localStorage.getItem('qianyu_lang');
      if (shared === 'en' || shared === 'zh') return shared;
      const saved = localStorage.getItem('qianyu_ai_portfolio_lang');
      if (saved === 'en' || saved === 'zh') return saved;
    } catch {}
    return String(navigator.language || '').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  }

  function detectInitialTheme() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('theme');
    if (q === 'dark' || q === 'light') return q;
    try {
      const saved = localStorage.getItem('qianyu_ai_portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {}
    return 'light';
  }

  const state = {
    lang: detectInitialLang(),
    theme: detectInitialTheme(),
    thesisTab: 'directory',
  };

  function esc(str) {
    return String(str ?? '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[c]));
  }

  function showToast(text) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = text;
    el.classList.add('visible');
    clearTimeout(showToast.t);
    showToast.t = setTimeout(() => el.classList.remove('visible'), 2400);
  }

  function renderThesisSvg(lang, mode) {
    const isEn = lang === 'en';
    if (mode === 'directory') {
      return `
        <svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Directory-First Two-Pass Architecture">
          <defs>
            <marker id="arr-llm" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--llm)"/>
            </marker>
            <marker id="arr-tool" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--tool)"/>
            </marker>
          </defs>
          <!-- Row 1 -->
          <rect x="16" y="22" width="144" height="60" rx="10" fill="var(--bg-elev)" stroke="var(--border-strong)" stroke-width="1.5"/>
          <text x="88" y="47" text-anchor="middle" fill="var(--text)" font-size="12.5" font-weight="700">${isEn ? 'User Query' : '用户提问'}</text>
          <text x="88" y="65" text-anchor="middle" fill="var(--text-soft)" font-size="11">${isEn ? '+ Lightweight Index' : '+ 轻量目录索引'}</text>

          <line x1="160" y1="52" x2="210" y2="52" stroke="var(--llm)" stroke-width="2" marker-end="url(#arr-llm)"/>

          <rect x="214" y="18" width="194" height="68" rx="10" fill="var(--llm-soft)" stroke="var(--llm)" stroke-width="1.5"/>
          <text x="311" y="43" text-anchor="middle" fill="var(--llm)" font-size="12" font-weight="700">${isEn ? 'PASS 1 · REASONING ENGINE' : '第一轮 · 推理引擎路由'}</text>
          <text x="311" y="61" text-anchor="middle" fill="var(--text)" font-size="11.5">${isEn ? 'Selects Exact Modules' : '自主勾选所需目录组'}</text>
          <text x="311" y="76" text-anchor="middle" fill="var(--text-soft)" font-size="10.5">${isEn ? 'Zero blind chunk guessing' : '不靠盲目猜碎片'}</text>

          <line x1="408" y1="52" x2="458" y2="52" stroke="var(--tool)" stroke-width="2" marker-end="url(#arr-tool)"/>

          <rect x="462" y="18" width="162" height="68" rx="10" fill="var(--tool-soft)" stroke="var(--tool)" stroke-width="1.5"/>
          <text x="543" y="43" text-anchor="middle" fill="var(--tool)" font-size="12" font-weight="700">${isEn ? 'DETERMINISTIC TOOLS' : '确定性工具与本地库'}</text>
          <text x="543" y="61" text-anchor="middle" fill="var(--text)" font-size="11.5">${isEn ? 'Fetch Full Records' : '精确调取完整原文'}</text>
          <text x="543" y="76" text-anchor="middle" fill="var(--text-soft)" font-size="10.5">${isEn ? 'SQLite / Ledger / Rules' : '严守 <=70% 预算上限'}</text>

          <!-- Vertical return -->
          <path d="M 543 86 L 543 134 L 408 134" fill="none" stroke="var(--tool)" stroke-width="2" marker-end="url(#arr-tool)"/>

          <!-- Row 2 -->
          <rect x="214" y="106" width="194" height="60" rx="10" fill="var(--llm-soft)" stroke="var(--llm)" stroke-width="1.5"/>
          <text x="311" y="131" text-anchor="middle" fill="var(--llm)" font-size="12" font-weight="700">${isEn ? 'PASS 2 · GROUNDED REPLY' : '第二轮 · 精准推理输出'}</text>
          <text x="311" y="149" text-anchor="middle" fill="var(--text-soft)" font-size="11">${isEn ? 'Fast, Sharp, Verifiable' : '低幻觉 · 高信噪比 · 省 Token'}</text>

          <line x1="214" y1="136" x2="164" y2="136" stroke="var(--llm)" stroke-width="2" marker-end="url(#arr-llm)"/>

          <rect x="16" y="106" width="144" height="60" rx="10" fill="var(--bg-elev)" stroke="var(--border-strong)" stroke-width="1.5"/>
          <text x="88" y="131" text-anchor="middle" fill="var(--text)" font-size="12.5" font-weight="700">${isEn ? 'Verified Output' : '可信交付结果'}</text>
          <text x="88" y="149" text-anchor="middle" fill="var(--tool)" font-size="11" font-weight="600">${isEn ? 'Human-Audited Boundary' : '人工或规则兜底边界'}</text>

          <!-- Bottom bar -->
          <rect x="16" y="186" width="608" height="44" rx="8" fill="var(--bg-elev)" stroke="var(--border)" stroke-width="1"/>
          <text x="320" y="212" text-anchor="middle" fill="var(--text-muted)" font-size="11.5" font-weight="600">
            ${isEn
              ? 'Compound Division: Engine = Semantics & Routing  |  Tooling = State, Math & Guardrails'
              : '复合分工：推理引擎负责语义判断与路由  |  确定性工具接管持久化状态、核算与边界门禁'}
          </text>
        </svg>`;
    }

    return `
      <svg viewBox="0 0 640 245" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Naive Prompt Stuffing Risk">
        <rect x="16" y="24" width="608" height="72" rx="10" fill="var(--bg-elev)" stroke="var(--border-strong)" stroke-dasharray="5 4" stroke-width="1.5"/>
        <text x="320" y="52" text-anchor="middle" fill="var(--text)" font-size="13" font-weight="700">
          ${isEn ? 'Single Bloated Prompt (Chat Logs + Docs + Rules + Arithmetic + Timestamps)' : '单轮巨型上下文（全量历史 + 文档 + 人设 + 算账 + 时间戳混杂）'}
        </text>
        <text x="320" y="75" text-anchor="middle" fill="var(--text-soft)" font-size="11.5">
          ${isEn ? 'Attention Dilution  •  Cache Prefix Bust  •  Persona & Ownership Bleed' : '注意力稀释  •  每次破坏缓存前缀  •  主语与时代记忆串台'}
        </text>
        <line x1="320" y1="96" x2="320" y2="128" stroke="var(--text-soft)" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="96" y="132" width="448" height="66" rx="10" fill="var(--bg-subtle)" stroke="var(--border)" stroke-width="1.5"/>
        <text x="320" y="159" text-anchor="middle" fill="var(--text)" font-size="12.5" font-weight="700">
          ${isEn ? 'High Latency, High Token Spend, Subtle Hallucinations' : '响应变慢 · 成本飙升 · 关键数值或业务边界出现隐蔽幻觉'}
        </text>
        <text x="320" y="180" text-anchor="middle" fill="var(--text-soft)" font-size="11">
          ${isEn ? 'Treats external tooling as an afterthought instead of primary architecture.' : '把外部工程工具当成事后补丁，而不是系统底座的一部分。'}
        </text>
      </svg>`;
  }

  function renderTaSvg(lang) {
    const isEn = lang === 'en';
    return `
      <svg viewBox="0 0 920 226" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ta 4 Exoskeleton Architecture">
        <!-- Core Brain -->
        <rect x="20" y="44" width="185" height="138" rx="12" fill="var(--llm-soft)" stroke="var(--llm)" stroke-width="1.6"/>
        <text x="112" y="88" text-anchor="middle" fill="var(--llm)" font-size="12" font-weight="700">${isEn ? 'STATELESS ENGINE' : '无状态语义引擎'}</text>
        <text x="112" y="112" text-anchor="middle" fill="var(--text)" font-size="13" font-weight="700">${isEn ? 'Reasoning & Routing' : '语义理解与决策生成'}</text>
        <text x="112" y="134" text-anchor="middle" fill="var(--text-soft)" font-size="11">${isEn ? 'Reasoning & Expression' : '专注语义理解与对话表现'}</text>
        <text x="112" y="153" text-anchor="middle" fill="var(--text-soft)" font-size="11">${isEn ? 'Prompt Cache Protected' : '静态系统前缀缓存保护'}</text>

        <!-- Arrows -->
        <line x1="205" y1="65" x2="256" y2="32" stroke="var(--tool)" stroke-width="1.8"/>
        <line x1="205" y1="98" x2="256" y2="86" stroke="var(--tool)" stroke-width="1.8"/>
        <line x1="205" y1="128" x2="256" y2="140" stroke="var(--tool)" stroke-width="1.8"/>
        <line x1="205" y1="160" x2="256" y2="194" stroke="var(--tool)" stroke-width="1.8"/>

        <!-- 4 Exoskeleton Boxes -->
        <rect x="260" y="8" width="640" height="48" rx="8" fill="var(--tool-soft)" stroke="var(--tool-border)" stroke-width="1.2"/>
        <text x="278" y="27" fill="var(--tool)" font-size="12" font-weight="700">1 · ${isEn ? 'Two-Stage Catalog Memory' : '两阶段目录调忆'}</text>
        <text x="278" y="45" fill="var(--text-muted)" font-size="11.5">${isEn ? '3-trait Resident Layer + 11-group Index -> Tools load selected entries (<=70% cap)' : '常驻 3 类 + 11 组目录索引 -> 模型先选组，工具调原文（严守 70% 预算）'}</text>

        <rect x="260" y="62" width="640" height="48" rx="8" fill="var(--tool-soft)" stroke="var(--tool-border)" stroke-width="1.2"/>
        <text x="278" y="81" fill="var(--tool)" font-size="12" font-weight="700">2 · ${isEn ? 'Subject Isolation + Lock' : '四主语隔离与手写锁'}</text>
        <text x="278" y="99" fill="var(--text-muted)" font-size="11.5">${isEn ? 'user / character / shared / world tags + human edit lock + reversible growth' : '强绑定四类主语归属 + 锁定人工编辑不覆写 + 可回退人物成长快照'}</text>

        <rect x="260" y="116" width="640" height="48" rx="8" fill="var(--tool-soft)" stroke="var(--tool-border)" stroke-width="1.2"/>
        <text x="278" y="135" fill="var(--tool)" font-size="12" font-weight="700">3 · ${isEn ? 'Era Tool Guard & Cache' : '世界观工具守卫 & 缓存'}</text>
        <text x="278" y="153" fill="var(--text-muted)" font-size="11.5">${isEn ? 'Modern = Live Search + Docs | Ancient/Fantasy = Search stripped + Timestamp at user tail' : '按时代动态剥离联网工具杜绝出戏 | 实时时间追加于 user 末尾保缓存'}</text>

        <rect x="260" y="170" width="640" height="48" rx="8" fill="var(--tool-soft)" stroke="var(--tool-border)" stroke-width="1.2"/>
        <text x="278" y="189" fill="var(--tool)" font-size="12" font-weight="700">4 · ${isEn ? 'Archive Pipeline & Store' : '流式归档与双端分页库'}</text>
        <text x="278" y="207" fill="var(--text-muted)" font-size="11.5">${isEn ? 'Zero-copy ZIP probe + overlapping SSE chunks + SQLite (Android) / IndexedDB (Web)' : '零拷贝目录预检 + 重叠 SSE 分块并发脱敏 + SQLite / IndexedDB 游标真分页'}</text>
      </svg>`;
  }

  function renderWorkbenchSvg(lang) {
    const isEn = lang === 'en';
    return `
      <svg viewBox="0 0 920 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Workbench Hard Decoupling Boundary">
        <!-- Left column: Deterministic -->
        <rect x="16" y="14" width="424" height="202" rx="12" fill="var(--tool-soft)" stroke="var(--tool)" stroke-width="1.6"/>
        <text x="36" y="42" fill="var(--tool)" font-size="12" font-weight="700">${isEn ? 'DETERMINISTIC ENGINE (ZERO HALLUCINATION)' : '确定性代码引擎（绝对零幻觉边界）'}</text>
        <rect x="34" y="56" width="388" height="34" rx="7" fill="var(--bg-elev)" stroke="var(--tool-border)"/>
        <text x="48" y="77" fill="var(--text)" font-size="12">${isEn ? '• SQLite v22 + Integer-Cent BigInt Commission Ledger' : '• SQLite v22 + 整数分 BigInt 多模式阶梯佣金核算'}</text>
        <rect x="34" y="98" width="388" height="34" rx="7" fill="var(--bg-elev)" stroke="var(--tool-border)"/>
        <text x="48" y="119" fill="var(--text)" font-size="12">${isEn ? '• Cross-Month Recalc, Partial Payouts & Refund Clawbacks' : '• 政策版本快照、跨月回算、分期付款与退款追回台账'}</text>
        <rect x="34" y="140" width="388" height="34" rx="7" fill="var(--bg-elev)" stroke="var(--tool-border)"/>
        <text x="48" y="161" fill="var(--text)" font-size="12">${isEn ? '• 3-Way Lark (Feishu) Base Diff Sync + 374 Regression Tests' : '• 飞书三方基线 Diff 双向同步 + 374 项业务回归测试'}</text>
        <text x="36" y="198" fill="var(--tool)" font-size="11" font-weight="600">${isEn ? 'Hard Lock: LLM cannot alter numbers, IDs, or send directly' : '硬边界：大模型绝不可直接算账、伪造 ID 或绕过人工发消息'}</text>

        <!-- Bridge -->
        <rect x="448" y="76" width="24" height="78" rx="6" fill="var(--bg-elev)" stroke="var(--border-strong)"/>
        <text x="460" y="119" text-anchor="middle" fill="var(--text-soft)" font-size="11" font-weight="700" transform="rotate(-90 460 119)">${isEn ? 'GATE' : '门禁'}</text>

        <!-- Right column: LLM Semantic -->
        <rect x="480" y="14" width="424" height="202" rx="12" fill="var(--llm-soft)" stroke="var(--llm)" stroke-width="1.6"/>
        <text x="500" y="42" fill="var(--llm)" font-size="12" font-weight="700">${isEn ? 'LLM SEMANTIC LAYER (HUMAN-IN-THE-LOOP)' : '大模型语义协同层（人机共治 · 只读草稿）'}</text>
        <rect x="498" y="56" width="388" height="34" rx="7" fill="var(--bg-elev)" stroke="var(--llm-border)"/>
        <text x="512" y="77" fill="var(--text)" font-size="12">${isEn ? '• Embedded DeepSeek-Harness + Live Persona Prompt Injection' : '• 内嵌 DeepSeek-Harness + 工作区 Skill + 人设实时注入'}</text>
        <rect x="498" y="98" width="388" height="34" rx="7" fill="var(--bg-elev)" stroke="var(--llm-border)"/>
        <text x="512" y="119" fill="var(--text)" font-size="12">${isEn ? '• 3-Role Memory Isolation (CS / Social / Agent) + Approval Gate' : '• 客服 / 朋友圈 / 小羽三角色物理隔离 + 人工批准入库'}</text>
        <rect x="498" y="140" width="388" height="34" rx="7" fill="var(--bg-elev)" stroke="var(--llm-border)"/>
        <text x="512" y="161" fill="var(--text)" font-size="12">${isEn ? '• Multimodal Vision Screenshot Capture + Pending-ID Queue' : '• 通用视觉模型截图补证 + 弱身份入待核对会话池'}</text>
        <text x="500" y="198" fill="var(--llm)" font-size="11" font-weight="600">${isEn ? 'Copilot drafts with citations; human approves every final send' : 'AI 附依据起草建议；人审核修订后再确认对外发送'}</text>
      </svg>`;
  }

  function render() {
    const t = DATA[state.lang] || DATA.en;
    document.title = t.pageTitle;
    document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.setAttribute('data-theme', state.theme);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (t[key]) el.textContent = t[key];
    });

    const btnTheme = document.getElementById('btn-theme');
    if (btnTheme) btnTheme.textContent = state.theme === 'light' ? t.themeToDark : t.themeToLight;

    const btnLang = document.getElementById('btn-lang');
    if (btnLang) btnLang.textContent = state.lang === 'en' ? 'EN / 中文' : '中文 / EN';

    const backAiBtn = document.getElementById('btn-back-ai');
    if (backAiBtn) backAiBtn.href = `https://ssrqy.cn/?lang=${state.lang}`;
    const aiTargetUrl = `https://ssrqy.cn/?lang=${state.lang}`;

    const curThesis = t.thesis.modes[state.thesisTab] || t.thesis.modes.directory;

    const app = document.getElementById('app');
    app.innerHTML = `
      <!-- HERO -->
      <section id="hero" class="hero">
        <span class="eyebrow">${esc(t.hero.eyebrow)}</span>
        <h1>${esc(t.hero.title)}</h1>
        <p class="hero-sub">${esc(t.hero.sub)}</p>
        <div class="hero-actions">
          <a class="btn-primary" href="${esc(aiTargetUrl)}">${esc(t.hero.ctaPrimary)}</a>
          <a class="btn-secondary" href="${esc(t.hero.ctaSecondaryUrl)}" target="_blank" rel="noopener">${esc(t.hero.ctaSecondary)}</a>
          <a class="btn-secondary" href="${esc(t.hero.ctaGithubUrl)}" target="_blank" rel="noopener">${esc(t.hero.ctaGithub)}</a>
          <a class="btn-secondary" href="${esc(t.hero.ctaResumeUrl)}" target="_blank" rel="noopener">${esc(t.hero.ctaResume)}</a>
        </div>
        <div class="metrics-grid">
          ${t.hero.metrics
            .map(
              (m) => `
            <div class="metric-card">
              <div class="metric-val">${esc(m.val)}</div>
              <div class="metric-label">${esc(m.label)}</div>
            </div>`
            )
            .join('')}
        </div>
      </section>

      <!-- 01 THESIS -->
      <section id="thesis" class="section">
        <div class="sec-head">
          <div>
            <div class="sec-kicker">${esc(t.thesis.kicker)}</div>
            <h2 class="sec-title">${esc(t.thesis.title)}</h2>
            <p class="sec-desc">${esc(t.thesis.desc)}</p>
          </div>
          <div class="legend-row">
            <span class="pill-llm">${esc(t.thesis.legendLlm)}</span>
            <span class="pill-tool">${esc(t.thesis.legendTool)}</span>
          </div>
        </div>

        <div class="panel">
          <div class="tab-bar" role="tablist">
            ${t.thesis.tabs
              .map(
                (tab) => `
              <button type="button" role="tab" class="tab-btn ${state.thesisTab === tab.id ? 'active' : ''}" data-thesis-tab="${esc(tab.id)}">
                ${esc(tab.label)}
              </button>`
              )
              .join('')}
          </div>

          <div class="thesis-grid">
            <div class="svg-box">
              ${renderThesisSvg(state.lang, state.thesisTab)}
              <div style="margin-top:8px;font-size:12px;color:var(--text-soft);text-align:center;">
                ${esc(curThesis.svgCaption)}
              </div>
            </div>
            <ul class="bullet-list">
              ${curThesis.bullets
                .map(
                  (b) => `
                <li>
                  <strong>${esc(b.title)}</strong>
                  <span>${esc(b.body)}</span>
                </li>`
                )
                .join('')}
            </ul>
          </div>
        </div>
      </section>

      <!-- 02 CASE STUDY 1: TA -->
      <section id="ta" class="section">
        <div class="sec-head">
          <div>
            <div class="sec-kicker">${esc(t.ta.kicker)}</div>
            <h2 class="sec-title">${esc(t.ta.title)}</h2>
            <p class="sec-desc">${esc(t.ta.desc)}</p>
          </div>
          <div class="hero-actions">
            ${t.ta.links
              .map(
                (l) => `
              <a class="${l.primary ? 'btn-primary' : 'btn-secondary'}" href="${esc(l.url)}" target="_blank" rel="noopener">
                ${esc(l.label)}
              </a>`
              )
              .join('')}
          </div>
        </div>

        <div class="panel">
          <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:12px;">
            ${esc(t.ta.diagramTitle)}
          </div>
          <div class="svg-box">${renderTaSvg(state.lang)}</div>
        </div>

        <div class="tradeoffs-grid">
          ${t.ta.tradeoffs
            .map(
              (card) => `
            <article class="tradeoff-card">
              <span class="tradeoff-tag ${card.tagType}">${esc(card.tag)}</span>
              <h3>${esc(card.title)}</h3>
              <p>${esc(card.body)}</p>
            </article>`
            )
            .join('')}
        </div>

        <div class="gallery-grid">
          ${t.ta.gallery
            .map(
              (g) => `
            <button type="button" class="shot-card" data-shot-src="${esc(g.src)}" data-shot-cap="${esc(g.cap)}">
              <img src="${esc(g.src)}" alt="${esc(g.cap)}" />
              <div class="shot-cap">${esc(g.cap)}</div>
            </button>`
            )
            .join('')}
        </div>
      </section>

      <!-- 03 CASE STUDY 2: WORKBENCH -->
      <section id="workbench" class="section">
        <div class="sec-head">
          <div>
            <div class="sec-kicker teal">${esc(t.workbench.kicker)}</div>
            <h2 class="sec-title">${esc(t.workbench.title)}</h2>
            <p class="sec-desc">${esc(t.workbench.desc)}</p>
          </div>
        </div>

        <div class="panel">
          <div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:12px;">
            ${esc(t.workbench.diagramTitle)}
          </div>
          <div class="svg-box">${renderWorkbenchSvg(state.lang)}</div>
        </div>

        <div class="tradeoffs-grid">
          ${t.workbench.tradeoffs
            .map(
              (card) => `
            <article class="tradeoff-card">
              <span class="tradeoff-tag ${card.tagType}">${esc(card.tag)}</span>
              <h3>${esc(card.title)}</h3>
              <p>${esc(card.body)}</p>
            </article>`
            )
            .join('')}
        </div>

        <div class="gallery-grid">
          ${t.workbench.gallery
            .map(
              (g) => `
            <button type="button" class="shot-card" data-shot-src="${esc(g.src)}" data-shot-cap="${esc(g.cap)}">
              <img src="${esc(g.src)}" alt="${esc(g.cap)}" />
              <div class="shot-cap">${esc(g.cap)}</div>
            </button>`
            )
            .join('')}
        </div>
      </section>

      <!-- 04 CASE STUDY 3: HARNESS & OSS -->
      <section id="harness" class="section">
        <div class="sec-head">
          <div>
            <div class="sec-kicker">${esc(t.harness.kicker)}</div>
            <h2 class="sec-title">${esc(t.harness.title)}</h2>
            <p class="sec-desc">${esc(t.harness.desc)}</p>
          </div>
        </div>

        <div class="cards-3">
          ${t.harness.cards
            .map(
              (c) => `
            <article class="feature-card">
              <span class="tradeoff-tag llm">${esc(c.badge)}</span>
              <h3>${esc(c.title)}</h3>
              <p>${esc(c.body)}</p>
              <a class="inline-link" href="${esc(c.linkUrl)}" ${c.linkUrl.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
                ${esc(c.linkLabel)}
              </a>
            </article>`
            )
            .join('')}
        </div>

        <div class="gallery-grid two-col">
          ${t.harness.gallery
            .map(
              (g) => `
            <button type="button" class="shot-card" data-shot-src="${esc(g.src)}" data-shot-cap="${esc(g.cap)}">
              <img src="${esc(g.src)}" alt="${esc(g.cap)}" />
              <div class="shot-cap">${esc(g.cap)}</div>
            </button>`
            )
            .join('')}
        </div>

        <div class="hobby-strip">
          <div><strong>${esc(t.harness.hobbyTitle)}</strong> ${esc(t.harness.hobbyBody)}</div>
        </div>
      </section>

      <!-- 05 ADAPTABILITY -->
      <section id="adaptability" class="section">
        <div class="sec-head">
          <div>
            <div class="sec-kicker teal">${esc(t.adaptability.kicker)}</div>
            <h2 class="sec-title">${esc(t.adaptability.title)}</h2>
            <p class="sec-desc">${esc(t.adaptability.desc)}</p>
          </div>
        </div>

        <div class="verticals-grid">
          ${t.adaptability.verticals
            .map(
              (v) => `
            <article class="vert-card">
              <div class="vert-period">${esc(v.period)}</div>
              <div class="vert-title">${esc(v.title)}</div>
              <p class="vert-desc">${esc(v.desc)}</p>
            </article>`
            )
            .join('')}
        </div>

        <div class="cn-portfolio-note">
          <span>${esc(t.adaptability.cnNote)}</span>
          <a class="btn-secondary" href="${esc(t.adaptability.cnUrl)}" target="_blank" rel="noopener">
            ${esc(t.adaptability.cnBtn)}
          </a>
        </div>
      </section>

      <!-- FOOTER CTA -->
      <section class="footer-cta">
        <div>
          <h2>${esc(t.footer.title)}</h2>
          <p>${esc(t.footer.sub)}</p>
        </div>
        <div class="hero-actions">
          <a class="btn-primary" href="${esc(aiTargetUrl)}">${esc(t.footer.btnAi)}</a>
          <button id="btn-copy-email" type="button" class="btn-secondary">${esc(t.footer.btnEmail)}</button>
          <a class="btn-secondary" href="https://github.com/qy70" target="_blank" rel="noopener">${esc(t.footer.btnGithub)}</a>
        </div>
      </section>
    `;

    // Bind dynamic events
    document.querySelectorAll('[data-thesis-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.thesisTab = btn.dataset.thesisTab;
        render();
      });
    });

    document.querySelectorAll('[data-shot-src]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lb = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');
        const cap = document.getElementById('lightbox-cap');
        img.src = btn.dataset.shotSrc;
        img.alt = btn.dataset.shotCap || '';
        cap.textContent = btn.dataset.shotCap || '';
        lb.classList.remove('hidden');
      });
    });

    const copyBtn = document.getElementById('btn-copy-email');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText('qy20040625@gmail.com');
        } catch {}
        showToast(t.copiedEmail);
      });
    }
  }

  // Global static listeners
  document.getElementById('btn-lang')?.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'zh' : 'en';
    try {
      localStorage.setItem('qianyu_lang', state.lang);
      localStorage.setItem('qianyu_ai_portfolio_lang', state.lang);
    } catch {}
    render();
  });

  document.getElementById('btn-theme')?.addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('qianyu_ai_portfolio_theme', state.theme); } catch {}
    render();
  });

  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-close')?.addEventListener('click', () => lb?.classList.add('hidden'));
  lb?.addEventListener('click', (e) => {
    if (e.target === lb) lb.classList.add('hidden');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') lb?.classList.add('hidden');
  });

  render();
})();
