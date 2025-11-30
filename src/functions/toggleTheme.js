import { darkModeMenuBurger, lightModeMenuBurger } from "./menuBurger";

const button = document.querySelector(".toggle-theme");
const allElements = document.querySelectorAll(".dark-mode");

button.addEventListener("click", () => {
  // Change mode for all elements
  allElements.forEach((element) => {
    // To avoid the transition when the page loads
    element.style.transition = "all 0.4s ease-in-out";
    button.style.transition = "all 0.4s ease-in-out";

    if (element.classList.contains("dark-mode")) {
      // Change button
      button.src = "/assets/icons/header/moon.svg";
      button.alt = "Lune";
      button.title = "Passer au thème sombre";

      element.classList.remove("dark-mode");
      element.classList.add("light-mode");

      // Functions
      lightModeMenuBurger()
    } else if (element.classList.contains("light-mode")) {
      // Change button
      button.src = "/assets/icons/header/sun.svg";
      button.alt = "Soleil";
      button.title = "Passer au thème clair";

      element.classList.remove("light-mode");
      element.classList.add("dark-mode");
      
      // Functions
      darkModeMenuBurger()
    }
  });
});
