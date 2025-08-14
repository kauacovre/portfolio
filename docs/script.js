document.addEventListener("DOMContentLoaded", () => {

  // Restaurar modo escuro se estiver salvo
  if (localStorage.getItem("dark") === "true") {
    document.body.classList.add("dark-mode");
  }

  // Botão modo escuro
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark", document.body.classList.contains("dark-mode"));
  };

  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "🌙/☀️";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.padding = "10px";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "50%";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.backgroundColor = "#0d1117";
  toggleBtn.style.color = "#fff";
  document.body.appendChild(toggleBtn);
  toggleBtn.addEventListener("click", toggleDarkMode);

  // Ativar link ativo ao rolar
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Iniciar animações AOS
  AOS.init({
    duration: 1000,
    once: true
  });

});
