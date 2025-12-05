import { getThemeImageConfig } from "../datas/getThemeImageConfig.data";

const themeToggleButton = document.querySelector(".toggle-theme");
const homeBackgroundImage = document.querySelector(".bg-home");
const linkedinIconImage = document.querySelector(".linkedin img");

export function toggleThemeImages(mode) {
  const elementsWithImages = getThemeImageConfig(
    themeToggleButton,
    homeBackgroundImage,
    linkedinIconImage
  );

  elementsWithImages.forEach((item) => {
    const matchingImage = item.images.find((item) => item.mode === mode);
    item.element.src = matchingImage.src;
    if (item.element.alt) item.element.alt = matchingImage.alt;
    if (item.element.title) item.element.alt = matchingImage.title;
  });
}
