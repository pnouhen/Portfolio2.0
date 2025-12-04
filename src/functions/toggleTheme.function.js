import { toggleModeMenuBurger } from "./menuBurger.function";
import { projectsFilter } from "./project-filter.function";
import { displayModal } from "./project-modal.function";
import { displayProjects, toggleModeImg } from "./projects.function";

const button = document.querySelector(".toggle-theme");
const linkedin = document.querySelector(".linkedin img");

let modeTheme = ".dark-mode";

export let toggleThemeClass = "dark-mode";

export function toggleTheme(element, remove, add) {
  element.style.transition = "all 0.4s ease-in-out";
  element.classList.remove(remove);
  element.classList.add(add);
}

button.addEventListener("click", (e) => {
  e.stopPropagation();

  const allElements = document.querySelectorAll(modeTheme);

  modeTheme = modeTheme === ".dark-mode" ? ".light-mode" : ".dark-mode";

  // Change mode for all elements
  allElements.forEach((element) => {
    // To avoid the transition when the page loads
    button.style.transition = "all 0.4s ease-in-out";

    const toggleImg = (img, src, alt, title) => {
      img.src = src;
      if (alt) img.alt = alt;
      if (title) img.title = title;
    };

    if (element.classList.contains("dark-mode")) {
      toggleThemeClass = "light-mode";

      // Change img
      toggleImg(
        button,
        "/assets/header/moon.svg",
        "Lune",
        "Passer au thème sombre"
      );
      toggleImg(linkedin, "/assets/footer/linkedin-light-mode.svg");

      toggleTheme(element, "dark-mode", "light-mode");

      // Other functions
      toggleModeImg("light-mode", "dark-mode");
      toggleModeMenuBurger("black");
      displayProjects(projectsFilter);
      displayModal();
    } else if (element.classList.contains("light-mode")) {
      toggleThemeClass = "dark-mode";

      // Change img
      toggleImg(
        button,
        "/assets/header/sun.svg",
        "Soleil",
        "Passer au thème clair"
      );

      toggleImg(linkedin, "/assets/footer/linkedin-dark-mode.svg");

      toggleTheme(element, "light-mode", "dark-mode");

      // Other functions
      toggleModeImg("dark-mode", "light-mode");
      toggleModeMenuBurger("white");
      displayProjects(projectsFilter);
      displayModal();
    }
  });
});
