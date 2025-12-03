import { projectsData } from "../datas/projects.data";
import { projectModalContainer } from "./project-modal-container.function";
import { darkMode, lightMode, toggleTheme } from "./toggleTheme.function";

const project = document.getElementById("projects");
const buttons = project.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.style.overflow = "hidden";

    const data = projectsData.find(
      (project) => project.id === button.dataset.id
    );

    const modal = document.createElement("div");
    modal.classList.add("modalProject", toggleTheme);
    document.body.appendChild(modal);

    // Animation for the modal
    setTimeout(() => {
      modal.classList.add("active");
    }, 10);

    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal_container", toggleTheme);
    modal.appendChild(modalContainer);

    projectModalContainer(modal, modalContainer, toggleTheme, data);
 
 // Toggle theme
    const buttonToggleTheme = document.querySelector(".toggle-theme");
    const allElements = modal.querySelectorAll(`.${toggleTheme}`);
    const closeModalImg = document.querySelector(".close-modal img")
    buttonToggleTheme.addEventListener("click", () => {
      allElements.forEach((element) => {
        if (toggleTheme === "dark-mode") {
          darkMode(modal);
          darkMode(element);

          // Close Modal
          closeModalImg.src = "/assets/projects/icons/close-dark-mode.svg";
        } else if (toggleTheme === "light-mode") {
          lightMode(modal);
          lightMode(element);

          // Close Modal
          closeModalImg.src = "/assets/projects/icons/close-light-mode.svg";
          console.log(closeModalImg)

        }
      });
    });
  });

  
});
