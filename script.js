const themeSelect = document.querySelector("#theme-select");
const themeStylesheet = document.querySelector("#theme-stylesheet");

if (themeSelect && themeStylesheet) {
  const themePath = document.body.dataset.themePath || "";
  const defaultTheme = "theme-toon-sketch.css";
  const allowedThemes = Array.from(themeSelect.options).map((option) => option.value);

  function normalizeThemeName(themeFile) {
    if (!themeFile) {
      return defaultTheme;
    }

    const fileName = themeFile.split("/").pop();
    return allowedThemes.includes(fileName) ? fileName : defaultTheme;
  }

  function applyTheme(themeFile) {
    const normalizedTheme = normalizeThemeName(themeFile);
    themeStylesheet.setAttribute("href", themePath + normalizedTheme);
    themeSelect.value = normalizedTheme;
    localStorage.setItem("portfolio-theme", normalizedTheme);
  }

  const savedTheme = normalizeThemeName(localStorage.getItem("portfolio-theme"));
  applyTheme(savedTheme);

  themeSelect.addEventListener("change", function () {
    applyTheme(themeSelect.value);
  });
}

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", function () {
    backToTopButton.classList.toggle("visible", window.scrollY > 500);
  });
}
