import { closeModal } from "./project-modal-container-close.function";
import { softSkillsData } from "../datas/softSkills.data";

export function projectModalContainer(modal, container, toggleTheme, project) {
  closeModal(modal, container, toggleTheme)

  const modalBody = document.createElement("div")
  modalBody.classList.add("modal-body", toggleTheme)
  container.appendChild(modalBody)

  const title = document.createElement("h3");
  title.textContent = project.title;
  title.classList.add(toggleTheme);
  modalBody.appendChild(title);

  const description = document.createElement("p");
  description.textContent = project.description;
  description.classList.add("description", toggleTheme);
  modalBody.appendChild(description);

  //   Details
  project?.details.forEach((detail) => {
    const div = document.createElement("div");
    div.classList.add("detail")
    modalBody.appendChild(div);

    const titleDetail = document.createElement("h4");
    titleDetail.textContent = detail.title + " :";
    titleDetail.classList.add(toggleTheme);
    div.appendChild(titleDetail);

    if (detail.text) {
      const text = document.createElement("p");
      text.textContent = detail.text;
      text.classList.add(toggleTheme);
      div.appendChild(text);
    } else if (detail.list) {
      const ul = document.createElement("ul");
      div.appendChild(ul);

      detail.list.forEach((el) => {
        const li = document.createElement("li");
        li.textContent = el;
        li.classList.add("text",toggleTheme);
        ul.appendChild(li);
      });
    } else if (detail.softSkills) {
      const ul = document.createElement("ul");
      ul.classList.add("skills");
      div.appendChild(ul);

      const generateSkills = (skill) => {
        const li = document.createElement("li");
        ul.appendChild(li);

        const img = document.createElement("img");
        img.src = skill.img;
        img.alt = `Icone de : ${skill.name}`;
        img.title = skill.name;
        img.classList.add(toggleTheme);
        li.appendChild(img);
      };

      //   Generate softSkills width softSkillsData
      detail.softSkills.forEach((skill) => {
        softSkillsData.forEach((category) => {
          const data = category.skills.find(
            (element) => element.name === skill
          );
          if (data) {
            generateSkills(data);
          }
        });
      });

      // Generate other skills
      if (detail.otherSoftSkills) {
        detail.otherSoftSkills.forEach((skill) => {
          generateSkills(skill);
        });
      }
    }
  });
}
