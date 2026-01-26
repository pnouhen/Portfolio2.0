export const projectsData = [
  {
    id: "equilibrio",
    img: "/assets/projects/img/equilibrio.webp",
    toggleImg: false,
    title: "Equilibrio",
    description:
      "Application web Angular pour la gestion d’une association de capoeira",
    stack: "front-end",
    linkWebSite: "https://pierre-nouhen-equilibrio.vercel.app/",
    linkGitHub: "https://github.com/pnouhen/Equilibrio/tree/main/front-end",
    details: [
      {
        title: "Stack",
        softSkills: ["Angular", "Vite", "TypeScript", "SASS"],
        otherSoftSkills: [
          { img: "/assets/projects/icons/jwt.webp", name: "JWT" },
          { img: "/assets/projects/icons/pdfjs.webp", name: "PDFjs" },
        ],
      },

      {
        title: "Objectif",
        text: "Découvrir et pratiquer Angular et TypeScript à travers le développement d’un site web responsive pour une association de capoeira, avec une gestion des rôles (adhérent, professeur, administrateur).",
      },

      {
        title: "Fonctionnalités",
        list: [
          "Slideshow automatique sur la page d’accueil",
          "Sélection d’une ville avec génération de pages dynamiques",
          "Formulaire de contact",
          "Authentification avec gestion des rôles (adhérent, professeur, administrateur)",
          "Dashboard adhérent (PDF, vidéos YouTube, chansons avec paroles et audio)",
          "Changement du membre actif depuis le header",
          "Espace professeur : accès aux membres, planning et gestion des présences",
          "Espace administrateur : gestion du contenu (carousel, entraînements, lieux, horaires, adhérents, ressources)",
          "Prévisualisation avant validation des modifications",
          "Site responsive et déployé",
        ],
      },

      {
        title: "Ce que j'ai appris",
        list: [
          "Bases et fonctionnement du framework Angular",
          "Utilisation de TypeScript dans un projet concret",
          "Mise en place d’un routing Angular",
          "Utilisation des services pour centraliser les données",
          "Création et utilisation de models",
          "Utilisation des signals Angular",
          "Gestion d’un dashboard avec rôles utilisateurs",
          "Structuration d’une application front-end",
          "Intégration de contenus externes (PDF, vidéos YouTube)",
          "Création d’un site responsive",
          "Déploiement d’une application Angular",
        ],
      },

      {
        title: "Améliorations prévues",
        list: [
          "Mise en place du serveur PHP",
          "Création de la base de données MySQL",
          "Migration des données du front-end vers le backend",
        ],
      },
    ],
  },

  {
    id: "ambrineNutri",
    img: "/assets/projects/img/ambrineNutri.webp",
    toggleImg: false,
    title: "Ambrine Nutri",
    description:
      "Application web React avec Node.js et MongoDB pour une nutritionniste",
    stack: "full-stack",
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
          { img: "/assets/projects/icons/leaflet.webp", name: "Leaflet" },
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
        title: "Fonctionnalités",
        list: [
          "Authentification JWT (client / admin)",
          "Production de fichiers PDF",
          "API CRUD complète (recettes, utilisateurs, paiements)",
          "Interface admin : ajout, modification et suppression de recettes, changement des prix des consultations",
          "Design responsive",
        ],
      },

      {
        title: "Ce que j'ai appris",
        list: [
          "Gestion d’un projet full-stack complet",
          "Création d’une API sécurisée avec authentification",
          "Consolidation des hooks et contextes React",
        ],
      },
    ],
  },

  {
    id: "natureReserves",
    img: "/assets/projects/img/carte-interactive.webp",
    toggleImg: false,
    title: "Réserves Naturelles France",
    description:
      "Carte interactive des réserves naturelles françaises avec filtres (JS, Node.js, MongoDB)",
    stack: "full-stack",
    linkWebSite: "https://pierre-nouhen-create-map-interactive.vercel.app/",
    linkGitHub: "https://github.com/pnouhen/Create-Map-Interactive",
    details: [
      {
        title: "Stack",
        softSkills: [
          "JavaScript",
          "Vite",
          "Tailwind",
          "Node.js",
          "Express",
          "MongoDB",
        ],
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
        title: "Fonctionnalités",
        list: [
          "Recherche de réserves naturelles par nom",
          "Affichage des distances entre points",
          "Filtres par département, région, zone circulaire cliquée ou surface calculée",
          "Affichage précis des réserves via polygones sur une carte interactive",
          "UI optimisée et responsive",
          "Mise en place d’un serveur pour assurer l’autonomie dans la récupération et la gestion des données.",
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

  {
    id: "portfolio",
    img: "/assets/projects/img/portfolio-light-mode.webp",
    toggleImg: true,
    title: "Mon Portfolio",
    stack: "front-end",
    description:
      "Site web interactif avec Dark/Light toggle et filtrage des projets (JS, SASS, Vite)",
    linkWebSite: "https://pierre-nouhen-portfolio.vercel.app/",
    linkGitHub: "",
    details: [
      {
        title: "Stack",
        softSkills: ["JavaScript", "SASS", "Vite"],
      },

      {
        title: "Objectif",
        text: "Moderniser mon portfolio tout en mettant en avant mon projet personnel et mes compétences en développement web.",
      },

      {
        title: "Fonctionnalités",
        list: [
          "Toggle de thème interactif",
          "Navigation dynamique",
          "Filtrage des projets",
          "Affichage dynamique des projets",
          "Modale de détails des projets",
          "Affichage dynamique des compétences",
        ],
      },

      {
        title: "Ce que j'ai appris",
        list: [
          "Gestion du Toggle de thème interactif",
          "Création d'une navigation dynamique",
        ],
      },
    ],
  },
];
