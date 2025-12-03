const header = document.querySelector("header");

export function closeModal(modal, container, toggleTheme) {
  const div = document.createElement("div");
  div.classList.add("close-modal", toggleTheme);
  container.appendChild(div);

  const img = document.createElement("img");

  if (toggleTheme === "dark-mode") {
    img.src = "/assets/projects/icons/close-dark-mode.svg";
  } else if (toggleTheme === "light-mode") {
    img.src = "/assets/projects/icons/close-light-mode.svg";
  }

  img.alt = "Icon pour fermer la modale";
  img.classList.add(toggleTheme);
  div.appendChild(img);

  const close = () => {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = "scroll";
    }, 400);
  };

  img.addEventListener("click", close);
  modal.addEventListener("click", close);
  header.addEventListener("click", close);

  container.addEventListener("click", (e) => e.stopPropagation());
}
