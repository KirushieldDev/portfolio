import networkTPsImg from "../assets/images/network.png";
import startripImg from "../assets/images/startrip.png";
import traviaImg from "../assets/images/travia.png";
import billsImg from "../assets/images/bills.png";
import silverloveImg from "../assets/images/silverlove.png";
import wikilinksImg from "../assets/images/wikilinks.png";
import traintranImg from "../assets/images/traintran.svg";

// Import des captures d'écran
import startripScreen1 from "../assets/images/startrip_screen1.png";
import traviaScreen1 from "../assets/images/travia_screen1.png";
import traviaScreen2 from "../assets/images/travia_screen2.png";
import billsScreen1 from "../assets/images/bills_screen1.png";
import billsScreen2 from "../assets/images/bills_screen2.png";
import wikilinksScreen1 from "../assets/images/wikilinks_screen1.png";
import silverloveScreen1 from "../assets/images/silverlove_screen1.png";
import silverloveScreen2 from "../assets/images/silverlove_screen2.png";
import traintranScreen1 from "../assets/images/traintran_screen1.png";

const skillsInfo = {
    realiser: { id: "realiser", title: "Réaliser", color: "#b71c1c" },
    optimiser: { id: "optimiser", title: "Optimiser", color: "#e65100" },
    administrer: { id: "administrer", title: "Administrer", color: "#ffd600" },
    gerer: { id: "gerer", title: "Gérer", color: "#8bc34a" },
    conduire: { id: "conduire", title: "Conduire", color: "#1a237e" },
    collaborer: { id: "collaborer", title: "Collaborer", color: "#4a148c" },
};

// Function to get skill information by ID
const getSkillInfo = (skillId) => {
    return skillsInfo[skillId] || null;
};

const projects = [
    {
        id: "network-tps",
        title: "TPs de Réseaux",
        description:
            "Des travaux pratiques sur les réseaux informatiques, incluant la configuration des serveurs DHCP, DNS, HTTP. Misen en place d'un proxy, VPN",
        image: networkTPsImg,
        link: "",
        skills: ["administrer"],
        screenshots: [networkTPsImg],
        skillReasons: {
            administrer:
                "Ces travaux pratiques démontrent ma capacité à configurer, maintenir et sécuriser des infrastructures réseau.",
        },
    },
    {
        id: "travia",
        title: "Travia",
        description:
            "Version avancée de StarTrip avec un système de connexion complet, récupération de mot de passe et intégration d'API pour récupérer des informations sur les utilisateurs.",
        image: traviaImg,
        link: "https://github.com/KirushieldDev/Travia",
        skills: ["gerer", "optimiser"],
        screenshots: [traviaScreen1, traviaScreen2],
        skillReasons: {
            gerer: "Ce projet montre ma capacité à implémenter une base de données efficace pour stocker les informations des utilisateurs et gérer les réservations",
            optimiser:
                "Ce projet montre ma capacité à améliorer les performances de l'application en optimisant les requêtes et trouver le chemin le plus court",
        },
        features: [
            "Système de connexion avancé avec authentification sécurisée",
            "Fonctionnalité de récupération de mot de passe par email",
            "Intégration d'API pour les informations d'utilisateurs",
            "Recherche et réservation de voyages entre planètes",
            "Interface utilisateur intuitive et responsive",
        ],
        challenges:
            "L'implémentation d'un système d'authentification sécurisé et la gestion des tokens. L'intégration d'API et la gestion des erreurs lors des appels API.",
    },
    {
        id: "startrip",
        title: "StarTrip",
        description:
            "Plateforme de réservation de voyages interplanétaires inspirée de Star Wars. Permet aux utilisateurs de rechercher, planifier et réserver des voyages entre différentes planètes de la galaxie avec une carte galactique interactive.",
        image: startripImg,
        link: "https://github.com/KirushieldDev/StarTrip",
        skills: ["realiser", "optimiser"],
        screenshots: [startripScreen1],
        skillReasons: {
            realiser:
                "Ce projet montre ma capacité à développer une application complète de réservation de voyages interplanétaires avec une interface utilisateur intuitive en utilisant des cartes pour la visualisation",
            optimiser:
                "Ce projet montre ma capacité à améliorer les performances de l'application en optimisant les requêtes et en trouvant le chemin le plus court",
        },
        features: [
            "Recherche de voyages entre planètes",
            "Multiples options d'itinéraires avec différents vaisseaux",
            "Système de panier et de gestion des réservations",
            "Visualisation interactive de la carte galactique",
        ],
        challenges:
            "Le plus grand défi de ce projet a été l'utilisation simultanée de plusieurs langages de programmation : Java pour la création du graphe, C pour l'implémentation de l'algorithme du plus court chemin, et les technologies web classiques pour l'interface. L'intégration de ces différentes parties dans un système cohérent a représenté une difficulté technique majeure.",
    },
    {
        id: "bills",
        title: "B.I.L.L.S.",
        description:
            "Portail web pour la visualisation de flux monétaires bancaires, permettant aux entreprises de suivre leurs transactions et activités monétiques. Projet réalisé dans le cadre du module 'Qualité de développement' à l'université.",
        image: billsImg,
        link: "https://github.com/Galaktik-hub/B2-S3-BILLS",
        skills: ["realiser", "conduire"],
        screenshots: [billsScreen1, billsScreen2],
        skillReasons: {
            realiser:
                "Ce projet montre ma capacité à développer une application web pour suivre les flux monétaires bancaires des entreprises en utilisant des outils comme AG Grid, une technologie que j'ai découvert pour ce projet",
            conduire:
                "Ce projet est une mise en pratique de la méthodologie Agile Scrum dans un contexte universitaire, ce qui a nécessité une organisation rigoureuse de l'équipe, avec des tickets et des sprints",
        },
        features: [
            "Suivi des activités monétiques (transactions, impayés) pour les entreprises",
            "Extraction de données au format CSV et XLS",
            "Génération d'états et de rapports en PDF",
            "Portail utilisateur avec authentification",
        ],
        challenges:
            "Ce projet a été notre première expérience avec la méthodologie Agile Scrum dans un contexte universitaire, ce qui a nécessité une organisation rigoureuse de l'équipe.",
    },
    {
        id: "wikilinks",
        title: "WikiLinks",
        description:
            "Jeu multijoueur basé sur les articles Wikipedia où les joueurs doivent naviguer d'un article à un autre en suivant uniquement les liens internes. Premier projet utilisant React, une base de données NoSQL et incluant un développement mobile Android.",
        image: wikilinksImg,
        link: "https://github.com/Galaktik-hub/wikilinks",
        skills: ["conduire", "collaborer"],
        screenshots: [wikilinksScreen1],
        skillReasons: {
            conduire:
                "Pour ce projet, nous avons dû utiliser plusieurs langages que nous venions de découvrir, ce qui nécessitait une bonne communication entre les membres de l'équipe et une gestion efficace",
            collaborer:
                "Pour ce projet, nous avons utilisé la méthodologie Agile Scrum dans un contexte universitaire, ce qui a nécessité une organisation rigoureuse de l'équipe",
        },
        features: [
            "Mode multijoueur en temps réel",
            "Navigation entre articles Wikipedia",
            "Classement des joueurs et statistiques",
            "Version mobile Android",
        ],
        challenges:
            "Ce projet a été notre première expérience avec React et les bases de données NoSQL. L'intégration de l'API Wikipedia et l'utilisation des WebSockets pour la communication en temps réel entre les joueurs ont représenté des défis techniques majeurs. L'adaptation de l'interface pour le mobile a également nécessité une approche spécifique.",
    },
    {
        id: "silverlove",
        title: "SilverLove",
        description:
            "Application de rencontres dédiée aux séniors, facilitant les connexions et l'organisation d'activités. Comprend un système de calendrier pour la réservation d'activités et une fonctionnalité de chat pour la communication entre utilisateurs.",
        image: silverloveImg,
        link: "https://github.com/JulienS-Code/SilverLove",
        skills: [],
        screenshots: [silverloveScreen1, silverloveScreen2],
        skillReasons: {},
        features: [
            "Profils utilisateurs adaptés aux séniors",
            "Système de calendrier et réservation d'activités",
            "Messagerie instantanée entre utilisateurs",
            "Interface simplifiée et accessible",
        ],
        challenges:
            "La principale difficulté de ce projet a été l'utilisation de FullCalendar pour le système de réservation d'activités, une première expérience pour l'équipe. La sauvegarde des dates de naissance et autres informations dans la base de données.",
    },
    {
        id: "traintran",
        title: "TrainTran",
        description:
            "Plateforme de réservation de trains utilisant une base de données NoSQL et intégrant des API externes pour récupérer les informations sur les trajets disponibles.",
        image: traintranImg,
        link: "https://github.com/KirushieldDev/Train-tran",
        skills: ["conduire", "collaborer"],
        screenshots: [traintranScreen1],
        skillReasons: {
            conduire:
                "Nous avons dû bien gérer ce projet car il devait être livré dans un délai très court, ce qui a renforcé cette compétence.",
            collaborer:
                "Comme ce projet devait être livré très rapidement, une communication efficace entre les membres de l'équipe était essentielle.",
        },
        features: [
            "Recherche et réservation de billets de train",
            "Intégration d'API externes pour les données de trajets",
            "Gestion des utilisateurs et des réservations",
            "Base de données NoSQL pour la flexibilité des données",
        ],
        challenges:
            "La mise en pratique des concepts NoSQL. L'intégration d'API externes pour les données de trajets et la synchronisation des informations en temps réel ont également nécessité une approche technique rigoureuse.",
    },
];

const enrichedProjects = projects.map((project) => {
    return {
        ...project,
        skillsInfo: project.skills.map((skillId) => getSkillInfo(skillId)),
    };
});

export default enrichedProjects;
