# ssrqy-work-portfolio

Bilingual (EN / ZH) AI Systems & Product Portfolio — live at **[https://ssrqy.cn/work/](https://ssrqy.cn/work/)**.

[中文简介 (README.zh-CN.md)](./README.zh-CN.md)

## Overview

This repository contains the static frontend source for my AI Systems & Product Portfolio, presenting my compound AI engineering thesis, shipped products (**Ta / 祂** long-memory AI app, **AI Ops Workbench v1.5.0**), multi-agent context governance (`AGENTS.md`), and cross-domain execution track record.

## Technical Highlights

- **Zero-Dependency Static Site**: Pure HTML5, CSS3, and vanilla ES6+ JavaScript — zero frameworks, zero bundlers, zero runtime npm dependencies.
- **Bilingual i18n (`EN / 中文`)**: Structured `en` / `zh` content dictionary in `site/data.js` with URL query (`?lang=en|zh`), `localStorage` persistence, and automatic browser-language fallback.
- **Light / Dark Theme**: CSS custom-property token system (`[data-theme="light" | "dark"]`) with semantic boundary colors distinguishing stateless LLM reasoning from deterministic tooling.
- **Native Inline SVG Architecture Diagrams**: Dynamic, bilingual SVG diagrams rendered directly in `site/app.js` (Directory-First Two-Pass Retrieval vs. Naive Prompt Stuffing, 4-Layer Exoskeleton Architecture, and Hard Decoupling Boundary).
- **Interactive Lightbox**: Click-to-zoom screenshot gallery with keyboard (`Esc`) and backdrop dismissal.

## Local Preview & Verification

Serve `site/` locally with Python's built-in HTTP server:

```bash
python3 -m http.server -d site 8000
```

Then open `http://localhost:8000/` in your browser.

Run the zero-dependency repository check script (Node.js):

```bash
node scripts/check.mjs
```

## Directory Structure

```text
.
├── site/
│   ├── index.html          # Entry HTML, navigation bar, lightbox shell, metadata
│   ├── styles.css          # Theme tokens (light/dark), layout, responsive rules
│   ├── data.js             # Bilingual (en / zh) portfolio data & screenshot manifest
│   ├── app.js              # Renderer, i18n/theme state, inline SVG diagrams, lightbox
│   └── assets/             # Product & UI screenshots (.webp)
├── scripts/
│   └── check.mjs           # Zero-dependency check (assets, data.js parse, secret scan)
├── README.md
├── README.zh-CN.md
├── LICENSE
└── .gitignore
```

## License & Copyright

- **Code** (`index.html`, `styles.css`, `app.js`, `data.js` structure, and `scripts/check.mjs`): Licensed under the [MIT License](./LICENSE) — Copyright (c) 2026 Qianyu.
- **Media & Copy**: All screenshots in `site/assets/` and the portfolio copy/text are **© 2026 Qianyu, All rights reserved**, and are **not** covered by the MIT License.
