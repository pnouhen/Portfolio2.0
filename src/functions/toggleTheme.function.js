import { darkModeMenuBurger, lightModeMenuBurger } from "./menuBurger.function";
import { darkModeImg, lightModeImg } from "./projects.function";

const button = document.querySelector(".toggle-theme");
const allElements = document.querySelectorAll(".dark-mode");

export let toggleTheme = "dark-mode"

export function lightMode(element) {
  element.style.transition = "all 0.4s ease-in-out";
  element.classList.remove("dark-mode");
  element.classList.add("light-mode");
}

export function darkMode(element) {
  element.style.transition = "all 0.4s ease-in-out";
  element.classList.remove("light-mode");
  element.classList.add("dark-mode");
}

button.addEventListener("click", (e) => {
  e.stopPropagation();

  // Change mode for all elements
  allElements.forEach((element) => {
    // To avoid the transition when the page loads
    button.style.transition = "all 0.4s ease-in-out";

    if (element.classList.contains("dark-mode")) {
      toggleTheme = "light-mode"

      // Change button
      button.src = "/assets/icons/header/moon.svg";
      button.alt = "Lune";
      button.title = "Passer au thème sombre";

      lightMode(element);

      // Functions
      darkModeImg();
      lightModeMenuBurger();
    } else if (element.classList.contains("light-mode")) {
      toggleTheme = "dark-mode"

      // Change button
      button.src = "/assets/icons/header/sun.svg";
      button.alt = "Soleil";
      button.title = "Passer au thème clair";

      darkMode(element);

      // Functions
      lightModeImg();
      darkModeMenuBurger();
    }
  });
});
