import './styles.css';

type Project = {
  title: string;
  category: string;
  summary: string;
  metrics: string;
  stack: string[];
  url: string;
};

const site = {
  name: 'Tu Nombre',
  headline: 'Frontend Engineer · Product-minded',
  intro:
    'Construyo productos digitales de alto impacto combinando ingeniería sólida, diseño cuidado y foco absoluto en resultados de negocio.',
  availability: 'Abierto a oportunidades remotas',
  location: 'Madrid · Remoto',
  email: 'hola@tu-dominio.dev'
const profile = {
  name: 'Tu Nombre',
  title: 'Ingeniero/a de Software Frontend',
  location: 'Remoto · LATAM / Europa',
  email: 'hola@tu-dominio.dev',
  availability: 'Disponible para oportunidades senior'
};

const links = {
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://www.linkedin.com/in/tu-usuario/',
  cv: '/cv.pdf',
  email: `mailto:${site.email}`
  email: `mailto:${profile.email}`
};

const projects: Project[] = [
  {
    title: 'Growth Dashboard OS',
    category: 'B2B SaaS',
    summary: 'Sistema analítico para equipos de marketing con módulos de cohortes, funnels y forecast en tiempo real.',
    metrics: '−37% en tiempo de análisis y +22% adopción interna',
    stack: ['React', 'TypeScript', 'TanStack Query', 'Vite'],
    url: 'https://github.com/tu-usuario/proyecto-1'
  },
  {
    title: 'Checkout Optimization Suite',
    category: 'E-commerce',
    summary: 'Rediseño completo del checkout mobile-first con experimentación A/B y observabilidad de fricción por paso.',
    metrics: '+11.4% conversión y −28% abandono de carrito',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Playwright'],
    url: 'https://github.com/tu-usuario/proyecto-2'
  },
  {
    title: 'Developer Platform Portal',
    category: 'Fintech',
    summary: 'Portal de autoservicio para clientes enterprise con onboarding técnico guiado, documentación viva y APIs sandbox.',
    metrics: 'Onboarding técnico 2.4x más rápido',
    stack: ['React', 'OpenAPI', 'Design System', 'CI/CD'],
    name: 'Platform Analytics Suite',
    role: 'Lead Frontend Engineer',
    impact: 'Rediseñé el panel y reduje 43% el time-to-insight con visualizaciones interactivas y arquitectura modular.',
    stack: ['TypeScript', 'React', 'D3', 'Vite'],
    url: 'https://github.com/tu-usuario/proyecto-1'
  },
  {
    name: 'Fintech API Gateway',
    role: 'Full-Stack Developer',
    impact: 'Construí APIs seguras y observables que soportan +1M requests/mes con SLA del 99.95%.',
    stack: ['Node.js', 'PostgreSQL', 'OpenAPI', 'Jest'],
    url: 'https://github.com/tu-usuario/proyecto-2'
  },
  {
    name: 'E-commerce Performance Revamp',
    role: 'Frontend Architect',
    impact: 'Mejoré Core Web Vitals (LCP -38%) y elevé la conversión en mobile mediante optimización avanzada.',
    stack: ['Next.js', 'TypeScript', 'Cypress', 'CI/CD'],
    url: 'https://github.com/tu-usuario/proyecto-3'
  }
];

const services = [
  'Diseño y arquitectura frontend de escala.',
  'Optimización de performance (Core Web Vitals y UX).',
  'Sistemas de diseño y estandarización UI.',
  'Integración frontend-backend con APIs robustas.'
const strengths = [
  'Arquitectura frontend escalable y mantenible',
  'UX de alto nivel con foco en accesibilidad (WCAG)',
  'Performance engineering y métricas de negocio',
  'Colaboración cross-funcional con producto y diseño'
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) throw new Error('No se encontró #app en el documento.');

app.innerHTML = `
  <main class="site">
    <header class="topbar">
      <p class="brand">${site.name}</p>
      <nav aria-label="Navegación principal">
        <a href="#proyectos">Proyectos</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>

    <section class="hero">
      <p class="pill">${site.availability}</p>
      <h1>${site.headline}</h1>
      <p>${site.intro}</p>
      <div class="hero-actions">
        <a class="button button--solid" href="${links.cv}" target="_blank" rel="noopener noreferrer">Ver CV</a>
        <a class="button" href="${links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a class="button" href="${links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
  <div class="bg-grid" aria-hidden="true"></div>
  <main class="portfolio">
    <section class="hero panel">
      <div class="hero__content">
        <p class="kicker">${profile.availability}</p>
        <h1>${profile.name}</h1>
        <p class="role">${profile.title}</p>
        <p class="summary">
          Diseño y desarrollo experiencias digitales premium: interfaces robustas,
          rápidas y hermosas que conectan producto, negocio y tecnología.
        </p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="${links.cv}" target="_blank" rel="noopener noreferrer">Ver CV</a>
          <a class="btn" href="${links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="btn" href="${links.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <aside class="hero__meta" aria-label="Información de contacto">
        <h2>Contacto</h2>
        <ul>
          <li><span>Ubicación</span><strong>${profile.location}</strong></li>
          <li><span>Email</span><a href="${links.email}">${profile.email}</a></li>
          <li><span>CV</span><a href="${links.cv}" download>Descargar PDF</a></li>
        </ul>
      </aside>
    </section>

    <section class="kpis">
      <article><h2>+30</h2><p>proyectos entregados</p></article>
      <article><h2>99.95%</h2><p>uptime en sistemas críticos</p></article>
      <article><h2>−40%</h2><p>mejora promedio en tiempos de carga</p></article>
    </section>

    <section id="proyectos" class="block">
      <div class="block-head">
        <h2>Casos destacados</h2>
        <a href="${links.github}" target="_blank" rel="noopener noreferrer">Ver repositorios ↗</a>
      </div>
      <div class="cards">
        ${projects
          .map(
            (p) => `
          <article class="card">
            <p class="eyebrow">${p.category}</p>
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
            <p class="metric">${p.metrics}</p>
            <ul>${p.stack.map((t) => `<li>${t}</li>`).join('')}</ul>
            <a href="${p.url}" target="_blank" rel="noopener noreferrer">Explorar proyecto ↗</a>
          </article>`
          )
          .join('')}
      </div>
    </section>

    <section id="servicios" class="block services">
      <h2>Cómo puedo ayudarte</h2>
      <ul>
        ${services.map((s) => `<li>${s}</li>`).join('')}
      </ul>
    <section class="panel section">
      <div class="section__header">
        <h2>Fortalezas clave</h2>
      </div>
      <ul class="strengths">
        ${strengths.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </section>

    <section class="panel section">
      <div class="section__header">
        <h2>Proyectos destacados</h2>
        <a href="${links.github}" target="_blank" rel="noopener noreferrer">Ver todos ↗</a>
      </div>
      <div class="projects-grid">
        ${projects
          .map(
            (project) => `
          <article class="project-card">
            <p class="project-role">${project.role}</p>
            <h3>${project.name}</h3>
            <p>${project.impact}</p>
            <ul class="tags">
              ${project.stack.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">Repositorio ↗</a>
          </article>
        `
          )
          .join('')}
      </div>
    </section>

    <footer id="contacto" class="footer">
      <p><strong>${site.name}</strong> · ${site.location}</p>
      <a href="${links.email}">${site.email}</a>
    </footer>
  </main>
`;
