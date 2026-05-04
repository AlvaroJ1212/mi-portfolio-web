import './styles.css';

const links = {
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://www.linkedin.com/in/tu-usuario/',
  cv: '/cv.pdf'
};

const projects = [
  {
    name: 'Proyecto 1',
    description: 'Aplicación web full-stack con autenticación y dashboard.',
    url: 'https://github.com/tu-usuario/proyecto-1'
  },
  {
    name: 'Proyecto 2',
    description: 'API REST en Node.js con tests y documentación OpenAPI.',
    url: 'https://github.com/tu-usuario/proyecto-2'
  },
  {
    name: 'Proyecto 3',
    description: 'Landing moderna enfocada en performance y SEO técnico.',
    url: 'https://github.com/tu-usuario/proyecto-3'
  }
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('No se encontró #app en el documento.');
}

app.innerHTML = `
  <main class="layout">
    <section class="hero card">
      <p class="badge">Disponible para oportunidades</p>
      <h1>Hola, soy <span>Tu Nombre</span></h1>
      <p class="lead">
        Desarrollador/a de software centrado/a en crear productos rápidos,
        accesibles y con excelente experiencia de usuario.
      </p>
      <div class="cta-group">
        <a class="btn primary" href="${links.cv}" target="_blank" rel="noopener noreferrer">Ver CV</a>
        <a class="btn" href="${links.cv}" download>Descargar CV</a>
      </div>
    </section>

    <section class="about card">
      <h2>Sobre mí</h2>
      <p>
        Me especializo en TypeScript, React y arquitectura frontend escalable.
        Disfruto convertir ideas en interfaces elegantes y mantenibles, cuidando
        performance, calidad de código y detalle visual.
      </p>
    </section>

    <section class="projects card">
      <div class="section-head">
        <h2>Proyectos</h2>
        <a href="${links.github}" target="_blank" rel="noopener noreferrer">Ver GitHub ↗</a>
      </div>
      <ul>
        ${projects
          .map(
            (project) => `
          <li>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">Repositorio ↗</a>
          </li>
        `
          )
          .join('')}
      </ul>
    </section>

    <section class="contact card">
      <h2>Contacto</h2>
      <div class="social-links">
        <a href="${links.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="${links.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </section>
  </main>
`;
