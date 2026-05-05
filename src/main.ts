import './styles.css';

type Project = {
  name: string;
  role: string;
  impact: string;
  stack: string[];
  url: string;
};

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
  email: `mailto:${profile.email}`
};

const projects: Project[] = [
  {
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

const strengths = [
  'Arquitectura frontend escalable y mantenible',
  'UX de alto nivel con foco en accesibilidad (WCAG)',
  'Performance engineering y métricas de negocio',
  'Colaboración cross-funcional con producto y diseño'
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('No se encontró #app en el documento.');
}

app.innerHTML = `
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
  </main>
`;
