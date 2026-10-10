'use strict';

// Project descriptions refer to public repositories; authorship and status are explicit.
const projects = [
  {
    id: 'paper', category: 'application', categoryLabel: 'AI 应用 / 工作流', role: '应用实践', featured: true,
    title: '从论文 PDF，到公众号草稿', repoName: 'Auto_paper_for_wechat',
    description: '把文档解析、AI 解读、图文排版与素材上传串成一条工作流，将论文转为带图的微信公众号草稿。',
    tags: ['n8n Agent', 'Python', 'MinerU', 'TypeScript', 'Playwright'],
    repo: 'https://github.com/Lantern567/Auto_paper_for_wechat',
    evidence: 'https://github.com/Lantern567/Auto_paper_for_wechat/blob/master/wechat_auto_paragraph.json',
    evidenceLabel: '查看工作流', visual: 'paper',
    details: [
      ['应用场景', '减少论文内容整理中反复切换解析、写作与排版工具的操作，生成可供后续编辑的图文草稿。'],
      ['实现链路', 'Python 服务提取 PDF 文本与图像；n8n AI Agent 编排内容生成；TypeScript 与 Playwright 完成 mdnice 富文本转换，再衔接微信素材和草稿接口。'],
      ['可查看的工程证据', '公开工作流 JSON、PDF 图像处理服务，以及 Markdown 到微信富文本的转换代码。'],
      ['项目边界', '工作流采用手动触发，输出为草稿。运行需要配置模型接口、微信服务和 mdnice 登录环境。']
    ]
  },
  {
    id: 'digest', category: 'application', categoryLabel: 'AI 应用 / 知识工具', role: '应用实践',
    title: '让技术信息，沉淀成每日笔记', repoName: 'obsidian-daily-digest',
    description: '采集 GitHub、YouTube 与 RSS，调用 Claude 生成摘要和评分，输出 Obsidian Markdown 日报并支持邮件发送。',
    tags: ['Python', 'Claude API', 'SQLite', 'RSS', 'Obsidian'],
    repo: 'https://github.com/Lantern567/obsidian-daily-digest',
    evidence: 'https://github.com/Lantern567/obsidian-daily-digest/blob/main/summarizer.py',
    evidenceLabel: '查看摘要实现', visual: 'digest',
    details: [
      ['应用场景', '将分散的技术信息聚合到个人知识库，形成便于阅读和后续追踪的日报。'],
      ['实现链路', '独立信源采集器连接 GitHub、YouTube 和 RSS；Claude 负责评分与摘要；结果写入 Markdown，并通过可配置调度与 SMTP 邮件输出。'],
      ['反馈机制', 'SQLite 保存历史评分，高分内容作为后续提示词的 few-shot 示例。该机制是提示词反馈，不涉及模型训练或微调。'],
      ['项目边界', '需要模型 API、本地路径与调度配置；公开仓库未提供摘要效果的量化评测。']
    ]
  },
  {
    id: 'mappo', category: 'contribution', categoryLabel: '开源协作 / 强化学习环境', role: '贡献者 · 2 项 PR 已合并',
    title: '让多智能体配送仿真接入真实路网', repoName: 'Alto-R / MAPPO_VRP',
    description: '为上游 MAPPO VRP 项目扩展 GraphHopper 路由、GeoJSON 数据加载与深圳配送场景，区分卡车路网距离和无人机直线距离。',
    tags: ['Python', 'GraphHopper', 'GeoJSON', 'NumPy', 'Simulation'],
    repo: 'https://github.com/Alto-R/MAPPO_VRP',
    evidence: 'https://github.com/Alto-R/MAPPO_VRP/pull/2',
    evidenceLabel: '已合并 PR #2', otherEvidence: 'https://github.com/Alto-R/MAPPO_VRP/pull/1', visual: 'learning',
    details: [
      ['参与方式', '作为开源贡献者提交两项已合并 PR：路由服务集成，以及地理配送场景与环境扩展。'],
      ['具体贡献', '实现 GraphHopper Python 客户端、GeoJSON 数据加载与坐标转换；加入深圳配送仿真、卡车与无人机的不同距离计算模式，以及路由距离缓存。'],
      ['协作证据', 'PR #1 和 #2 的提交者均为 Lantern567，已合并至 Alto-R/MAPPO_VRP 上游仓库。'],
      ['贡献边界', '贡献集中在路由、数据和仿真环境扩展，不是原创 MAPPO 算法；真实地理输入用于仿真，未提供训练效果或商业部署指标。']
    ]
  },
  {
    id: 'token', category: 'research', categoryLabel: '研究计算 / AI 基础设施', role: '研究代码',
    title: '清洁电力与 AI 计算的交点', repoName: 'export-the-watt-as-token',
    description: '围绕清洁能源与 AI 推理需求，分析成本、小时级供需匹配和芯片约束，探索不同能源利用路径。',
    tags: ['Python', 'pandas', 'SciPy / HiGHS', 'Matplotlib'],
    repo: 'https://github.com/Lantern567/export-the-watt-as-token',
    evidence: 'https://github.com/Lantern567/export-the-watt-as-token/blob/master/analysis/temporal_matching.py',
    evidenceLabel: '查看时序模型', visual: 'token',
    details: [
      ['研究问题', '在远程清洁能源与 AI 推理需求之间，比较电力输出和计算服务等利用路径。'],
      ['实现链路', '分模块计算项目组合、需求情景、生命周期成本、小时匹配与 GPU 约束；以结构化参数和结果生成研究图表。'],
      ['可查看的工程证据', '方法说明、时间匹配代码与 SciPy / HiGHS 平均日线性规划基准，以及图表生成脚本。'],
      ['项目边界', '未发表的工作稿。结果属于模型情景；LP 基准含完美预知和理想储能假设。']
    ]
  },
  {
    id: 'cfe', category: 'research', categoryLabel: '研究计算 / 数据验证', role: '研究代码',
    title: '数据中心的小时级无碳电力规划', repoName: 'climate-data-center-24x7-cfe',
    description: '计算气候敏感的数据中心需求与风光供需匹配，配套派生结果、文件哈希清单和数值一致性验证。',
    tags: ['Python', 'NumPy', 'SciPy', 'C++', 'SHA-256'],
    repo: 'https://github.com/Lantern567/climate-data-center-24x7-cfe',
    evidence: 'https://github.com/Lantern567/climate-data-center-24x7-cfe/blob/main/scripts/verify_release.py',
    evidenceLabel: '查看验证器', visual: 'cfe',
    details: [
      ['研究问题', '在气候变化和技术学习情景下，分析数据中心需求与无碳电力容量规划。'],
      ['实现链路', 'Python 处理需求、供需匹配、影响分解与派生表；容量规划包含 C++ 计算核。'],
      ['验证方法', '发布验证器检查 SHA-256 文件哈希、分解可加性、成本与预算恒等式，以及规划聚合一致性。'],
      ['项目边界', '公开的是派生表与研究代码，不含全部小时数组和第三方原始输入。聚合验证不等于重跑完整气候模拟。']
    ]
  }
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const arrow = '<span aria-hidden="true">↗</span>';
const flow = nodes => `<div class="flow">${nodes.map((node, index) => `${index ? '<span class="flow-arrow" aria-hidden="true">→</span>' : ''}<div class="flow-node${index === 1 ? ' main' : ''}">${escapeHtml(node)}</div>`).join('')}</div>`;

function cover(project, index) {
  let content;
  if (project.visual === 'paper') content = `<div class="schematic"><div class="project-logo">PDF → DRAFT</div>${flow(['论文 PDF', 'AI Agent', '图文草稿'])}<p class="flow-caption">PARSE → GENERATE → FORMAT → DRAFT</p></div>`;
  else if (project.visual === 'digest') content = `<div class="schematic"><div class="project-logo">{ daily.digest }</div>${flow(['多源采集', 'Claude', 'Markdown'])}<p class="flow-caption">GITHUB / YOUTUBE / RSS → OBSIDIAN</p></div>`;
  else if (project.visual === 'token') content = `<div class="schematic"><div class="project-logo">kWh → token</div>${flow(['清洁能源', '时序匹配', '推理需求'])}<p class="flow-caption">SCENARIOS · COST · CONSTRAINTS</p></div>`;
  else if (project.visual === 'learning') content = `<div class="learning-banner"><div class="project-logo">MAPPO × VRP</div>${flow(['真实路网', '配送环境', '多智能体'])}<p class="flow-caption">OPEN-SOURCE CONTRIBUTION</p></div>`;
  else content = `<div class="schematic"><div class="project-logo">24 × 7 CFE</div>${flow(['气候需求', '容量规划', '结果验证'])}<p class="flow-caption">DATA → COMPUTE → VERIFY</p></div>`;
  return `<div class="project-cover" aria-label="${escapeHtml(project.title)}实现链路示意"><span class="cover-label mono">WORKFLOW / SCHEMATIC</span>${content}<span class="cover-number">${String(index + 1).padStart(2, '0')} / PUBLIC CODE</span></div>`;
}

const grid = document.getElementById('project-grid');
grid.innerHTML = projects.map((project, index) => `<article class="project${project.featured ? ' featured' : ''}" id="project-${project.id}" data-category="${project.category}" aria-labelledby="title-${project.id}">
  ${cover(project, index)}
  <div class="project-body"><div class="project-topline"><span class="project-category">${escapeHtml(project.categoryLabel)}</span><span class="project-role">${escapeHtml(project.role)}</span></div>
  <h3 id="title-${project.id}">${escapeHtml(project.title)}</h3><p class="project-description">${escapeHtml(project.description)}</p>
  <div class="tags" aria-label="项目技术栈">${project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div><div class="project-repo mono">${escapeHtml(project.repoName)}</div>
  <details><summary>项目拆解与工程证据</summary><div class="case-study"><dl>${project.details.map(([title, content]) => `<dt>${escapeHtml(title)}</dt><dd>${escapeHtml(content)}</dd>`).join('')}</dl></div></details>
  <div class="project-links"><a href="${escapeHtml(project.repo)}" target="_blank" rel="noopener noreferrer" aria-label="查看${escapeHtml(project.title)}的代码仓库">代码仓库 ${arrow}</a><a href="${escapeHtml(project.evidence)}" target="_blank" rel="noopener noreferrer">${escapeHtml(project.evidenceLabel)} ${arrow}</a>${project.otherEvidence ? `<a href="${escapeHtml(project.otherEvidence)}" target="_blank" rel="noopener noreferrer">PR #1 ${arrow}</a>` : ''}</div></div>
</article>`).join('');

const filterButtons = [...document.querySelectorAll('[data-filter]')];
filterButtons.find(button => button.dataset.filter === 'contribution').hidden = !projects.some(project => project.category === 'contribution');
function filterProjects(category, announce = true) {
  let count = 0;
  document.querySelectorAll('.project').forEach(project => {
    project.hidden = category !== 'all' && project.dataset.category !== category;
    if (!project.hidden) count += 1;
  });
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  if (announce) document.getElementById('project-status').textContent = `已显示 ${count} 个项目`;
}
filterButtons.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
document.querySelectorAll('a[href^="#project-"]').forEach(link => link.addEventListener('click', () => {
  filterProjects('all', false);
  const target = document.querySelector(link.getAttribute('href'));
  if (target) target.querySelector('details').open = true;
}));

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');
function closeMenu() {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '打开导航菜单');
}
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) { closeMenu(); menuToggle.focus(); }
});
document.addEventListener('click', event => { if (!event.target.closest('.nav')) closeMenu(); });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      navLinks.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    }
  }, { rootMargin: '-20% 0px -65% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
