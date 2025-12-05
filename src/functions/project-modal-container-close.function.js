const header = document.querySelector("header");

export function closeModal(modal, container, modeTheme) {
  const div = document.createElement("div");
  div.classList.add("close-modal", modeTheme);
  container.appendChild(div);

  const iconClose = document.createElement("img");

  if (modeTheme === "dark-mode") {
    iconClose.src = "/assets/projects/icons/close-dark-mode.svg";
  } else if (modeTheme === "light-mode") {
    iconClose.src = "/assets/projects/icons/close-light-mode.svg";
  }

  iconClose.alt = "Icon pour fermer la modale";
  iconClose.classList.add(modeTheme);
  div.appendChild(iconClose);

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
