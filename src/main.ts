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
};

const links = {
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://www.linkedin.com/in/tu-usuario/',
  cv: '/cv.pdf',
  email: `mailto:${site.email}`
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
    url: 'https://github.com/tu-usuario/proyecto-3'
  }
];

const services = [
  'Diseño y arquitectura frontend de escala.',
  'Optimización de performance (Core Web Vitals y UX).',
  'Sistemas de diseño y estandarización UI.',
  'Integración frontend-backend con APIs robustas.'
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
      </div>
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
    </section>

    <footer id="contacto" class="footer">
      <p><strong>${site.name}</strong> · ${site.location}</p>
      <a href="${links.email}">${site.email}</a>
    </footer>
  </main>
`;
