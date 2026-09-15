const projects = [
  {
    id: "deep-learning-course-project",
    group: "core",
    title: "Neural Networks in PyTorch",
    image: "assets/img/CNN_result.webp",
    imageWidth: 1400,
    imageHeight: 898,
    altText: "Deep learning experiment overview",
    tags: ["PyTorch", "CNN", "GCN"],
    description: `
      <p>Implemented and studied neural network architectures across vision, sequences, graphs, and generative modeling.</p>
      <ul>
        <li>Applied graph convolutional networks to node classification on Cora, Pubmed, and Citeseer.</li>
        <li>Built course implementations spanning MLPs, CNNs, RNNs, GCNs, transformers, and GANs.</li>
        <li>Connected each implementation to its underlying research paper and learning objective.</li>
      </ul>
    `,
    evidence: "Source implementation with node-classification work on Cora, Pubmed, and Citeseer.",
    githubLink: "https://github.com/ctrterry/GCN_Model",
  },
  {
    id: "distributed-fs",
    group: "core",
    title: "Multi-threaded Distributed File Service",
    image: "assets/img/os_system.webp",
    imageWidth: 798,
    imageHeight: 415,
    altText: "Distributed file service architecture",
    tags: ["C++", "Concurrency", "Distributed Systems", "REST"],
    description: `
      <p>Designed a C++ file service for consistent file and directory operations across concurrent clients.</p>
      <ul>
        <li>Exposed GET, PUT, and DELETE operations through HTTP/REST handlers.</li>
        <li>Coordinated requests with a FIFO thread pool, mutexes, and condition variables.</li>
        <li>Protected disk updates with transactional begin, rollback, and commit behavior.</li>
      </ul>
    `,
    evidence: "Source implementation covering REST operations, synchronization, and transactional disk updates.",
    githubLink: "https://github.com/ctrterry/Multi-Thread-Concurrency-Control",
  },
  {
    id: "lstore-db",
    group: "core",
    title: "L-Store Concurrent Database",
    image: "assets/img/database.webp",
    imageWidth: 1400,
    imageHeight: 843,
    altText: "L-Store database architecture",
    tags: ["Databases", "Concurrency", "C++"],
    description: `
      <p>Built an in-memory L-Store database for concurrent transactional and analytical workloads.</p>
      <ul>
        <li>Implemented INSERT, SELECT, UPDATE, and DELETE on a base-and-tail page layout.</li>
        <li>Used a synchronized thread pool so OLTP and OLAP queries could overlap safely.</li>
        <li>Organized page metadata and ranges for concurrent access and updates.</li>
      </ul>
    `,
    evidence: "Source implementation of the page layout, CRUD operations, and concurrent query execution.",
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
      <p>Built a full-stack publishing application with authenticated users and persistent content.</p>
      <ul>
        <li>Implemented the server and UI with Node.js, Express, SQLite, and Handlebars.</li>
        <li>Integrated Google OAuth 2.0 through Passport.js for login and sessions.</li>
        <li>Exposed CRUD APIs for posts and profiles and rendered third-party data in the UI.</li>
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
    imageWidth: 1306,
    imageHeight: 1050,
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
    id: "machine-learning-course",
    group: "more",
    title: "Classic ML Models in Python",
    image: "assets/img/ml-course.webp",
    imageWidth: 1400,
    imageHeight: 784,
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
    imageWidth: 1400,
    imageHeight: 918,
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
    imageWidth: 1400,
    imageHeight: 726,
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
    ? `<img src="${project.image}" alt="${project.altText || ""}" width="${project.imageWidth}" height="${project.imageHeight}" loading="lazy" decoding="async">`
    : "";
  const link = project.githubLink
    ? `<a href="${project.githubLink}" target="_blank" rel="noopener" class="${linkClass}" aria-label="${linkText} for ${project.title}, opens in a new tab">${linkText}</a>`
    : "";
  const evidence = project.evidence
    ? `<p class="project-evidence"><strong>Evidence:</strong> ${project.evidence}</p>`
    : "";

  return `
    <article class="project-card${project.image ? "" : " project-card--text"}" id="${project.id}">
      ${image}
      <div class="project-details">
        <h3>${project.title}</h3>
        <div class="project-tags">
          ${createTagsHTML(project.tags)}
        </div>
        <div>${project.description}</div>
        ${evidence}
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
    renderGroup("Selected projects", core) +
    renderGroup("Other coursework", more);

  requestAnimationFrame(scrollToHash);
}

document.addEventListener("DOMContentLoaded", renderProjects);
window.addEventListener("hashchange", scrollToHash);
