# Lantern567 · AI 开发者作品集

中文求职作品集与个人名片，使用纯 HTML、CSS 和 JavaScript。无需安装依赖或构建。

- GitHub Pages：<https://lantern567.github.io/>
- GitHub 主页：<https://github.com/Lantern567>
- Sites：<https://lantern567-ai-portfolio.awake-tang-8435.chatgpt.site>

## 网站内容

精选项目包括论文到微信公众号草稿的 AI 工作流、Obsidian 技术日报、MAPPO VRP 开源环境扩展，以及两个 AI 基础设施相关研究计算项目。支持项目筛选、详情展开、技能证据跳转和移动端导航。

个人展示名与地点来自 GitHub 公开资料；求职方向来自用户提供的 AI 开发目标。未添加未经提供的教育经历、任职经历、邮箱或成绩指标。

MAPPO VRP 标注为开源贡献，证据为 [PR #1](https://github.com/Alto-R/MAPPO_VRP/pull/1) 和 [PR #2](https://github.com/Alto-R/MAPPO_VRP/pull/2)。其余项目链接在页面中直接指向公开仓库与实现文件。内容整理日期为 2026-10-10。

## 修改内容

- `dist/index.html`：个人介绍、名片、导航和联系方式。
- `dist/app.js`：精选项目文案、技术栈、贡献证据与筛选逻辑。
- `dist/styles.css`：页面样式与响应式布局。
- `dist/assets/`：SVG 插画与网站图标。

## 本地预览

在此目录执行 `python3 -m http.server 4173 --directory dist`，打开 <http://localhost:4173/>。

GitHub Pages 仓库使用 `dist/` 中的文件作为仓库根目录；Sites 使用 `.openai/hosting.json` 中的 `dist` 配置。
