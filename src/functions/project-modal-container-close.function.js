const header = document.querySelector("header");

const toggleIconTheme = (modeTheme, iconClose) => {
  if (modeTheme === "dark-mode") {
    iconClose.src = "/assets/projects/icons/close-dark.svg";
  } else if (modeTheme === "light-mode") {
    iconClose.src = "/assets/projects/icons/close-light.svg";
  }
};

export function closeModal(modal, container, modeTheme) {
  const div = document.createElement("div");
  div.classList.add("close-modal", modeTheme);
  container.appendChild(div);

  const button = document.createElement("button");
  div.appendChild(button);

  const iconClose = document.createElement("img");

  toggleIconTheme(modeTheme, iconClose);

  iconClose.alt = "Icon pour fermer la modale";
  iconClose.classList.add(modeTheme);
  button.appendChild(iconClose);

  const close = () => {
    modal.classList.remove("active");
    setTimeout(() => {
      modal.remove();
      document.body.style.overflow = "scroll";
    }, 400);
  };

  iconClose.addEventListener("click", close);
  header.addEventListener("click", close);

  if (window.innerWidth >= 768) modal.addEventListener("click", close);

  container.addEventListener("click", (e) => e.stopPropagation());
}

export function toggleIconProjectModal(modeTheme) {
  const iconClose = document.querySelector(".close-modal img");

  if (iconClose) {
    toggleIconTheme(modeTheme, iconClose);
  }
}
