import { toggleThemeImages } from "./toggleTheme-img.function";
import { toggleThemeImagesProject } from "./projects.function";
import { toggleModeMenuBurger } from "./menuBurger.function";

const themeToggleButton = document.querySelector(".toggle-theme");

export let modeTheme = "dark-mode";

export function toggleThemeElement(element, remove, add) {
  element.style.transition = "all 0.4s ease-in-out";
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
      toggleThemeImages("light");
      toggleThemeImagesProject("light-mode", "dark-mode");
      toggleModeMenuBurger("light");
    } else if (element.classList.contains("light-mode")) {
      toggleThemeImages("dark");
      toggleThemeElement(element, "light-mode", "dark-mode");
      toggleThemeImagesProject("dark-mode", "light-mode");
      toggleModeMenuBurger("dark");
    }
  });
});
