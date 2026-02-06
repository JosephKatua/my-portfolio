document.addEventListener("DOMContentLoaded", () => {

 const projects = [
  {
    title: "Re-Unite APP",
    description: "A full-stack mobile app solution for helping report and recover missing children.",
    image: "/static/images/reunite.png",
    tags: ["Java", "Firebase"],
    githubUrl: "https://github.com/JosephKatua/Re-Unite-APP"
  },
  {
    title: "TaskFlow",
    description: "A task management system designed to assign, track, and manage tasks with user authentication and status monitoring.",
    image: "/static/images/task.png",
    tags: ["Node.js", "Express", "MongoDB", "JavaScript"],
    githubUrl: "https://task-management-system-1f2ee.web.app/"
  },
  {
    title: "Smart Farming Consultants",
    description: "A web and mobile platform for selling farming guides and offering professional agricultural consultancy services.",
    image: "/static/images/logo.jpeg",
    tags: ["Web App", "AgriTech", "Consultancy"],
    githubUrl: "https://github.com/JosephKatua/Smart-Farming-Consultants"
  }
];

const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
  projects.forEach(project => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    col.innerHTML = `
      <div class="card project-card h-100 shadow-sm border-0">

        <div class="project-image-wrapper">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="project-image"
          />
        </div>

        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${project.title}</h5>

          <p class="card-text text-muted small flex-grow-1">
            ${project.description}
          </p>

          <div class="mb-3">
            ${project.tags
              .map(tag => `<span class="badge bg-secondary me-1">${tag}</span>`)
              .join("")}
          </div>

          <button
            class="btn btn-outline-dark mt-auto"
            onclick="window.open('${project.githubUrl}', '_blank')"
          >
            <i class="bi bi-github me-2"></i>
            Code
          </button>
        </div>
      </div>
    `;

    projectsContainer.appendChild(col);
  });
}


  /* =========================
     SKILLS
  ========================= */
  const skills = [
    { category: "Frontend Development", icon: "bi-globe", items: ["React", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS"] },
    { category: "Backend Development", icon: "bi-server", items: ["Node.js", "Express", "REST APIs", "Python", "Django", "PostgreSQL"] },
    { category: "Mobile Development", icon: "bi-phone", items: ["React Native", "Flutter", "Mobile UI/UX", "Cross-platform Apps"] },
    { category: "Database & Tools", icon: "bi-database", items: ["MongoDB", "MySQL", "Firebase"] },
    { category: "Version Control", icon: "bi-git", items: ["Git", "GitHub", "GitLab", "CI/CD", "Agile Workflow"] },
    { category: "Other Skills", icon: "bi-code-slash", items: ["Problem Solving", "API Integration", "Testing", "Documentation"] }
  ];

  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer) {
    skills.forEach(skill => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";

      col.innerHTML = `
        <div class="card h-100 shadow-sm skill-card">
          <div class="card-body">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="p-2 bg-primary bg-opacity-10 rounded">
                <i class="bi ${skill.icon} fs-3"></i>
              </div>
              <h5 class="mb-0 text-dark">${skill.category}</h5>
            </div>
            <div class="d-flex flex-wrap gap-2">
              ${skill.items.map(item => `<span class="badge bg-secondary text-dark rounded-pill">${item}</span>`).join("")}
            </div>
          </div>
        </div>
      `;
      skillsContainer.appendChild(col);
    });
  }

  /* =========================
     SERVICES
  ========================= */
  const services = [
    { icon: "bi-globe", title: "Web Development", description: "Building responsive, fast, and modern web applications." },
    { icon: "bi-phone", title: "Mobile App Development", description: "Creating cross-platform mobile applications." },
    { icon: "bi-code-slash", title: "Custom Software Solutions", description: "Tailored software solutions for your business." },
    { icon: "bi-tools", title: "API Development & Integration", description: "REST APIs and third-party integrations." },
    { icon: "bi-lightning-charge", title: "Performance Optimization", description: "Speed and efficiency improvements." },
    { icon: "bi-people", title: "Technical Consulting", description: "Architecture and stack guidance." }
  ];

  const servicesContainer = document.getElementById("services-container");
  if (servicesContainer) {
    services.forEach(service => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4";

      col.innerHTML = `
        <div class="card h-100 shadow-sm service-card">
          <div class="card-body text-center">
            <div class="mb-3 p-3 bg-primary bg-opacity-10 rounded-circle d-inline-block">
              <i class="bi ${service.icon} fs-1"></i>
            </div>
            <h5 class="card-title mt-2 text-dark">${service.title}</h5>
            <p class="card-text text-muted">${service.description}</p>
          </div>
        </div>
      `;
      servicesContainer.appendChild(col);
    });
  }

  /* =========================
     CONTACT INFO
  ========================= */
  const contactInfo = [
    { icon: "bi-envelope", label: "Email", value: "katuajoseph111@gmail.com", href: "mailto:katuajoseph111@gmail.com" },
    { icon: "bi-telephone", label: "Phone", value: "+254 703763800", href: "tel:+254703763800" },
    { icon: "bi-geo-alt", label: "Location", value: "Nairobi, Kenya" }
  ];

  const contactContainer = document.getElementById("contact-info");
  if (contactContainer) {
    contactInfo.forEach(item => {
      contactContainer.innerHTML += `
        <div class="card border-0 shadow-sm mb-3">
          <div class="card-body d-flex gap-3">
            <div class="icon-box"><i class="bi ${item.icon}"></i></div>
            <div>
              <small class="text-muted">${item.label}</small>
              <div>
                ${item.href ? `<a href="${item.href}">${item.value}</a>` : `<span>${item.value}</span>`}
              </div>
            </div>
          </div>
        </div>`;
    });
  }

  /* =========================
     SOCIAL LINKS
  ========================= */
  const socialLinks = [
    { icon: "bi-linkedin", href: "https://www.linkedin.com/in/joseph-katua-a23a412b0" },
    { icon: "bi-github", href: "https://github.com/josephkatua" }
  ];

  const socialContainer = document.getElementById("social-links");
  if (socialContainer) {
    socialLinks.forEach(s => {
      socialContainer.innerHTML += `
        <a href="${s.href}" target="_blank" class="social-icon">
          <i class="bi ${s.icon}"></i>
        </a>`;
    });
  }

  /* =========================
     DOWNLOAD CV
  ========================= */
  const cvUrl = "https://drive.google.com/file/d/1opjtG35_VN45ZqikPA6IIjOt-__Yt17n/view";

  const cvBtnMobile = document.getElementById("downloadCV");
  const cvBtnDesktop = document.getElementById("downloadCVDesktop");

  if (cvBtnMobile) cvBtnMobile.onclick = () => window.open(cvUrl, "_blank");
  if (cvBtnDesktop) cvBtnDesktop.onclick = () => window.open(cvUrl, "_blank");

  /* =========================
     NAVBAR SCROLL
  ========================= */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  /* =========================
     MOBILE MENU
  ========================= */
  const mobileToggle = document.getElementById("mobileToggle");
  if (mobileToggle && navbar) {
    mobileToggle.addEventListener("click", () => {
      navbar.classList.toggle("mobile-open");
    });
  }

});
/* ===============================
   HERO ROLE ROTATION (VANILLA)
================================ */

const roles = [
  "Software Developer",
  "UI/UX Designer",
  "Cloud Engineer"
];

let roleIndex = 0;
let charIndex = 0;
const typingSpeed = 80;      // typing speed
const erasingSpeed = 50;     // deleting speed
const delayBetweenRoles = 2000;

const roleText = document.getElementById("roleText");

function typeRole() {
  if (!roleText) return;

  if (charIndex < roles[roleIndex].length) {
    roleText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(eraseRole, delayBetweenRoles);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, erasingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roleText) {
    typeRole();
  }
});

