import realiserIcon from '../assets/icons/realiser.svg';
import optimiserIcon from '../assets/icons/optimiser.svg';
import administrerIcon from '../assets/icons/administrer.svg';
import gererIcon from '../assets/icons/gerer.svg';
import conduireIcon from '../assets/icons/conduire.svg';
import collaborerIcon from '../assets/icons/collaborer.svg';

const skills = [
    {
        id: "realiser",
        title: "Réaliser",
        color: "#b71c1c",
        description:
            "Développer - c'est-à-dire concevoir, coder, tester et intégrer - une solution informatique pour un client.",
        longDescription: "La compétence Réaliser consiste à développer des solutions informatiques complètes. Cela inclut la conception, le codage, les tests et l'intégration des fonctionnalités selon les besoins du client. Elle implique une maîtrise des langages de programmation, des outils de développement et des bonnes pratiques. C'est une compétence centrale du métier d'informaticien. Elle permet de concrétiser une idée en une application fonctionnelle.",
        icon: realiserIcon,
        keySkills: [
            { title: "Conception", description: "Élaborer l'architecture et les spécifications techniques d'une application" },
            { title: "Développement", description: "Maîtriser les langages de programmation et frameworks modernes" },
            { title: "Tests", description: "Mettre en place des stratégies de test pour garantir la qualité du code" },
            { title: "Intégration", description: "Déployer et intégrer les solutions dans l'environnement du client" }
        ],
        technologies: ["JavaScript", "React", "Node.js", "Java", "Python", "Git", "Docker", "CI/CD"],
        projects: [
            { 
                title: "Portfolio personnel", 
                description: "Création d'un site web responsive présentant mes compétences et projets",
            },
            { 
                title: "Application web e-commerce", 
                description: "Développement d'une plateforme de vente en ligne avec panier et paiement",
            }
        ]
    },
    {
        id: "optimiser",
        title: "Optimiser",
        color: "#e65100",
        description:
            "Proposer des applications informatiques optimisées en fonction de critères spécifiques: temps d'exécution, précision, consommation de ressources..",
        longDescription: "L'optimisation vise à améliorer les performances des applications informatiques. Que ce soit en réduisant le temps d'exécution, la consommation de mémoire ou en augmentant la précision, l'objectif est d'obtenir un système plus efficace. Cette compétence demande rigueur, analyse et une bonne compréhension des algorithmes. Elle est souvent sollicitée pour les projets exigeants. Savoir optimiser, c'est savoir aller plus loin que 'faire fonctionner'.",
        icon: optimiserIcon,
        keySkills: [
            { title: "Analyse de performance", description: "Identifier les goulots d'étranglement et points critiques" },
            { title: "Algorithmes", description: "Concevoir et implémenter des algorithmes efficaces" },
            { title: "Profiling", description: "Utiliser des outils de mesure et d'analyse de performance" },
            { title: "Refactoring", description: "Restructurer le code existant pour améliorer ses performances" }
        ],
        technologies: ["Algorithmes", "Structures de données", "Profilers", "Caching", "Indexation", "Parallélisation"],
        projects: [
            { 
                title: "Optimisation d'une base de données", 
                description: "Amélioration des performances d'une base de données par l'indexation et la restructuration",
            },
            { 
                title: "Algorithme de recherche optimisé", 
                description: "Implémentation d'un algorithme de recherche avancé pour des grands volumes de données",
            }
        ]
    },
    {
        id: "administrer",
        title: "Administrer",
        color: "#ffd600",
        description:
            "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation",
        longDescription: "Administrer, c'est gérer l'ensemble des infrastructures informatiques d'une organisation. Cela comprend l'installation, la configuration et la maintenance des serveurs, réseaux, bases de données, etc. Cette compétence garantit la stabilité, la sécurité et la disponibilité des systèmes. Elle demande de la méthode et de la réactivité. C'est un pilier invisible mais essentiel du bon fonctionnement d'un système informatique.",
        icon: administrerIcon,
        keySkills: [
            { title: "Administration système", description: "Gérer les serveurs et systèmes d'exploitation" },
            { title: "Réseaux", description: "Configurer et maintenir les infrastructures réseau" },
            { title: "Sécurité", description: "Mettre en place des politiques de sécurité et de sauvegarde" },
            { title: "Monitoring", description: "Surveiller les performances et la disponibilité des systèmes" }
        ],
        technologies: ["Linux", "Windows Server", "AWS", "Azure", "Virtualisation", "Firewall", "VPN", "DNS"],
        projects: [
            { 
                title: "Mise en place d'une infrastructure cloud", 
                description: "Déploiement d'une infrastructure scalable sur AWS pour une application web",
            },
            { 
                title: "Sécurisation d'un réseau d'entreprise", 
                description: "Implémentation de politiques de sécurité et d'accès pour protéger les données sensibles",
            }
        ]
    },
    {
        id: "gerer",
        title: "Gérer",
        color: "#8bc34a",
        description:
            "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise",
        longDescription: "La gestion des données est cruciale dans un monde numérique. Cette compétence consiste à structurer, administrer et exploiter les données pour en tirer de l'information utile. Elle s'appuie sur des outils comme les bases de données relationnelles ou les systèmes de reporting. Bien gérer ses données, c'est assurer un pilotage éclairé de l'activité. C'est une compétence au carrefour entre la technique et la stratégie.",
        icon: gererIcon,
        keySkills: [
            { title: "Modélisation", description: "Concevoir des modèles de données adaptés aux besoins métier" },
            { title: "Administration de BDD", description: "Gérer et optimiser les bases de données" },
            { title: "Business Intelligence", description: "Créer des tableaux de bord et rapports d'analyse" },
            { title: "Data Mining", description: "Extraire des connaissances à partir des données brutes" }
        ],
        technologies: ["SQL", "NoSQL", "ETL", "Data Warehouse", "Power BI", "Tableau", "MongoDB", "PostgreSQL"],
        projects: [
            { 
                title: "Système de reporting commercial", 
                description: "Création d'un tableau de bord pour suivre les performances commerciales",
            },
            { 
                title: "Migration de base de données", 
                description: "Transfert et optimisation d'une base de données relationnelle vers NoSQL",
            }
        ]
    },
    {
        id: "conduire",
        title: "Conduire",
        color: "#1a237e",
        description:
            "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles",
        longDescription: "Conduire un projet informatique, c'est savoir l'organiser, le suivre et le mener à terme. Cette compétence repose sur des méthodes classiques (cycle en V) ou agiles (Scrum, Kanban). Elle implique la gestion des ressources, des délais, des risques et de la qualité. Elle nécessite aussi des compétences en communication. Être capable de piloter un projet, c'est faire le lien entre technique et besoin client.",
        icon: conduireIcon,
        keySkills: [
            { title: "Gestion de projet", description: "Planifier, organiser et suivre l'avancement des projets" },
            { title: "Méthodes agiles", description: "Appliquer les principes Scrum, Kanban ou autres méthodologies agiles" },
            { title: "Analyse des besoins", description: "Comprendre et formaliser les attentes des utilisateurs" },
            { title: "Gestion des risques", description: "Identifier, évaluer et mitiger les risques projet" }
        ],
        technologies: ["Jira", "Trello", "MS Project", "GitHub Projects", "Scrum", "Kanban", "Lean", "UML"],
        projects: [
            { 
                title: "Déploiement d'une méthode agile", 
                description: "Mise en place de Scrum dans une équipe de développement de 10 personnes",
            },
            { 
                title: "Refonte d'application métier", 
                description: "Pilotage d'un projet de modernisation d'une application critique",
            }
        ]
    },
    {
        id: "collaborer",
        title: "Collaborer",
        color: "#4a148c",
        description:
            "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique",
        longDescription: "La compétence Collaborer est essentielle dans un environnement de travail moderne. Elle concerne le travail en équipe, la communication, la répartition des tâches et l'entraide. Elle permet de tirer parti des forces de chacun pour atteindre un objectif commun. Travailler efficacement en groupe nécessite écoute, adaptabilité et esprit d'équipe. C'est une soft skill indispensable à tout informaticien.",
        icon: collaborerIcon,
        keySkills: [
            { title: "Communication", description: "Échanger efficacement avec les membres de l'équipe et les parties prenantes" },
            { title: "Travail d'équipe", description: "Contribuer positivement à la dynamique de groupe" },
            { title: "Outils collaboratifs", description: "Maîtriser les plateformes et outils de collaboration" },
            { title: "Gestion de conflits", description: "Résoudre les tensions et favoriser un environnement de travail positif" }
        ],
        technologies: ["Slack", "Microsoft Teams", "Google Workspace", "Confluence", "Git", "Code Review", "Pair Programming"],
        projects: [
            { 
                title: "Hackathon inter-écoles", 
                description: "Participation à un challenge de développement en équipe pluridisciplinaire",
            },
            { 
                title: "Mise en place d'un workflow Git", 
                description: "Implémentation d'un processus de collaboration pour le développement logiciel",
            }
        ]
    },
];

export default skills;
