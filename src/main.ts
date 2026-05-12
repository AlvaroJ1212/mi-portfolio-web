import './styles.css';

type Lang = 'es' | 'en';

const data = {
  es: {
    booting: "Iniciando portfolio...",
    header: { title: "Álvaro Jesús Rodríguez Muñoz", subtitle: "Junior Platform Engineer", status: "ESTADO: BUSCANDO EMPLEO" },
    contact: { 
      email: "alvarojesus1492@gmail.com", 
      github: "AlvaroJ1212", 
      linkedin: "álvaro-jesús-r-m1212" 
    },
    about: { 
      cmd: "> SOBRE MI",
      text: "Soy Desarrollador de Software especializado en automatización e infraestructura cloud. Mi perfil combina una formación inicial en el ambito del Periodismo y de la Docencia como profesor de español con estudios técnicos en Desarrollo de Aplicaciones Multiplataforma. Durante mi etapa práctica como Junior Platform Engineer en Semantic Visions, el trabajo se centró estrictamente en la Infraestructura como Código (IaC) y la gestión de clústeres. Técnicamente, me especializo en aprovisionar entornos en Google Cloud Platform (GCP), configurar recursos mediante Terraform y administrar cargas de trabajo en Kubernetes, priorizando la automatización de pipelines y la observabilidad de los sistemas" 
    },
    terminal: { label: "Consola de Sistema" },
    skillsTitle: "Stack",
    skills: ["Kubernetes", "Terraform", "Docker", "GCP", "CI/CD", "Linux/Bash", "Python", "Java", "SQL"],
    cv: {
      title: "CV",
      experience: [
        { period: "Marzo 2026 - Junio 2026", role: "Junior Platform Engineer", company: "Semantic Visions", task: "Automatización de despliegues en AWS y gestión de clusters K8s." },
        { period: "Marzo 2025 - Junio 2025", role: "Profesor de Español", company: "Universidad Masaryk", task: "Monitoreo de sistemas críticos y optimización de logs." }
      ],
      education: [
        { year: "2024-2026", degree: "Desarrollo de Aplicaciones Multiplataforma", school: "CESUR" },
        { year: "2016-2020", degree: "Grado en Periodismo", school: "Universidad Católica San Antonio de Murcia" },
        { year: "2024-2025", degree: "Master en Enseñanza de Español como Lengua Extranjera (ELE)", school: "Universidad de Córdoba" },
        { year: "2023-2024", degree: "Master en Investigación de Medios, audiencias y práctica profesional en Europa", school: "Universidad de Málaga" },
      ]
    },
    projects: { 
      title: "Portfolio", 
      list: [
        { name: "Terraform Infrastructure", desc: "Este repositorio sirve como el proyecto raíz de Infraestructura como Código (IaC) para aprovisionar un entorno escalable, seguro y de alta disponibilidad en Google Cloud Platform (GCP)", tech: ["Terraform", "GCP"], url: "https://github.com/AlvaroJ1212/terraform-google-infrastructure" },
        { name: "LogWatch", desc: "Aplicación para centralizar, almacenar, consultar y analizar logs producidos por diferentes servicios, con generación automática de alertas al detectar patrones anómalos mediante reglas YAML configurables", tech: ["Java", "Maven", "PostgreSQL", "Docker"], url: "https://github.com/AlvaroJ1212/log-watch" },
        { name: "Pr-Review-Bot", desc: "Revisor automatizado de Pull Requests impulsado por Google Gemini. Escucha webhooks de GitHub, extrae el diff del código, lo envía a Gemini Flash para su análisis y publica la revisión automáticamente como comentario directamente en el PR", tech: ["Python", "Docker", "Terraform", "Google Gemini", "Kubernetes"], url: "https://github.com/AlvaroJ1212/pr-review-bot" },
      ] 
    }
  },
  en: {
    booting: "Initiating portfolio...",
    header: { title: "Álvaro Jesús Rodríguez Muñoz", subtitle: "Junior Platform Engineer", status: "STATUS: LOOKING FOR A JOB" },
    contact: { 
      email: "alvarojesus1492@gmail.com", 
      github: "AlvaroJ1212", 
      linkedin: "álvaro-jesús-r-m1212" 
    },
    about: { 
      cmd: "> ABOUT ME",
      text: "I am a Software Developer specializing in automation and cloud infrastructure. My profile combines an initial background in the fields of Journalism and Education as a Spanish teacher, with technical studies in Multiplatform Application Development. During my internship as a Junior Platform Engineer at Semantic Visions, the work was strictly focused on Infrastructure as Code (IaC) and cluster management. Technically, I specialize in provisioning environments on Google Cloud Platform (GCP), configuring resources using Terraform, and managing workloads in Kubernetes, prioritizing pipeline automation and system observability"
    },
    terminal: { label: "System Console" },
    skillsTitle: "Stack",
    skills: ["Kubernetes", "Terraform", "Docker", "GCP", "CI/CD", "Linux/Bash", "Python", "Java", "SQL"],
    cv: {
      title: "CV",
      experience: [
        { period: "March 2026 - June 2026", role: "Junior Platform Engineer", company: "Semantic Visions" },
        { period: "March 2025 - June 2025", role: "Teacher of Spanish", company: "Masaryk University" }
      ],
      education: [
        { year: "2024-2026", degree: "Multiplatform Application Development", school: "CESUR" },
        { year: "2016-2020", degree: "Bachelor's Degree in Journalism", school: "Catholic University San Antonio of Murcia" },
        { year: "2024-2025", degree: "Master's Degree in Teaching Spanish as a Foreign Language (ELE)", school: "University of Cordoba" },
        { year: "2023-2024", degree: "Master's Degree in Media Research, Audiences and Professional Practice in Europe", school: "University of Malaga" }
      ]
    },
    projects: { 
      title: "Portfolio", 
      list: [
        { name: "Terraform Infrastructure", desc: "This repository serves as the root Infrastructure-as-Code (IaC) project to provision a scalable, secure, and highly available environment on Google Cloud Platform (GCP).", tech: ["Terraform", "GCP"], url: "https://github.com/AlvaroJ1212/terraform-google-infrastructure" },
        { name: "LogWatch", desc: "Application to centralize, store, query, and analyze logs produced by different services, with automatic alert generation when anomalous patterns are detected using configurable YAML rules.", tech: ["Java", "Maven", "PostgreSQL", "Docker"], url: "https://github.com/AlvaroJ1212/log-watch" },
        { name: "Pr-Review-Bot", desc: "Automated Pull Request reviewer powered by Google Gemini. It listens for GitHub webhooks, downloads the PR diff, sends it to Gemini Flash for analysis, and posts the review as a comment on the PR", tech: ["Python", "Docker", "Terraform", "Google Gemini", "Kubernetes"], url: "https://github.com/AlvaroJ1212/pr-review-bot" }
      ] 
    }
  }
};

let currentLang: Lang = 'es';
let hasBooted = false;

async function typeWriterEffect(aboutCmd: string, aboutText: string, elementId: string) {
  const container = document.getElementById(elementId);
  if (!container) return;
  container.innerHTML = '';

  const writeLine = async (text: string, className: string = '', delay: number = 20) => {
    const p = document.createElement('p');
    p.className = className;
    container.appendChild(p);
    for (let char of text) {
      p.innerHTML += char;
      await new Promise(r => setTimeout(r, delay));
    }
  };

  await writeLine(aboutCmd, 'terminal-cmd', 40);
  await new Promise(r => setTimeout(r, 400));
  await writeLine(aboutText, 'terminal-about', 15);
  
  const cursor = document.createElement('p');
  cursor.className = 'cursor';
  cursor.innerText = '_';
  container.appendChild(cursor);
}

function renderMain() {
  const app = document.querySelector('#app');
  if (!app) return;
  const t = data[currentLang];

  app.innerHTML = `
    <div class="scanline"></div>
    <div class="ui-container fade-in">
      <nav class="top-nav">
        <div class="system-status"><span class="pulse"></span> ${t.header.status}</div>
        <div class="lang-toggle">
          <button id="lang-es" class="${currentLang === 'es' ? 'active' : ''}">ES</button>
          <button id="lang-en" class="${currentLang === 'en' ? 'active' : ''}">EN</button>
        </div>
      </nav>

      <div class="grid-layout">
        <aside class="panel side-panel">
          <div class="profile-frame">
            <img src="/perfil.jpg" alt="Profile" class="profile-img">
          </div>
          <h1>${t.header.title}</h1>
          <p class="tag">${t.header.subtitle}</p>
          
          <div class="user-meta">
            <p><span>ID:</span> 001-JR-PLAT</p>
            <p><span>MAIL:</span> <a href="mailto:${t.contact.email}">${t.contact.email}</a></p>
          </div>

          <hr class="cyber-line">
          
          <div class="side-skills">
            <h2>${t.skillsTitle}</h2>
            <div class="skill-list">
              ${t.skills.map(s => `<span>[${s}]</span>`).join('')}
            </div>
          </div>

          <div class="social-links">
            <a href="https://github.com/${t.contact.github}" target="_blank" class="cyber-btn">GITHUB</a>
            <a href="https://linkedin.com/in/${t.contact.linkedin}" target="_blank" class="cyber-btn">LINKEDIN</a>
            <a href="/cv.pdf" target="_blank" class="cyber-btn">DOWNLOAD CV</a>
          </div>
        </aside>

        <section class="main-content">
          <div class="panel terminal-window">
            <div class="terminal-header">${t.terminal.label}</div>
            <div class="terminal-body" id="terminal-content"></div>
          </div>

          <div class="content-row">
            <div class="panel projects-section">
              <h2 class="section-title">// ${t.projects.title}</h2>
              <div class="projects-rect-grid">
                ${t.projects.list.map(p => `
                  <article class="project-rect">
                    <div class="project-info">
                      <h3>${p.name}</h3>
                      <p>${p.desc}</p>
                      <div class="project-tags">
                        ${p.tech.map(tech => `<span>#${tech}</span>`).join('')}
                      </div>
                    </div>
                    <a href="${p.url}" target="_blank" class="project-link">CODE_ACCESS</a>
                  </article>
                `).join('')}
              </div>
            </div>

            <div class="panel cv-section">
              <h2 class="section-title">// ${t.cv.title}</h2>
              <div class="cv-body">
                <h3>EXPERIENCE_LOG</h3>
                ${t.cv.experience.map(e => `
                  <div class="cv-item">
                    <span class="cv-date">[${e.period}]</span><br>
                    <span class="cv-role">${e.role}</span> - ${e.company} 
                  </div>
                `).join('')}
                <h3>EDUCATION_LOG</h3>
                ${t.cv.education.map(ed => `
                  <div class="cv-item">
                    <span class="cv-date">[${ed.year}]</span><br>
                    <span class="cv-role">${ed.degree}</span><br>
                    <p>${ed.school}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;

  typeWriterEffect(t.about.cmd, t.about.text, 'terminal-content');

  document.querySelector('#lang-es')?.addEventListener('click', () => { currentLang = 'es'; renderMain(); });
  document.querySelector('#lang-en')?.addEventListener('click', () => { currentLang = 'en'; renderMain(); });
}

function renderBootSequence() {
  const app = document.querySelector('#app');
  if (!app) return;
  app.innerHTML = `<div class="boot-screen"><div class="boot-text"><p class="highlight">${data[currentLang].booting}</p><div class="loading-bar"><div class="loading-progress"></div></div></div></div>`;
  setTimeout(() => { hasBooted = true; renderMain(); }, 2000);
}

if (!hasBooted) renderBootSequence();
else renderMain();
