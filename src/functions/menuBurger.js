const header = document.getElementById("header");
const nav = document.getElementById("nav");

if (window.innerWidth <= 768) {
  const imgBurger = document.createElement("img");
  imgBurger.src = "/assets/icons/header/bars-solid-white.svg";
  imgBurger.alt = "Menu";
  imgBurger.classList = "menuBurger";
  header.appendChild(imgBurger);

  imgBurger.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");

      setTimeout(() => {
        nav.style.visibility = "hidden";
      }, 400);
    } else {
      nav.style.visibility = "visible";

      nav.classList.add("active");
    }
  });
}
