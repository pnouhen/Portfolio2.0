import { projectsData } from "../datas/projects.data";
import { displayProjects } from "./projects.function";

const filters = document.querySelectorAll("button");

displayProjects(projectsData);

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    if (!filter.classList.contains("active")) {
      filter.classList.add("active");
      Array.from(filters)
        .filter((el) => el !== filter)
        .forEach((el) => el.classList.remove("active"));

      // Filter project
      let projectsFilter = projectsData;
      const stacks = ["front-end", "full-stack"];

      stacks.forEach((category) => {
        if (filter.classList.contains(category)) {
          projectsFilter = projectsData.filter(
            (projet) => projet.stack === category
          );
        }
      });

      displayProjects(projectsFilter);
    }
  });
});
