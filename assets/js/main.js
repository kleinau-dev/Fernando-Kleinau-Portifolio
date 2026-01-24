/* =========================
   SCROLL REVEAL (BIDIRECTIONAL)
========================= */

const sections = document.querySelectorAll("section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  const triggerTop = window.innerHeight * 0.15;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < triggerBottom && rect.bottom > triggerTop) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);


/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".custom-cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    });

    link.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
}


/* =========================
   I18N (PT ⇄ EN)
========================= */

const translations = {
  pt: {
    hero_role: "BACK-END DEVELOPER",
    about_title: "Sobre mim",
    about_p1: "Sou Tecnólogo em Análise e Desenvolvimento de Sistemas e pós-graduando em Engenharia de Software, com trajetória sólida em suporte técnico, manutenção de sistemas e infraestrutura de TI e atuação atual em desenvolvimento back-end com foco em APIs e segurança.",
    about_p2: "Desenvolvo soluções utilizando Python e Java, com ênfase em APIs REST, autenticação JWT, integração com bancos de dados SQL e versionamento de código com Git/GitHub. Tenho experiência prática em estruturação de projetos, organização de código e aplicação de boas práticas de desenvolvimento, segurança e manutenibilidade.",
    projects_title: "Projetos",
    project_java: "Spring Boot • JWT • REST",
    project_python: "Flask • SQLite • REST",
    contact_title: "Contato",
    cv_link: "Baixar Currículo"
  },
  en: {
    hero_role: "BACK-END DEVELOPER",
    about_title: "About me",
    about_p1: "I am a Systems Analysis and Development graduate and a postgraduate student in Software Engineering, with a solid background in technical support, system maintenance and IT infrastructure, currently working in back-end development focused on APIs and security.",
    about_p2: "I develop solutions using Python and Java, focusing on REST APIs, JWT authentication, SQL database integration and code versioning with Git/GitHub. I have practical experience in project structuring, code organization and applying best practices in development, security and maintainability.",
    projects_title: "Projects",
    project_java: "Spring Boot • JWT • REST",
    project_python: "Flask • SQLite • REST",
    contact_title: "Contact",
    cv_link: "Download Resume"
  }
};

let currentLang = "pt";

const langToggle = document.getElementById("lang-toggle");

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    langToggle.innerText = currentLang.toUpperCase();

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[currentLang][key]) {
        el.innerText = translations[currentLang][key];
      }
    });
  });
}

const overlay = document.querySelector(".cyber-overlay");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const delta = currentScroll - lastScroll;

  overlay.style.transform = `translateY(${delta * 0.15}px)`;

  lastScroll = currentScroll;
});
