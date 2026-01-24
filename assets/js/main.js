const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
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
});


window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

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

const translations = {
  pt: {
    about_title: "Sobre mim",
    about_p1: "Sou Tecnólogo em Análise e Desenvolvimento de Sistemas..."
  },
  en: {
    about_title: "About me",
    about_p1: "I am a Systems Analysis and Development graduate..."
  }
};

let currentLang = "pt";

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  document.getElementById("lang-toggle").innerText = currentLang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.innerText = translations[currentLang][el.dataset.i18n];
  });
});
