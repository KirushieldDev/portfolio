import skills from "./skills";
import startripImg from "../assets/images/startrip.png";
import billsImg from "../assets/images/bills.png";
import silverloveImg from "../assets/images/silverlove.png";
import wikilinksImg from "../assets/images/wikilinks.png";
import traintranImg from "../assets/images/traintran.svg";

// Function to get skill information by ID
const getSkillInfo = (skillId) => {
    const skill = skills.find((s) => s.id === skillId);
    return skill
        ? { id: skill.id, title: skill.title, color: skill.color }
        : null;
};

const projects = [
    {
        id: "startrip",
        title: "StarTrip",
        description:
            "Plateforme de réservation de voyages interplanétaires inspirée de Star Wars. Permet aux utilisateurs de rechercher, planifier et réserver des voyages entre différentes planètes de la galaxie avec une carte galactique interactive.",
        image: startripImg,
        link: "https://github.com/KirushieldDev/StarTrip",
        skills: ["realiser", "optimiser", "gerer"],
        features: [
            "Recherche de voyages entre planètes",
            "Multiples options d'itinéraires avec différents vaisseaux",
            "Système de panier et de gestion des réservations",
            "Visualisation interactive de la carte galactique",
        ],
        challenges:
            "Le plus grand défi de ce projet a été l'utilisation simultanée de plusieurs langages de programmation : Java pour la création du graphe, C pour l'implémentation de l'algorithme du plus court chemin, et les technologies web classiques pour l'interface. L'intégration de ces différentes parties dans un système cohérent a représenté une difficulté technique majeure.",
        learnings:
            "Ce projet m'a permis de maîtriser l'intégration de bibliothèques de cartographie et de visualisation de données. J'ai également approfondi mes compétences en conception d'interfaces utilisateur thématiques et en gestion de données complexes.",
    },
    {
        id: "bills",
        title: "B.I.L.L.S.",
        description:
            "Portail web pour la visualisation de flux monétaires bancaires, permettant aux entreprises de suivre leurs transactions et activités monétiques. Projet réalisé dans le cadre du module 'Qualité de développement' à l'université.",
        image: billsImg,
        link: "https://github.com/Galaktik-hub/B2-S3-BILLS",
        skills: ["realiser", "gerer", "conduire"],
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
        skills: ["realiser", "optimiser", "gerer"],
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
        skills: ["realiser", "gerer", "collaborer"],
        features: [
            "Profils utilisateurs adaptés aux séniors",
            "Système de calendrier et réservation d'activités",
            "Messagerie instantanée entre utilisateurs",
            "Interface simplifiée et accessible",
        ],
        challenges:
            "La principale difficulté de ce projet a été l'utilisation de FullCalendar pour le système de réservation d'activités, une première expérience pour l'équipe. La sauvegarde des dates de naissance et autres informations dans la base de données. La conception d'une interface adaptée aux séniors tout en conservant une expérience utilisateur moderne a nécessité une réflexion approfondie.",
    },
    {
        id: "traintran",
        title: "TrainTran",
        description:
            "Plateforme de réservation de trains utilisant une base de données NoSQL et intégrant des API externes pour récupérer les informations sur les trajets disponibles.",
        image: traintranImg,
        link: "https://github.com/KirushieldDev/Train-tran",
        skills: ["realiser", "gerer", "optimiser"],
        features: [
            "Recherche et réservation de billets de train",
            "Intégration d'API externes pour les données de trajets",
            "Gestion des utilisateurs et des réservations",
            "Base de données NoSQL pour la flexibilité des données",
        ],
        challenges:
            "La mise en pratique des concepts NoSQL dans un contexte réel a été le principal défi de ce projet. L'intégration d'API externes pour les données de trajets et la synchronisation des informations en temps réel ont également nécessité une approche technique rigoureuse.",
    },
];

const enrichedProjects = projects.map((project) => {
    return {
        ...project,
        skillsInfo: project.skills.map((skillId) => getSkillInfo(skillId)),
    };
});

export default enrichedProjects;
