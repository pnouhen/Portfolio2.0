import { projectsData } from "../datas/projects.data";

const section = document.getElementById("projects");

projectsData.forEach((project) => {
  const article = document.createElement("article");
  const id = project.title.replace(/\s+/g, "-");
  article.id = id;
  section.appendChild(article);

  const imgProject = document.createElement("img");
  imgProject.classList.add("imgProject", "dark-mode");
  imgProject.src = project.img;
  imgProject.alt = `Illustration de ${project.title}`;
  article.appendChild(imgProject);

  const text = document.createElement("p");
  text.classList.add("dark-mode");
  const strong = document.createElement("strong");
  strong.textContent = project.title;
  text.appendChild(strong);

  text.appendChild(document.createTextNode(" — " + project.description));

  article.appendChild(text);

  // All link elements
  const linkDiv = document.createElement("div");
  linkDiv.classList.add("link_container");
  article.appendChild(linkDiv);

  // Link for web site
  const linkWebsite = document.createElement("a");
  linkWebsite.href = project.linkWebSite;
  linkDiv.appendChild(linkWebsite);

  const imgLinkWebSite = document.createElement("img");
  imgLinkWebSite.src = "/assets/projects/icons/link-project.svg";
  const textimgLinkWebSite = `Acceder au site : ${project.title}`;
  imgLinkWebSite.alt = textimgLinkWebSite;
  imgLinkWebSite.classList.add("dark-mode");
  imgLinkWebSite.title = textimgLinkWebSite;
  linkWebsite.appendChild(imgLinkWebSite);

  // Link for GitHub
  const linkGitHub = document.createElement("a");
  linkGitHub.href = project.linkGitHub;
  linkDiv.appendChild(linkGitHub);

  const imgLinkGitHub = document.createElement("img");
  imgLinkGitHub.src = "/assets/soft-skills/github.svg";
  const textimgLinkGitHub = `Acceder au GitHub : ${project.title}`;
  imgLinkGitHub.alt = textimgLinkGitHub;
  imgLinkGitHub.classList.add("dark-mode");
  imgLinkGitHub.title = textimgLinkGitHub;
  linkGitHub.appendChild(imgLinkGitHub);

  // Link for more details
  const details = document.createElement("button");
  details.classList.add("dark-mode");
  details.textContent = "En savoir plus";
  linkDiv.appendChild(details);
});

export const darkModeImg = () => {
  const toogleImg = projectsData.filter(
    (projectsData) => projectsData.toggleImg === true
  );

  toogleImg.forEach((project) => {
    const id = project.title.replace(/\s+/g, "-");
    const img = document.querySelector(`#${id} .imgProject`);
    img.src = project.img.replace("light-mode", "dark-mode");
  });
};

export const lightModeImg = () => {
  const toogleImg = projectsData.filter(
    (projectsData) => projectsData.toggleImg === true
  );

  toogleImg.forEach((project) => {
    const id = project.title.replace(/\s+/g, "-");
    const img = document.querySelector(`#${id} .imgProject`);
    img.src = project.img.replace("dark-mode", "light-mode");
  });
};
