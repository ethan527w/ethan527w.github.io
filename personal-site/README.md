# Ethan Wu — Personal Website

以硬件、FPGA 与系统工程为主线的个人网站。10 个独立页面和自定义 404；普通链接直接导航，无需 SPA 路由或服务器端渲染。

## 本地运行

需要 Node.js 20+ 和 Python 3。没有 npm 依赖，不需要安装步骤。

```sh
npm run build
npm run check
npm run dev
```

打开 http://127.0.0.1:4173 。修改后重新 build 并刷新。

## 内容维护

- `site/content.mjs`：个人信息、项目、研究条目。
- `scripts/build.mjs`：页面结构和页面正文。
- `site/assets/style.css`：视觉和响应式设计。
- `site/assets/app.js`：筛选、页面搜索、信号交互、时钟实验、复制邮箱、减少动效。
- `dist/`：生成的静态网站。

内容依据 2026-10-21 读取的旧 Google Sites 网站和公开 GitHub README 整理。当前身份、经历、论文元数据和新项目应根据用户补充的公开画像再更新。FOG 仓库与旧站的 Duke 年份不一致，页面没有断言该会议年份。MOSAIC 的 320 ns 明确限定为内部处理时间，不作为端到端指标。原仓库的旧模板和历史无需删除。

## GitHub Pages

目标仓库：`ethan527w/ethan527w.github.io`。工作流只打包 `dist`，不会把旧 Academic Pages 模板或本地个人文档发布出去。

1. 将本站源码放在该仓库的 `personal-site/` 下；工作流放在仓库根目录 `.github/workflows/personal-site.yml`。已提交的分支采用这一结构，不覆盖旧模板。
2. 在仓库 Settings → Pages → Build and deployment 中，将 Source 设为 GitHub Actions。
3. `Deploy personal website` 工作流运行后，网站地址为 https://ethan527w.github.io/ 。

工作流支持手动触发。若仓库未启用 Pages，需先完成上述配置。PR 会检查构建和内部链接，但只在默认分支部署。

站点无追踪脚本。Google Fonts 为可选样式资源，无法加载时使用本地字体。时钟实验为教学模型，电路图为示意图。遵循 `prefers-reduced-motion`，页脚也可关闭动效。
