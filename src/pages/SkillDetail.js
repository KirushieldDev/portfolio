import React, { useEffect } from "react";
import skills from "../data/skills";
import BackButton from "../components/BackButton";

const SkillDetail = ({ skillId }) => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Find the skill that matches the ID from props
    const skill = skills.find((s) => s.id === skillId);

    // If no matching skill is found, display an error message
    if (!skill) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
                <h1 className="text-3xl font-bold mb-4">Skill not found</h1>
                <p className="mb-6">
                    The skill you're looking for doesn't exist.
                </p>
                <BackButton to="/" text="Retour à l'accueil" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white pb-16">
            {/* Back to home button */}
            <BackButton to="/#skills" text="Retour à l'accueil" />

            {/* Header with icon and title */}
            <div
                className="w-full py-24 px-8 flex items-center justify-center gap-6"
                style={{ backgroundColor: skill.color }}
            >
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center p-5">
                        <img
                            src={skill.icon}
                            alt={`${skill.title} icon`}
                            className="w-full h-full"
                            style={{ filter: "brightness(0) invert(1)" }}
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white text-center md:text-left">
                            {skill.title}
                        </h1>
                        <p className="text-xl text-white text-opacity-80 mt-4 max-w-2xl">
                            {skill.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-6xl mx-auto p-8">
                {/* Detailed description */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                        Aperçu
                    </h2>
                    <div className="text-gray-300 leading-relaxed text-lg">
                        <p className="mb-4">{skill.longDescription}</p>
                    </div>
                </div>

                {/* Key skills */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                        Compétences
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skill.keySkills &&
                            skill.keySkills.map((keySkill, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                                >
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                        style={{
                                            backgroundColor: skill.color,
                                        }}
                                    >
                                        <span className="text-white font-bold">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-white mb-2">
                                            {keySkill.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {keySkill.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Related projects */}
                <div className="mb-16">
                    <h2 className="text-3xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                        Projets liés
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skill.projects &&
                            skill.projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500 transition-colors shadow-lg"
                                >
                                    {project.image && (
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-xl font-medium text-white mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 mb-4">
                                            {project.description}
                                        </p>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium inline-flex items-center"
                                                style={{
                                                    color: skill.color,
                                                }}
                                            >
                                                Voir le projet
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 ml-1"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Associated technologies */}
                <div>
                    <h2 className="text-3xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
                        Technologies
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {skill.technologies &&
                            skill.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full text-md font-medium"
                                    style={{
                                        backgroundColor: `${skill.color}40`,
                                        color: "white",
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetail;
