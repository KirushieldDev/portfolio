import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import sliderImage from "../assets/images/slider.png";
import profilePhoto from "../assets/images/photo_profil.png";
import Timeline from "../components/Timeline";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import timelineItems from "../data/timeline";
import skills from "../data/skills";
import projects from "../data/projects";

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Handle hash navigation when component mounts or location changes
    useEffect(() => {
        // Check if there's a hash in the URL
        if (location.hash) {
            // Get the element with the ID matching the hash
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                // Scroll to that element
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    const scrollToAbout = () => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    };

    const handleSkillClick = (skillId) => {
        navigate(`/${skillId}`);
    };

    return (
        <div>
            {/* Hero Section */}
            <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={sliderImage}
                        alt="Background"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>

                <div className="text-center z-10 px-4">
                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight text-glow">
                        ELANKEETHAN Kirushikesan
                    </h1>
                    <p className="text-3xl font-semibold text-gray-300 mt-4">
                        Étudiant & Apprenti développeur
                    </p>
                </div>

                {/* Arrow */}
                <div
                    className="absolute bottom-10 cursor-pointer"
                    onClick={scrollToAbout}
                >
                    <svg
                        className="w-10 h-10 text-white bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7 7 7-7"
                        />
                    </svg>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="py-20 px-4 bg-gray-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-10 text-center">
                        À propos de moi
                    </h2>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="w-48 h-48 flex-shrink-0">
                                <img
                                    src={profilePhoto}
                                    alt="Photo de profil"
                                    className="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-lg"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-300 text-lg mb-6">
                                    Je m'appelle ELANKEETHAN Kirushikesan et je
                                    suis actuellement en deuxième année de BUT
                                    informatique à{" "}
                                    <a
                                        href="https://iut.univ-gustave-eiffel.fr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        l'IUT de Marne-la-vallée
                                    </a>{" "}
                                    en alternance chez{" "}
                                    <a
                                        href="https://dessinetonmeuble.fr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline"
                                    >
                                        Aryga
                                    </a>
                                    , une entreprise spécialisée dans la
                                    conception de meubles sur mesure en ligne.
                                </p>
                                <p className="text-gray-300 text-lg">
                                    Je suis passionné par le développement web
                                    et j'aimerais poursuivre mes études en école
                                    d'ingénieur à l'issue de mon BUT.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Path Section - Timeline */}
            <div id="path" className="py-20 px-4 bg-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-10 text-center">
                        Mon Parcours
                    </h2>
                    <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
                        <Timeline items={timelineItems} />
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div id="skills" className="py-20 px-4 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-10 text-center">
                        Compétences
                    </h2>
                    <p className="text-gray-300 text-lg text-center mb-10 max-w-3xl mx-auto">
                        Le BUT Informatique est structuré autour de 6
                        compétences fondamentales qui représentent ma formation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                id={skill.id}
                                title={skill.title}
                                color={skill.color}
                                description={skill.description}
                                icon={skill.icon}
                                onDetailsClick={handleSkillClick}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="py-20 px-4 bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-10 text-center">
                        Mes Projets
                    </h2>
                    <p className="text-gray-300 text-lg text-center mb-10 max-w-3xl mx-auto">
                        Découvrez une sélection de mes projets personnels et académiques
                    </p>
                    
                    {/* Projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                link={project.link}
                                skillsInfo={project.skillsInfo}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
