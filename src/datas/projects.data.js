export const projectsData = [
  {
    id: "ambrineNutri",
    img: "/assets/projects/img/ambrineNutri.webp",
    toggleImg: false,
    title: "Ambrine Nutri",
    description: "Vitrine interactive et boutique de recettes nutrition",
    linkWebSite: "https://pierrenouhen-ambrine-nutri.vercel.app/",
    linkGitHub: "https://github.com/pnouhen/AmbrineNutri",
    details: [
      {
        title: "Stack",
        softSkills: [
          "React",
          "Vite",
          "Tailwind",
          "Node.js",
          "Express",
          "MongoDB",
        ],
        otherSoftSkills: [
          { img: "/assets/projects/icons/jwt.webp", name: "JWT" },
          { img: "/assets/projects/icons/pdfkit.webp", name: "Pdfkit" },
          { img: "/assets/projects/icons/buffer.webp", name: "Buffer" },
          { img: "/assets/projects/icons/canvas.webp", name: "Canvas" },
          { img: "/assets/projects/icons/cleave-js.webp", name: "Cleave.js" },
          { img: "/assets/projects/icons/embla.svg", name: "Embla Carrousel" },
        ],
      },

      {
        title: "Objectif",
        text: "Créer une plateforme permettant à une nutritionniste de présenter ses services et vendre des recettes.",
      },

      {
        title: "Fonctionnalité",
        list: [
          " Authentification JWT (client / admin)",
          "Production de fichiers PDF",
          "API CRUD complète (recettes, utilisateurs, paiements)",
          "Interface admin : ajout, modification et suppression de recettes, changement des prix des consultations",
          "Design responsive",
        ],
      },

      {
        title: "Ce que j'ai appris",
        list: [
          " Gestion d’un projet full-stack complet",
          "Création d’une API sécurisée avec authentification",
          "Consolidation des hooks et contextes React",
        ],
      },
    ],
  },

  {
    id: "portfolio",
    img: "/assets/projects/img/portfolio-light-mode.webp",
    toggleImg: true,
    title: "Mon Portfolio",
    description: "Site interactif moderne avec Dark/Light toggle",
    linkWebSite: "https://pierre-nouhen-portfolio.vercel.app/",
    linkGitHub: "",
    details: [
      {
        title: "Stack",
        softSkills: ["JavaScript", "SASS", "Vite"],
      },

      {
        title: "Objectif",
        text: "",
      },

      {
        title: "Fonctionnalité",
        text: "",
      },

      {
        title: "Ce que j'ai appris",
        text: "",
      },
    ],
  },

  {
    id: "natureReserves",
    img: "/assets/projects/img/carte-interactive.webp",
    toggleImg: false,
    title: "Réserves Naturelles France",
    description: "Carte dynamique avec filtres et détails",
    linkWebSite: "https://pierre-nouhen-create-map-interactive.vercel.app/",
    linkGitHub: "https://github.com/pnouhen/Create-Map-Interactive",
    details: [
      {
        title: "Stack",
        softSkills: ["JavaScript", "Tailwind", "Vite"],
        otherSoftSkills: [
          { img: "/assets/projects/icons/leaflet.webp", name: "Leaflet" },
          { img: "/assets/projects/icons/turf-js.svg", name: "Turf.js" },
          { img: "/assets/projects/icons/cleave-js.webp", name: "Cleave.js" },
        ],
      },

      {
        title: "Objectif",
        text: "Créer une carte interactive affichant les réserves naturelles françaises avec des marqueurs et polygones personnalisés, permettant à l’utilisateur de filtrer facilement les réserves selon plusieurs critères.",
      },

      {
        title: "Fonctionnalité",
        list: [
          "Recherche de réserves naturelles par nom",
          "Affichage des distances entre points",
          "Filtres par département, région, zone circulaire cliquée ou surface calculée",
          "Affichage précis des réserves via polygones sur une carte interactive",
          "UI optimisée et responsive",
        ],
      },

      {
        title: "Ce que j'ai appris",
        list: [
          "Manipulation avancée de Leaflet pour cartes interactives",
          "Gestion dynamique des filtres et des interactions utilisateur",
          "Intégration et optimisation de l’UI avec Tailwind CSS",
          "Formatage de saisie utilisateur avec Cleave.js",
        ],
      },
    ],
  },
];
