const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    // Visibility detection
    const rect = section.getBoundingClientRect();
    const isVisible =
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2;

    if (isVisible) {
      links.forEach((a) => a.classList.remove("active"));

      const id = section.id;
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});
