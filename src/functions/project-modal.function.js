import { projectsData } from "../datas/projects.data";
import { projectModalContainer } from "./project-modal-container.function";
import {  toggleThemeClass } from "./toggleTheme.function";

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
      modal.classList.add("modalProject", toggleThemeClass);
      document.body.appendChild(modal);

      // Animation for the modal
      setTimeout(() => {
        modal.classList.add("active");
      }, 10);

      const modalContainer = document.createElement("div");
      modalContainer.classList.add("modal_container", toggleThemeClass);
      modal.appendChild(modalContainer);

      projectModalContainer(modal, modalContainer, toggleThemeClass, data);

      // Toggle theme
      const buttonToggleTheme = document.querySelector(".toggle-theme");
      const allElements = modal.querySelectorAll(toggleThemeClass);
      const closeModalImg = document.querySelector(".close-modal img");
      buttonToggleTheme.addEventListener("click", () => {
        allElements.forEach((element) => {
          if (toggleTheme === "dark-mode") {
            toggleTheme(modal, "light-mode", "dark-mode");
            toggleTheme(element, "light-mode", "dark-mode");

            // Close Modal
            closeModalImg.src = "/assets/projects/icons/close-dark-mode.svg";
          } else if (toggleTheme === "light-mode") {
            toggleTheme(modal, "dark-mode", "light-mode");
            toggleTheme(element, "dark-mode", "light-mode");

            // Close Modal
            closeModalImg.src = "/assets/projects/icons/close-light-mode.svg";
          }
        });
      });
    });
  });
}
