const themeStylesheet = document.querySelector("#theme-stylesheet");

if (themeStylesheet) {
  const themePath = document.body.dataset.themePath || "";
  const defaultTheme = "theme-blueprint-grid.css";
  themeStylesheet.setAttribute("href", themePath + defaultTheme);
}

const siteNav = document.querySelector("#site-nav");

if (siteNav) {
  const isCoursePage = window.location.pathname.includes("/courses/");
  const rootPath = isCoursePage ? "../" : "";
  const coursePath = isCoursePage ? "" : "courses/";

  const courses = [
    {
      name: "Introduction to IT – E004",
      file: "introduction-to-it-e004.html",
    },
    {
      name: "Business of IT - Applications – D336",
      file: "business-of-it-d336.html",
    },
    {
      name: "Linux Foundations – D281",
      file: "linux-foundations-d281.html",
    },
    {
      name: "IT Foundations – D316",
      file: "it-foundations-d316.html",
    },
    {
      name: "IT Applications – D317",
      file: "it-applications-d317.html",
    },
    {
      name: "Network and Security - Foundations – D315",
      file: "network-and-security-foundations-d315.html",
    },
    {
      name: "Version Control – D197",
      file: "version-control-d197.html",
    },
  ];

  const courseLinks = courses
    .map(
      (course) =>
        `<a href="${coursePath}${course.file}">${course.name}</a>`
    )
    .join("");

  siteNav.innerHTML = `
    <a
      class="brand"
      href="https://www.linkedin.com/in/casey-a-jones"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Casey Jones LinkedIn profile in a new tab"
    >
      <img
        class="brand-photo"
        src="${rootPath}assets/casey-headshot.jpg"
        alt="Headshot of Casey Jones"
      />
      <span>Casey Jones</span>
    </a>

    <div class="nav-links">
      <a href="${rootPath}index.html#about">About</a>
      <a href="${rootPath}index.html#resume-focus">Resume Focus</a>
      <a href="${rootPath}index.html#course-portfolio">WGU Course Portfolio</a>
      <a href="${rootPath}100-days-of-python.html">100 Days of Python</a>

      <div class="dropdown">
        <button class="dropdown-button" type="button">Courses ▾</button>
        <div class="dropdown-content">
          ${courseLinks}
        </div>
      </div>

      <a href="${rootPath}certifications.html">Certifications</a>
      <a href="${rootPath}roadmap.html">WGU Roadmap</a>
      <a href="${rootPath}version-control.html">Version Control</a>
      <a href="${rootPath}index.html#contact">Contact</a>
    </div>
  `;
}

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", function () {
    backToTopButton.classList.toggle("visible", window.scrollY > 500);
  });
}