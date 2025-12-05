import { projectsData } from "../datas/projects.data";
import { projectModalContainer } from "./project-modal-container.function";
import { modeTheme } from "./toggleTheme.function";

export function displayModal() {
  const project = document.getElementById("projects");
  const buttons = project.querySelectorAll(".details");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      document.body.style.overflow = "hidden";

      const data = projectsData.find(
        (project) => project.id === button.dataset.id
      );

      const modal = document.createElement("div");
      modal.classList.add("modalProject", modeTheme);
      document.body.appendChild(modal);

      // Animation for the modal
      setTimeout(() => {
        modal.classList.add("active");
      }, 10);

      const modalContainer = document.createElement("div");
      modalContainer.classList.add("modal_container", modeTheme);
      modal.appendChild(modalContainer);

      projectModalContainer(modal, modalContainer, modeTheme, data);
    });
  });
}
