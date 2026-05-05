(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const o={github:"https://github.com/tu-usuario",linkedin:"https://www.linkedin.com/in/tu-usuario/",cv:"/cv.pdf"},l=[{name:"Proyecto 1",description:"Aplicación web full-stack con autenticación y dashboard.",url:"https://github.com/tu-usuario/proyecto-1"},{name:"Proyecto 2",description:"API REST en Node.js con tests y documentación OpenAPI.",url:"https://github.com/tu-usuario/proyecto-2"},{name:"Proyecto 3",description:"Landing moderna enfocada en performance y SEO técnico.",url:"https://github.com/tu-usuario/proyecto-3"}],c=document.querySelector("#app");if(!c)throw new Error("No se encontró #app en el documento.");c.innerHTML=`
  <main class="layout">
    <section class="hero card">
      <p class="badge">Disponible para oportunidades</p>
      <h1>Hola, soy <span>Tu Nombre</span></h1>
      <p class="lead">
        Desarrollador/a de software centrado/a en crear productos rápidos,
        accesibles y con excelente experiencia de usuario.
      </p>
      <div class="cta-group">
        <a class="btn primary" href="${o.cv}" target="_blank" rel="noopener noreferrer">Ver CV</a>
        <a class="btn" href="${o.cv}" download>Descargar CV</a>
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
        <a href="${o.github}" target="_blank" rel="noopener noreferrer">Ver GitHub ↗</a>
      </div>
      <ul>
        ${l.map(t=>`
          <li>
            <h3>${t.name}</h3>
            <p>${t.description}</p>
            <a href="${t.url}" target="_blank" rel="noopener noreferrer">Repositorio ↗</a>
          </li>
        `).join("")}
      </ul>
    </section>

    <section class="contact card">
      <h2>Contacto</h2>
      <div class="social-links">
        <a href="${o.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="${o.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </section>
  </main>
`;
