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
            "L'intégration d'une carte galactique interactive a nécessité l'adaptation de la bibliothèque Leaflet pour représenter un univers fictif. La gestion des calculs d'itinéraires entre planètes a demandé l'implémentation d'algorithmes d'optimisation complexes.",
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
            "La gestion d'un grand volume de données financières et leur visualisation de manière performante a été un défi majeur. L'implémentation d'une méthodologie Agile Scrum dans un contexte universitaire a également demandé une organisation rigoureuse de l'équipe.",
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
            "L'apprentissage simultané de React et des bases de données NoSQL a représenté un défi important. La synchronisation des données en temps réel entre les joueurs et l'adaptation de l'interface pour le mobile ont également été des aspects techniques complexes à gérer.",
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
            "La conception d'une interface adaptée aux séniors tout en conservant une expérience utilisateur moderne a été un défi majeur. Le développement du système de calendrier et de réservation a également nécessité une gestion complexe des états et des conflits potentiels.",
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
            "L'intégration d'API externes et la synchronisation des données en temps réel ont été des défis techniques importants. L'utilisation d'une base de données NoSQL pour un projet de cette envergure a également nécessité une conception soigneuse du schéma de données.",
    },
];

const enrichedProjects = projects.map((project) => {
    return {
        ...project,
        skillsInfo: project.skills.map((skillId) => getSkillInfo(skillId)),
    };
});

export default enrichedProjects;
