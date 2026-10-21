# Ethan Wu — Personal Website

以 FPGA、数字系统与机器人研究为主线的个人网站。12 个独立页面和自定义 404；普通链接直接导航，无需 SPA 路由或服务器端渲染。

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
- `site/pages.mjs`：首页、研究、论文、关于和当前工作的内容与结构。
- `scripts/build.mjs`：页面结构和页面正文。
- `site/assets/style.css`：视觉和响应式设计。
- `site/assets/app.js`：项目筛选、时钟实验与复制邮箱。
- `dist/`：生成的静态网站。

内容依据 2026-10-21 用户补充的公开画像、旧网站、GitHub README、DMD 会议官网及 NERC 摘要整理。明确为 Incoming EE、Spring 2027 入学；论文使用 Yichen Wu 署名。DMD 2026 与 NERC 2025 分别列出，SSRN 标为综述预印本。MOSAIC 的 320 ns 限定为仓库记录的核心内部处理时间，测试与时序结果没有在网站更新时独立复跑。UDP 数据路径属于架构设计；FPGA 学习实验不作为完成的独立工程成果。

尚待用户确认的正式实验室职位、精确科研日期、毕业年份口径、荣誉证明及 CV 文件不作额外断言。当前科研职责根据用户提供的画像概括，未扩展为独立完成全部模型或硬件模块的主张。

## GitHub Pages

目标仓库：`ethan527w/ethan527w.github.io`。工作流只打包 `dist`，不会把旧 Academic Pages 模板或本地个人文档发布出去。

1. 将本站源码放在该仓库的 `personal-site/` 下；工作流放在仓库根目录 `.github/workflows/personal-site.yml`。已提交的分支采用这一结构，不覆盖旧模板。
2. 在仓库 Settings → Pages → Build and deployment 中，将 Source 设为 GitHub Actions。
3. `Deploy personal website` 工作流运行后，网站地址为 https://ethan527w.github.io/ 。

工作流支持手动触发。若仓库未启用 Pages，需先完成上述配置。PR 会检查构建和内部链接，但只在默认分支部署。

站点使用系统字体，无外部字体、追踪脚本或装饰动画。首页采用格言、简介与两个重点条目的简洁布局；研究背景、论文和当前工作保留在独立页面。实验页的时钟计算属于教学功能，按输入即时更新，无持续动画。
