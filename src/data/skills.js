import realiserIcon from "../assets/icons/realiser.svg";
import optimiserIcon from "../assets/icons/optimiser.svg";
import administrerIcon from "../assets/icons/administrer.svg";
import gererIcon from "../assets/icons/gerer.svg";
import conduireIcon from "../assets/icons/conduire.svg";
import collaborerIcon from "../assets/icons/collaborer.svg";

const skills = [
    {
        id: "realiser",
        title: "Réaliser",
        color: "#b71c1c",
        description:
            "Développer - c'est-à-dire concevoir, coder, tester et intégrer - une solution informatique pour un client.",
        longDescription:
            "La compétence Réaliser consiste à développer des solutions informatiques complètes. Cela inclut la conception, le codage, les tests et l'intégration des fonctionnalités selon les besoins du client. Elle implique une maîtrise des langages de programmation, des outils de développement et des bonnes pratiques. C'est une compétence centrale du métier d'informaticien. Elle permet de concrétiser une idée en une application fonctionnelle.",
        icon: realiserIcon,
        keySkills: [
            {
                title: "Elaborer une application informatique",
                description:
                    "Concevoir et développer des solutions informatiques complètes",
            },
            {
                title: "Faire évoluer une application informatique",
                description:
                    "Adapter et améliorer les fonctionnalités existantes selon les besoins",
            },
            {
                title: "Maintenir en conditions opérationnelles",
                description:
                    "Assurer le bon fonctionnement et la stabilité des applications",
            },
        ],
        technologies: [
            "JavaScript",
            "React",
            "Node.js",
            "Java",
            "Python",
            "Git",
            "Docker",
            "CI/CD",
        ],
        projectIds: ["startrip", "bills"],
    },
    {
        id: "optimiser",
        title: "Optimiser",
        color: "#e65100",
        description:
            "Proposer des applications informatiques optimisées en fonction de critères spécifiques: temps d'exécution, précision, consommation de ressources..",
        longDescription:
            "L'optimisation vise à améliorer les performances des applications informatiques. Que ce soit en réduisant le temps d'exécution, la consommation de mémoire ou en augmentant la précision, l'objectif est d'obtenir un système plus efficace. Cette compétence demande rigueur, analyse et une bonne compréhension des algorithmes. Elle est souvent sollicitée pour les projets exigeants. Savoir optimiser, c'est savoir aller plus loin que 'faire fonctionner'.",
        icon: optimiserIcon,
        keySkills: [
            {
                title: "Améliorer les performances",
                description:
                    "Optimiser les programmes dans des contextes contraints",
            },
            {
                title: "Limiter l'impact environnemental",
                description:
                    "Réduire la consommation de ressources des applications informatiques",
            },
            {
                title: "Mettre en place des applications efficaces",
                description:
                    "Développer des solutions informatiques adaptées et performantes",
            },
        ],
        technologies: [
            "Algorithmes",
            "Structures de données",
            "Profilers",
            "Caching",
            "Indexation",
            "Parallélisation",
        ],
        projectIds: ["travia", "startrip"],
    },
    {
        id: "administrer",
        title: "Administrer",
        color: "#ffd600",
        description:
            "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation",
        longDescription:
            "Administrer, c'est gérer l'ensemble des infrastructures informatiques d'une organisation. Cela comprend l'installation, la configuration et la maintenance des serveurs, réseaux, bases de données, etc. Cette compétence garantit la stabilité, la sécurité et la disponibilité des systèmes. Elle demande de la méthode et de la réactivité. C'est un pilier invisible mais essentiel du bon fonctionnement d'un système informatique.",
        icon: administrerIcon,
        keySkills: [
            {
                title: "Déployer une nouvelle architecture technique",
                description:
                    "Concevoir et mettre en place des infrastructures adaptées aux besoins",
            },
            {
                title: "Améliorer une infrastructure existante",
                description: "Optimiser et faire évoluer les systèmes en place",
            },
            {
                title: "Sécuriser les applications et les services",
                description:
                    "Protéger les données et systèmes contre les menaces",
            },
        ],
        technologies: [
            "Linux",
            "Windows Server",
            "AWS",
            "Azure",
            "Virtualisation",
            "Firewall",
            "VPN",
            "DNS",
        ],
        projectIds: ["network-tps"],
    },
    {
        id: "gerer",
        title: "Gérer",
        color: "#8bc34a",
        description:
            "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise",
        longDescription:
            "La gestion des données est cruciale dans un monde numérique. Cette compétence consiste à structurer, administrer et exploiter les données pour en tirer de l'information utile. Elle s'appuie sur des outils comme les bases de données relationnelles ou les systèmes de reporting. Bien gérer ses données, c'est assurer un pilotage éclairé de l'activité. C'est une compétence au carrefour entre la technique et la stratégie.",
        icon: gererIcon,
        keySkills: [
            {
                title: "Lancer un projet",
                description:
                    "Initier et structurer des projets de gestion de données",
            },
            {
                title: "Sécuriser les données",
                description:
                    "Mettre en place des protocoles de protection des informations",
            },
            {
                title: "Exploiter des données pour la prise de décisions",
                description:
                    "Analyser et transformer les données en insights actionnables",
            },
        ],
        technologies: [
            "SQL",
            "NoSQL",
            "ETL",
            "Data Warehouse",
            "Power BI",
            "Tableau",
            "MongoDB",
            "PostgreSQL",
        ],
        projectIds: ["travia"],
    },
    {
        id: "conduire",
        title: "Conduire",
        color: "#1a237e",
        description:
            "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles",
        longDescription:
            "Conduire un projet informatique, c'est savoir l'organiser, le suivre et le mener à terme. Cette compétence repose sur des méthodes classiques (cycle en V) ou agiles (Scrum, Kanban). Elle implique la gestion des ressources, des délais, des risques et de la qualité. Elle nécessite aussi des compétences en communication. Être capable de piloter un projet, c'est faire le lien entre technique et besoin client.",
        icon: conduireIcon,
        keySkills: [
            {
                title: "Lancer un nouveau projet",
                description: "Initialiser et cadrer des projets informatiques",
            },
            {
                title: "Piloter le maintien d'un projet",
                description:
                    "Assurer la maintenance en condition opérationnelle",
            },
            {
                title: "Faire évoluer un système d'information",
                description:
                    "Adapter les systèmes aux nouveaux besoins de l'organisation",
            },
        ],
        technologies: [
            "Jira",
            "Trello",
            "MS Project",
            "GitHub Projects",
            "Scrum",
            "Kanban",
            "Lean",
            "UML",
        ],
        projectIds: ["bills", "wikilinks", "silverlove", "traintran"],
    },
    {
        id: "collaborer",
        title: "Collaborer",
        color: "#4a148c",
        description:
            "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique",
        longDescription:
            "La compétence Collaborer est essentielle dans un environnement de travail moderne. Elle concerne le travail en équipe, la communication, la répartition des tâches et l'entraide. Elle permet de tirer parti des forces de chacun pour atteindre un objectif commun. Travailler efficacement en groupe nécessite écoute, adaptabilité et esprit d'équipe. C'est une soft skill indispensable à tout informaticien.",
        icon: collaborerIcon,
        keySkills: [
            {
                title: "Lancer un nouveau projet",
                description: "Initier des projets en mobilisant une équipe",
            },
            {
                title: "Organiser son travail en relation avec l'équipe",
                description:
                    "Coordonner ses activités avec celles des autres membres",
            },
            {
                title: "Elaborer, gérer et transmettre de l'information",
                description:
                    "Communiquer efficacement au sein de l'équipe et avec les parties prenantes",
            },
        ],
        technologies: [
            "Slack",
            "Microsoft Teams",
            "Google Workspace",
            "Confluence",
            "Git",
            "Code Review",
            "Pair Programming",
        ],
        projectIds: ["silverlove", "traintran"],
    },
];

export default skills;
