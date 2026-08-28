const themeStylesheet = document.querySelector("#theme-stylesheet");

if (themeStylesheet) {
  const themePath = document.body.dataset.themePath || "";
  const defaultTheme = "theme-blueprint-grid.css";
  themeStylesheet.setAttribute("href", themePath + defaultTheme);
}

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", function () {
    backToTopButton.classList.toggle("visible", window.scrollY > 500);
  });
}
