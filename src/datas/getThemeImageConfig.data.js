export function getThemeImageConfig(themeToggleButton, homeBackgroundImage , linkedinIconImage ) {
  return [
    {
      element: themeToggleButton,
      images: [
        {
          mode: "light",
          src: "/assets/header/moon.svg",
          alt: "Lune",
          title: "Passer au thème sombre",
        },
        {
          mode: "dark",
          src: "/assets/header/sun.svg",
          alt: "Soleil",
          title: "Passer au thème clair",
        },
      ],
    },

    {
      element: homeBackgroundImage ,
      images: [
        {
          mode: "light",
          src: "/assets/background/home-light.webp",
        },
        {
          mode: "dark",
          src: "/assets/background/home-dark.webp",
        },
      ],
    },

    {
      element: linkedinIconImage ,
      images: [
        {
          mode: "light",
          src: "/assets/footer/linkedin-light.svg",
        },
        {
          mode: "dark",
          src: "/assets/footer/linkedin-dark.svg",
        },
      ],
    },
  ];
}
