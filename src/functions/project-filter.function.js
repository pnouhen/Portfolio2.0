import { projectsData } from "../datas/projects.data";
import { displayModal } from "./project-modal.function";
import { displayProjects } from "./projects.function";

     export let projectsFilter = projectsData;

const filters = document.querySelectorAll("button");

// Initialization
displayProjects(projectsData);
displayModal()

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    if (!filter.classList.contains("active")) {
      filter.classList.add("active");
      Array.from(filters)
        .filter((el) => el !== filter)
        .forEach((el) => el.classList.remove("active"));

      // Filter project
      const stacks = ["front-end", "full-stack"];

      stacks.forEach((category) => {
        if (filter.classList.contains(category)) {
          projectsFilter = projectsData.filter(
            (projet) => projet.stack === category
          );
        }
      });

      displayProjects(projectsFilter);
      displayModal()
    }
  });
});
