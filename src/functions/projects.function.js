import { projectsData } from "../datas/projects.data";
import { toggleThemeClass } from "./toggleTheme.function";

export function displayProjects(projects) {
  const section = document.getElementById("projects");
  // Clean all projects
  const allProjects = section.querySelectorAll("article");
  allProjects.forEach((project) => project.remove());

  // Display projects
  projects.forEach((project) => {
    const article = document.createElement("article");
    article.id = project.id;
    section.appendChild(article);

    // Image
    const imgProject = document.createElement("img");
    imgProject.classList.add("imgProject", toggleThemeClass);
    imgProject.src = project.img;
    imgProject.alt = `Illustration de ${project.title}`;
    article.appendChild(imgProject);

    // Text
    const text = document.createElement("p");
    text.classList.add("text", toggleThemeClass);
    const strong = document.createElement("strong");
    strong.textContent = project.title;
    text.appendChild(strong);
    text.appendChild(document.createTextNode(" — " + project.description));
    article.appendChild(text);

    // Stack
    const stack = document.createElement("p");
    stack.textContent =
      project.stack.charAt(0).toUpperCase() + project.stack.slice(1);
    stack.classList.add("stack", toggleThemeClass);
    article.appendChild(stack);

    // All link elements
    const linkDiv = document.createElement("div");
    linkDiv.classList.add("link_container");
    article.appendChild(linkDiv);

    // Link for web site
    const linkWebsite = document.createElement("a");
    linkWebsite.href = project.linkWebSite;
    linkWebsite.target = "_blank";
    linkWebsite.rel = "noopener noreferrer";
    linkDiv.appendChild(linkWebsite);

    const imgLinkWebSite = document.createElement("img");
    imgLinkWebSite.src = "/assets/projects/icons/link-project.svg";
    const textimgLinkWebSite = `Acceder au site : ${project.title}`;
    imgLinkWebSite.alt = textimgLinkWebSite;
    imgLinkWebSite.classList.add(toggleThemeClass);
    imgLinkWebSite.title = textimgLinkWebSite;
    linkWebsite.appendChild(imgLinkWebSite);

    // Link for GitHub
    const linkGitHub = document.createElement("a");
    linkGitHub.href = project.linkGitHub;
    linkGitHub.target = "_blank";
    linkGitHub.rel = "noopener noreferrer";
    linkDiv.appendChild(linkGitHub);

    const imgLinkGitHub = document.createElement("img");
    imgLinkGitHub.src = "/assets/soft-skills/outils/github.svg";
    const textimgLinkGitHub = `Acceder au GitHub : ${project.title}`;
    imgLinkGitHub.alt = textimgLinkGitHub;
    imgLinkGitHub.classList.add(toggleThemeClass);
    imgLinkGitHub.title = textimgLinkGitHub;
    linkGitHub.appendChild(imgLinkGitHub);

    // Link for more details
    const details = document.createElement("button");
    details.dataset.id = project.id;
    details.classList.add("details", toggleThemeClass);
    details.textContent = "En savoir plus";
    linkDiv.appendChild(details);
  });
}

export const toggleModeImg = (modeInitial, modeReplace) => {
  const toggleImg = projectsData.filter(
    (project) => project.toggleImg === true
  );

  if (toggleImg.toggleImg) {
    toggleImg.forEach((project) => {
      const img = document.querySelector(`#${project.id} .imgProject`);
      img.src = project.img.replace(modeInitial, modeReplace);
    });
  }
};
