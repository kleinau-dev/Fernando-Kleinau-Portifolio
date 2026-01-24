const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("show");
    }
  });
});
