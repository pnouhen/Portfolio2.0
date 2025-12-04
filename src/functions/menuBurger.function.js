const header = document.getElementById("header");
const nav = document.getElementById("nav");
const imgBurger = document.createElement("img");

const links = document.querySelectorAll("nav li a");

if (window.innerWidth <= 1024) {
  imgBurger.src = "/assets/header/bars-solid-white.svg";
  imgBurger.alt = "Menu";
  imgBurger.classList = "menuBurger";
  imgBurger.loading = "lazy";
  header.appendChild(imgBurger);

  const hiddenNav = () => {
    nav.classList.remove("active");

    setTimeout(() => {
      nav.style.visibility = "hidden";
    }, 400);
  };

  imgBurger.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      hiddenNav();
    } else {
      nav.style.visibility = "visible";

      nav.classList.add("active");
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", hiddenNav);
  });
}

export const toggleModeMenuBurger = (color) => {
  imgBurger.src = `/assets/header/bars-solid-${color}.svg`;
};
