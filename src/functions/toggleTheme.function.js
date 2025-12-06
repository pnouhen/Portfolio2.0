import { toggleThemeImages } from "./toggleTheme-img.function";
import { toggleThemeImagesProject } from "./projects.function";
import { toggleModeMenuBurger } from "./menuBurger.function";
import { toggleIconProjectModal } from "./project-modal-container-close.function";

const themeToggleButton = document.querySelector(".toggle-theme");

export let modeTheme = "dark-mode";

// Transition management
const durationTransition = 400;
const durationTransitionImg = durationTransition - 200;

function toggleThemeElement(element, remove, add) {
  element.style.transition = `all ${durationTransition}ms ease-in-out`;
  element.classList.remove(remove);
  element.classList.add(add);
}

themeToggleButton.addEventListener("click", (e) => {
  e.stopPropagation();

  const allElements = document.querySelectorAll(`.${modeTheme}`);

  modeTheme = modeTheme === "dark-mode" ? "light-mode" : "dark-mode";

  // Change mode for all elements
  allElements.forEach((element) => {
    // To avoid the transition when the page loads
    themeToggleButton.style.transition = "all 0.4s ease-in-out";

    if (element.classList.contains("dark-mode")) {
      toggleThemeElement(element, "dark-mode", "light-mode");

      // Change images
      setTimeout(() => {
        toggleThemeImages("light");
        toggleThemeImagesProject("light-mode", "dark-mode");
        toggleIconProjectModal("light-mode");
        toggleModeMenuBurger("light");
      }, durationTransitionImg);
    } else if (element.classList.contains("light-mode")) {
      toggleThemeElement(element, "light-mode", "dark-mode");

      // Change images
      setTimeout(() => {
        toggleThemeImages("dark");
        toggleThemeImagesProject("dark-mode", "light-mode");
        toggleIconProjectModal("dark-mode");
        toggleModeMenuBurger("dark");
      }, durationTransitionImg);
    }
  });
});
