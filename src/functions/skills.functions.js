import { softSkillsData } from "../datas/softSkills.data";

const section = document.getElementById("skills");

softSkillsData.forEach((category) => {
  const article = document.createElement("article");
  section.appendChild(article);

  // Title
  const title = document.createElement("h3");
  title.textContent = category.title;
  title.classList.add("dark-mode");
  article.appendChild(title);

  // Skills
  const ul = document.createElement("ul");
  ul.classList.add("skills");
  article.appendChild(ul);

  category.skills.forEach((skill) => {
    const li = document.createElement("li");
    ul.appendChild(li);

    const img = document.createElement("img");
    img.src = skill.img;
    img.alt = `Icone de : ${skill.name}`;
    img.title = skill.name;
    img.classList.add("dark-mode");
    li.appendChild(img);
  });
});
