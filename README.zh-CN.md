# ssrqy-work-portfolio（中文简介）

千羽的**中英双语 AI 系统与产品作品集**静态前端仓库，在线访问地址：**[https://ssrqy.cn/work/](https://ssrqy.cn/work/)**。

English documentation: [README.md](./README.md)

## 核心技术特性

- **零依赖纯静态站**：原生 HTML / CSS / JavaScript，无需构建工具与第三方前端框架。
- **中英双语切换（i18n）**：`site/data.js` 统一承载 `en` / `zh` 双语数据，支持 URL 参数（`?lang=en|zh`）与 `localStorage` 持久化。
- **亮 / 暗双主题**：基于 CSS 变量与 `data-theme` 切换，使用语义色区分「无状态推理引擎」与「确定性工具边界」。
- **原生内嵌 SVG 架构图**：由 `site/app.js` 动态渲染双语矢量架构图（目录驱动两阶段检索、四层外骨骼底座、确定性账本解耦边界）。
- **Lightbox 实机截图预览**：支持点击放大查看各项目实机截图与 `Esc` / 遮罩关闭。

## 本地预览与校验

使用 Python 启动本地静态服务：

```bash
python3 -m http.server -d site 8000
```

浏览器访问 `http://localhost:8000/` 即可预览。

运行零依赖校验脚本（Node.js）：

```bash
node scripts/check.mjs
```

## 目录结构

```text
.
├── site/
│   ├── index.html          # 页面入口、顶栏、Lightbox 容器
│   ├── styles.css          # 亮/暗主题变量与响应式样式
│   ├── data.js             # 中英双语文案与截图清单
│   ├── app.js              # 渲染逻辑、双语/主题切换、原生 SVG 图与交互
│   └── assets/             # 产品与工作台实机截图（.webp）
├── scripts/
│   └── check.mjs           # 零依赖校验脚本（资源存在性、data.js 解析、敏感词检查）
├── README.md
├── README.zh-CN.md
├── LICENSE
└── .gitignore
```

## 版权与开源协议

- **代码部分**：采用 [MIT License](./LICENSE) 开源（Copyright (c) 2026 Qianyu）。
- **图片与文案**：`site/assets/` 内的全部产品截图及站点文字内容版权归作者所有（**© 2026 Qianyu, All rights reserved**），不随 MIT 协议授权。
