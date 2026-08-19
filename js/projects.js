const projects = [
  {
    id: "distributed-fs",
    group: "core",
    title: "Multi-threaded Distributed File Service",
    image: "assets/img/os_system.webp",
    altText: "Distributed file service architecture",
    tags: ["C++", "Concurrency", "Distributed Systems", "REST"],
    description: `
      <p>C++ file service for concurrent reads and writes across clients.</p>
      <ul>
        <li>HTTP/REST handlers for GET, PUT, and DELETE on files and directories.</li>
        <li>Thread pool with FIFO scheduling, mutexes, and condition variables.</li>
        <li>Disk updates kept consistent with transactional begin / rollback / commit.</li>
      </ul>
    `,
    githubLink: "https://github.com/ctrterry/Multi-Thread-Concurrency-Control",
  },
  {
    id: "lstore-db",
    group: "core",
    title: "L-Store Concurrent Database",
    image: "assets/img/database.webp",
    altText: "L-Store database architecture",
    tags: ["Databases", "Concurrency", "C++"],
    description: `
      <p>In-memory L-Store with base/tail pages and SQL-like operations.</p>
      <ul>
        <li>INSERT, SELECT, UPDATE, and DELETE on a page-oriented layout.</li>
        <li>Thread pool so transactional (OLTP) and analytical (OLAP) queries can overlap.</li>
        <li>Metadata ranges for concurrent access to base and tail pages.</li>
      </ul>
    `,
    githubLink: "https://github.com/ctrterry/Durable-LStore-Database",
  },
  {
    id: "web-oauth-blog",
    group: "core",
    title: "Blogging Platform with Google OAuth",
    image: "",
    altText: "",
    tags: ["Node.js", "Express", "SQLite", "OAuth"],
    description: `
      <p>Full-stack app for posts and profiles, with login and persistent storage.</p>
      <ul>
        <li>Node.js, Express, SQLite, and Handlebars.</li>
        <li>Google OAuth 2.0 via Passport.js for login and sessions.</li>
        <li>CRUD APIs and third-party fetches rendered in the UI.</li>
      </ul>
    `,
    githubLink: "https://github.com/ctrterry/get-and-post",
  },
  {
    id: "networking-systems",
    group: "core",
    title: "Networking Systems",
    image: "",
    altText: "",
    tags: ["Python", "Sockets", "TCP/UDP", "DNS"],
    description: `
      <p>Protocol-level programs: measurement, proxying, and name resolution.</p>
      <ul>
        <li>UDP client-server (iPerf-style) to measure throughput.</li>
        <li>TCP proxy with JSON forwarding and IP blocking.</li>
        <li>DNS client that builds queries, parses responses, and records RTT.</li>
        <li>Congestion-control variants (stop-and-wait, sliding window, TCP Reno) and BGP path analysis.</li>
      </ul>
    `,
    githubLink: "https://github.com/ctrterry/Networking-System",
  },
  {
    id: "canvas-system",
    group: "core",
    title: "Canvas System Refactor",
    image: "",
    altText: "",
    tags: ["C++", "Architecture"],
    description: `
      <p>Rebuilt part of a C++ canvas framework into clearer modules.</p>
      <ul>
        <li>Split rendering, input handling, and object management.</li>
        <li>Reduced coupling so features could be added without rewriting the core.</li>
      </ul>
    `,
    githubLink: "https://github.com/ctrterry/MyCanvas-System/tree/main#readme",
  },
  {
    id: "cpu-cache",
    group: "more",
    title: "CPU and Cache Design",
    image: "assets/img/Cache.webp",
    altText: "CPU and cache architecture diagram",
    tags: ["Computer Architecture", "Digital Design"],
    description: `
      <p>Course lab: pipelined CPU and cache, simulated in logic.</p>
      <ul>
        <li>5-stage pipeline with hazard detection.</li>
        <li>Set-associative cache with write-back, valid/dirty bits, and tags.</li>
      </ul>
    `,
    githubLink: "https://github.com/ctrterry/Computer-Architecture",
  },
  {
    id: "deep-learning-course-project",
    group: "more",
    title: "Neural Nets in PyTorch",
    image: "assets/img/CNN_result.webp",
    altText: "Deep learning experiment overview",
    tags: ["PyTorch", "CNN", "GCN"],
    description: `
      <p>Course implementations across MLP, CNN, RNN, GCN, transformers, and GANs.</p>
      <ul>
        <li>Node classification on Cora, Pubmed, and Citeseer with GCNs.</li>
        <li>Related papers:
          <a href="https://arxiv.org/abs/1609.02907" target="_blank" rel="noopener">GCN</a>,
          <a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener">Transformer</a>,
          <a href="https://arxiv.org/abs/1406.2661" target="_blank" rel="noopener">GAN</a>.
        </li>
      </ul>
    `,
    githubLink: "https://github.com/ctrterry/GCN_Model",
  },
  {
    id: "machine-learning-course",
    group: "more",
    title: "Classic ML Models in Python",
    image: "assets/img/ml-course.webp",
    altText: "Machine learning concepts",
    tags: ["Python", "scikit-learn"],
    description: `
      <p>Course implementations: regression, classification, clustering, PCA, and evaluation (cross-validation, precision, recall, F1).</p>
    `,
    githubLink: "",
  },
  {
    id: "imdb-research",
    group: "more",
    title: "IMDB Dataset Analysis",
    image: "assets/img/research-paper.webp",
    altText: "IMDB analysis paper cover",
    tags: ["Data Analysis", "Python"],
    description: `
      <p>Course write-up analyzing IMDB movie data and fitting simple success-prediction models.</p>
    `,
    githubLink: "assets/research/IMDB_Research_paper.pdf",
    isResearch: true,
  },
  {
    id: "ai-uninformed-search",
    group: "more",
    title: "Uninformed Search Puzzles",
    image: "assets/img/AI_img.webp",
    altText: "Search algorithms illustration",
    tags: ["Python", "BFS", "DFS"],
    description: `
      <p>Course puzzles: N-Queens with DFS, Lights Out with BFS, and linear disk movement.</p>
    `,
    githubLink: "",
  },
];

function createTagsHTML(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("\n");
}

function renderProject(project) {
  const linkText = project.isResearch ? "View write-up" : "View source";
  const linkClass = project.isResearch ? "project-link research-link" : "project-link";
  const image = project.image
    ? `<img src="${project.image}" alt="${project.altText || ""}" loading="lazy">`
    : "";
  const link = project.githubLink
    ? `<a href="${project.githubLink}" target="_blank" rel="noopener" class="${linkClass}">${linkText}</a>`
    : "";

  return `
    <article class="project-card" id="${project.id}">
      ${image}
      <div class="project-details">
        <h2>${project.title}</h2>
        <div class="project-tags">
          ${createTagsHTML(project.tags)}
        </div>
        <div>${project.description}</div>
        ${link}
      </div>
    </article>
  `;
}

function renderGroup(title, items) {
  if (!items.length) return "";
  return `
    <div class="projects-group">
      <h2 class="projects-group-title">${title}</h2>
      ${items.map((project) => renderProject(project)).join("\n")}
    </div>
  `;
}

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

function renderProjects() {
  const projectsContainer = document.querySelector(".projects-container");
  if (!projectsContainer) return;

  const core = projects.filter((project) => project.group === "core");
  const more = projects.filter((project) => project.group !== "core");

  projectsContainer.innerHTML =
    renderGroup("Software I want evaluated", core) +
    renderGroup("Other coursework", more);

  requestAnimationFrame(scrollToHash);
}

document.addEventListener("DOMContentLoaded", renderProjects);
window.addEventListener("hashchange", scrollToHash);
