// Fichier de configuration du thème
export const themeConfig = {
    // Informations personnelles
    personalInfo: {
      name: "GUILLARD Nicolas",
      title: "Étudiant en informatique à l'ESIEA en 3ème Année",
      subtitle: "Développeur",
      email: "contact@nicolasguillard.com",
      phone: "+33 6 12 34 56 78",
      location: "Laval, France",
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
        description: "Conception et développement d'un portfolio web moderne et responsive utilisant React, Next.js et Tailwind CSS pour présenter mes projets et compétences.",
        longDescription: "Ce projet représente l'aboutissement de mes compétences en développement web moderne. J'ai conçu et développé un portfolio personnel complet en utilisant les technologies React et Next.js, avec un design responsive grâce à Tailwind CSS. Ce site web sert de vitrine pour mes projets, compétences et expériences, tout en démontrant ma maîtrise des frameworks et bibliothèques front-end actuels. L'interface utilisateur a été soigneusement conçue pour offrir une expérience utilisateur intuitive et des animations fluides qui mettent en valeur mon travail.",
        image: "#",
        link: "https://port-follio-6lhzs0xa0-nicolas-projects-0f6780cb.vercel.app/",
        github: "https://github.com/Nicolas2027g/PortFollio",
        technologies: ["HTML", "CSS"],
        features: [
          "Design responsive s'adaptant à tous les appareils",
          "Animations fluides avec Framer Motion",
          "Galerie de projets interactive avec filtres par technologie",
          "Mode sombre/clair pour une meilleure expérience utilisateur",
          "Formulaire de contact fonctionnel"
        ]
      },
      {
        id: 5,
        title: "Restaurant Riz_Kolo",
        description: "Création d'un site web vitrine responsive utilisant Bootstrap pour une entreprise locale, offrant une expérience utilisateur optimisée sur tous les appareils et un design attractif pour convertir les visiteurs en clients.",
        longDescription: "Ce projet consistait à concevoir et développer un site web vitrine complet pour une entreprise locale cherchant à renforcer sa présence numérique. En utilisant le framework Bootstrap, j'ai créé une interface entièrement responsive qui s'adapte parfaitement à tous les types d'écrans, des smartphones aux grands moniteurs. Le design moderne et épuré met en valeur les services et produits de l'entreprise tout en facilitant la navigation des utilisateurs. J'ai accordé une attention particulière à l'expérience utilisateur, en optimisant les temps de chargement et en structurant l'information de manière intuitive. Le site intègre des appels à l'action stratégiquement placés pour maximiser les conversions, qu'il s'agisse de demandes de devis, d'inscriptions à une newsletter ou de prises de rendez-vous. Des éléments interactifs comme des galeries d'images, des témoignages clients défilants et une carte interactive renforcent l'engagement des visiteurs et leur donnent envie de découvrir l'entreprise physiquement. Ce projet a également nécessité l'intégration d'un formulaire de contact sécurisé et d'un système de réservation, ainsi que l'optimisation SEO pour améliorer le classement du site dans les moteurs de recherche.",
        image: "#",
        link: "https://restaurantrizkolo-lrufv4y6b-nicolas-projects-0f6780cb.vercel.app/",
        github: "https://github.com/Nicolas2027g/Le_RizKolo",
        technologies: ["HTML", "CSS"],
        features: [
          "Design responsive s'adaptant à tous les appareils (mobile, tablette, desktop)",
          "Navigation intuitive avec menu hamburger sur mobile",
          "Carrousel d'images mettant en valeur les produits/services phares",
          "Section de témoignages clients avec système de notation",
          "Galerie de photos interactive avec lightbox",
          "Carte interactive indiquant l'emplacement et les informations d'accès",
          "Formulaire de contact avec validation des données côté client",
          "Système de réservation/prise de rendez-vous en ligne",
          "Intégration des réseaux sociaux avec boutons de partage"
        ]
      },
      {
        id: 6,
        title: "Reservation Base de Donnée",
        description: "Développement d'une application web de gestion de calendrier interactif permettant aux utilisateurs d'organiser efficacement leur emploi du temps, de planifier des événements et de recevoir des rappels, avec synchronisation multi-appareils.",
        longDescription: "Cette application web de gestion de calendrier interactif a été conçue pour répondre aux besoins des professionnels et particuliers souhaitant optimiser la gestion de leur temps. Développée avec les technologies web modernes, l'application offre une interface intuitive et réactive qui permet aux utilisateurs de visualiser, planifier et modifier facilement leurs événements et rendez-vous. Le calendrier interactif propose plusieurs vues (journalière, hebdomadaire, mensuelle) pour s'adapter aux préférences de chaque utilisateur. Les fonctionnalités de glisser-déposer permettent de déplacer ou redimensionner les événements en quelques clics, rendant la planification plus efficace. Le système intègre également un moteur de gestion des conflits qui alerte l'utilisateur en cas de chevauchement d'événements. L'application inclut un système de rappels personnalisables par email, notification push ou SMS selon les préférences de l'utilisateur. La fonction de récurrence permet de créer facilement des événements répétitifs (hebdomadaires, mensuels, annuels). De plus, les utilisateurs peuvent partager leur calendrier avec des collègues ou des proches, avec différents niveaux de permissions (lecture seule, modification). La synchronisation en temps réel entre tous les appareils assure que l'emploi du temps est toujours à jour, que l'utilisateur consulte son calendrier depuis son ordinateur, sa tablette ou son smartphone.",
        image: "#",
        link: "http://databasereservation.infinityfreeapp.com/index.php",
        github: "https://github.com/Nicolas2027g/Reservation_BDD",
        technologies: ["PHP", "MySQL"],
        features: [
          "Interface de calendrier interactive avec vues journalière, hebdomadaire et mensuelle",
          "Création d'événements par simple clic ou glisser-déposer",
          "Édition rapide des événements (titre, date, heure, durée, lieu)",
          "Système de catégorisation par couleur pour différents types d'activités",
          "Fonction de récurrence pour événements réguliers",
          "Système de rappels personnalisables (délai, méthode de notification)",
          "Détection et alerte de conflits d'horaires",
          "Partage de calendrier avec gestion des permissions",
          "Synchronisation en temps réel entre tous les appareils",
          "Mode hors-ligne avec synchronisation automatique à la reconnexion",
          "Recherche avancée d'événements par mot-clé, date ou catégorie",
          "Import/export au format standard iCal pour compatibilité avec d'autres applications"
        ]
      },
      {
        id: 7,
        title: "Social Network",
        description: "DPlateforme sociale moderne permettant aux utilisateurs de publier des messages, partager des photos, suivre d'autres membres et interagir dans un environnement fluide et responsive.",
        longDescription: "SocialNetwork SocialConnect est une application web de réseau social conçue pour offrir une expérience utilisateur complète et engageante. Ce projet met en œuvre les principes clés du développement web moderne, en combinant des fonctionnalités interactives avec un design minimaliste et intuitif. L'utilisateur peut créer des publications (texte ou photo), suivre d'autres comptes, commenter ou partager du contenu, le tout dans une interface fluide, optimisée pour tous les appareils. L objectif de ce projet est de démontrer la capacité à construire une architecture front-end solide, à gérer l état global avec efficacité (via des outils comme Redux ou Zustand), et à créer des interactions en temps réel grâce à une API performante (par exemple avec WebSocket ou Firebase). C'est un parfait exemple de projet full-stack évolutif orienté utilisateur.",
        image: "#",
        link: "https://tp-social-network-qx6b.vercel.app/",
        github: "https://github.com/Nicolas2027g/TP_Social_Network",
        technologies: ["Tailwind", "React", "Next.js", "MySQL"],
        features: [
          "Système de likes et de commentaires sur les posts",
          "Flux de publication en temps réel",
          "Authentification sécurisée (inscription / connexion)",
          "Interface responsive et moderne"
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
          { name: "PHP", level: 90, icon: "devicon-php-plain colored" },
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