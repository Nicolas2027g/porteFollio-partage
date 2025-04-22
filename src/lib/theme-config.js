// Fichier de configuration du thème
export const themeConfig = {
    // Informations personnelles
    personalInfo: {
      name: "GUILLARD Nicolas",
      title: "Étudiant en informatique à l'ESIEA en 3ème Année",
      subtitle: "Développeur",
      email: "contact@nicolasguillard.com",
      phone: "+33 6 12 34 56 78",
      location: "Paris, France",
      photo: "/images/presentation.jpg",
      cv: "/assets/CV.pdf",
      github: "https://github.com/Nicolas2027g",
      linkedin: "https://fr.linkedin.com/",
      instagram: "https://www.instagram.com/",
      discord: "https://discord.com/"
    },
    
    // Projets à mettre en avant
    projects: [
      {
        id: 1,
        title: "Cryptographie Moderne",
        description: "Projet scientifique et technique sur la Cryptographie Moderne. Implémentation d'un système Mini-AES pour comprendre les fondements de la cryptographie.",
        longDescription: "Ce projet a été réalisé dans le cadre de mon cursus à l'ESIEA. L'objectif était de comprendre les principes fondamentaux de la cryptographie moderne en implémentant une version simplifiée de l'algorithme AES (Advanced Encryption Standard). L'implémentation comprend les étapes clés d'AES, notamment la substitution, le décalage de lignes, le mélange de colonnes et l'ajout de clé de tour.",
        image: "/images/projet-1.webp",
        link: "https://github.com/nolannmoisis/Mini-AES",
        github: "https://github.com/nolannmoisis/Mini-AES",
        technologies: ["C", "Cryptographie", "Sécurité"],
        features: [
          "Implémentation de l'algorithme Mini-AES",
          "Interface de chiffrement/déchiffrement",
          "Documentation détaillée sur la cryptographie"
        ]
      },
      {
        id: 2,
        title: "Librairie Standard en C",
        description: "Création d'une librairie standard en C reproduisant les fonctionnalités essentielles des bibliothèques système pour une meilleure compréhension des mécanismes internes.",
        longDescription: "Dans ce projet, j'ai recréé les fonctions essentielles de la librairie standard C pour comprendre leur fonctionnement interne. J'ai implémenté des fonctions de manipulation de chaînes, de gestion de mémoire et de traitement de fichiers, en respectant au maximum les spécifications originales.",
        image: "/images/projet-2.png",
        link: "#",
        github: "#",
        technologies: ["C", "Algorithmique", "Optimisation"],
        features: [
          "Implémentation de fonctions de manipulation de chaînes",
          "Gestion de mémoire (malloc, free, etc.)",
          "Fonctions d'entrée/sortie de base"
        ]
      },
      {
        id: 3,
        title: "Ordinateur pour Jeu d'échec",
        description: "Développement d'un moteur d'échecs en Java avec intelligence artificielle capable d'analyser et de jouer des parties complètes.",
        longDescription: "Ce projet consistait à développer un moteur d'échecs complet en Java, incluant une interface graphique et une intelligence artificielle. L'IA utilise l'algorithme minimax avec élagage alpha-bêta pour déterminer les meilleurs coups possibles. Le projet comprend également une notation complète des parties et la possibilité de rejouer des matchs célèbres.",
        image: "/images/projet-3.webp",
        link: "#",
        github: "#",
        technologies: ["Java", "IA", "Algorithmique"],
        features: [
          "Interface graphique intuitive",
          "IA basée sur l'algorithme minimax",
          "Notation des parties aux formats standards",
          "Possibilité de jouer contre l'ordinateur ou un autre joueur"
        ]
      },
      {
        id: 4,
        title: "PorteFollio",
        description: "Développement d'un moteur d'échecs en Java avec intelligence artificielle capable d'analyser et de jouer des parties complètes.",
        longDescription: "Ce projet consistait à développer un moteur d'échecs complet en Java, incluant une interface graphique et une intelligence artificielle. L'IA utilise l'algorithme minimax avec élagage alpha-bêta pour déterminer les meilleurs coups possibles. Le projet comprend également une notation complète des parties et la possibilité de rejouer des matchs célèbres.",
        image: "#",
        link: "#",
        github: "#",
        technologies: ["HTML", "CSS"],
        features: [
          "Interface graphique intuitive",
          "IA basée sur l'algorithme minimax",
          "Notation des parties aux formats standards",
          "Possibilité de jouer contre l'ordinateur ou un autre joueur"
        ]
      }
    ],
    
    // Compétences techniques
    skillCategories: [
      {
        id: "languages",
        name: "Langages",
        skills: [
          { name: "JavaScript", level: 90, icon: "devicon-javascript-plain colored" },
          { name: "TypeScript", level: 85, icon: "devicon-typescript-plain colored" },
          { name: "Python", level: 80, icon: "devicon-python-plain colored" },
          { name: "Java", level: 75, icon: "devicon-java-plain colored" },
          { name: "C++", level: 70, icon: "devicon-cplusplus-plain colored" },
          { name: "C", level: 65, icon: "devicon-c-plain colored" }
        ]
      },
      {
        id: "frontend",
        name: "Frontend",
        skills: [
          { name: "React", level: 90, icon: "devicon-react-original colored" },
          { name: "HTML", level: 95, icon: "devicon-html5-plain colored" },
          { name: "CSS", level: 90, icon: "devicon-css3-plain colored" },
          { name: "Tailwind", level: 85, icon: "devicon-tailwindcss-plain colored" },
          { name: "Next.js", level: 80, icon: "devicon-nextjs-plain" }
        ]
      },
      {
        id: "backend",
        name: "Backend",
        skills: [
          { name: "Node.js", level: 85, icon: "devicon-nodejs-plain colored" },
          { name: "Express", level: 80, icon: "devicon-express-original" },
          { name: "Django", level: 75, icon: "devicon-django-plain" },
          { name: "MongoDB", level: 70, icon: "devicon-mongodb-plain colored" },
          { name: "MySQL", level: 80, icon: "devicon-mysql-plain colored" }
        ]
      },
      {
        id: "tools",
        name: "Outils",
        skills: [
          { name: "Git", level: 90, icon: "devicon-git-plain colored" },
          { name: "Docker", level: 75, icon: "devicon-docker-plain colored" },
          { name: "VS Code", level: 95, icon: "devicon-vscode-plain colored" },
          { name: "Linux", level: 80, icon: "devicon-linux-plain" },
          { name: "Figma", level: 70, icon: "devicon-figma-plain colored" }
        ]
      }
    ],
    
    // Formation
    education: [
      {
        degree: "Ingénieur en Informatique",
        institution: "ESIEA",
        period: "2022 - Présent",
        description: "Spécialisation en développement logiciel et cybersécurité.",
      },
      {
        degree: "DUT Informatique",
        institution: "IUT de Paris",
        period: "2020 - 2022",
        description: "Formation en programmation, algorithmique, et bases de données.",
      }
    ],
    
    // Expérience professionnelle
    experiences: [
      {
        title: "Développeur Full Stack (Stage)",
        company: "Tech Solutions",
        period: "Juin 2024 - Septembre 2024",
        description: "Développement d'une application web utilisant React et Node.js.",
        tasks: [
          "Implémentation de fonctionnalités front-end avec React",
          "Création d'API RESTful avec Express.js",
          "Intégration avec une base de données MongoDB"
        ]
      },
      {
        title: "Développeur Web (Projet)",
        company: "Projet Universitaire",
        period: "Janvier 2024 - Mai 2024",
        description: "Développement d'une plateforme de gestion de projets pour étudiants.",
        tasks: [
          "Conception de l'architecture technique",
          "Mise en place d'une base de données relationnelle",
          "Développement de l'interface utilisateur"
        ]
      }
    ],
    
    // Paramètres du thème
    theme: {
      // Couleurs principales (à adapter selon vos préférences)
      colors: {
        primary: "#3b82f6", // Bleu
        secondary: "#10b981", // Vert
        accent: "#6366f1", // Indigo
        background: "#ffffff", // Blanc
        text: "#1f2937", // Gris foncé
      },
      // Typographie
      fonts: {
        body: "Inter, sans-serif",
        heading: "Inter, sans-serif",
        monospace: "Fira Code, monospace",
      },
      // Animation (durées en ms)
      animation: {
        fast: 150,
        normal: 300,
        slow: 500,
      }
    }
  };