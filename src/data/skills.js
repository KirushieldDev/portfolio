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
        icon: realiserIcon,
    },
    {
        id: "optimiser",
        title: "Optimiser",
        color: "#e65100",
        description:
            "Proposer des applications informatiques optimisées en fonction de critères spécifiques: temps d'exécution, précision, consommation de ressources..",
        icon: optimiserIcon,
    },
    {
        id: "administrer",
        title: "Administrer",
        color: "#ffd600",
        description:
            "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation",
        icon: administrerIcon,
    },
    {
        id: "gerer",
        title: "Gérer",
        color: "#8bc34a",
        description:
            "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise",
        icon: gererIcon,
    },
    {
        id: "conduire",
        title: "Conduire",
        color: "#1a237e",
        description:
            "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles",
        icon: conduireIcon,
    },
    {
        id: "collaborer",
        title: "Collaborer",
        color: "#4a148c",
        description:
            "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique",
        icon: collaborerIcon,
    },
];

export default skills;
