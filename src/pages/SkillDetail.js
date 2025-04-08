import React, { useEffect, useState } from "react";
import skills from "../data/skills";
import projects from "../data/projects";
import BackButton from "../components/BackButton";
import { Link } from "react-router";

const SkillDetail = ({ skillId }) => {
    // State for modal
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);

        // Cleanup function to ensure scrolling is enabled when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // Function to open the modal with the selected project
    const openProjectModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
        // Prevent body scrolling when modal is open
        document.body.style.overflow = "hidden";
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
        // Reactivate body scrolling when modal is closed
        document.body.style.overflow = "auto";
    };

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
                        {skill.projectIds && skill.projectIds.length > 0 ? (
                            projects
                                .filter((project) =>
                                    skill.projectIds.includes(project.id)
                                )
                                .map((project, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500 transition-colors shadow-lg cursor-pointer"
                                        onClick={() =>
                                            openProjectModal(project)
                                        }
                                    >
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src =
                                                        "https://via.placeholder.com/400x200?text=Projet";
                                                }}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-medium text-white mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-300 mb-4 line-clamp-2">
                                                {project.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <Link
                                                    to={`/project/${project.id}`}
                                                    className="text-sm font-medium inline-flex items-center"
                                                    style={{
                                                        color: skill.color,
                                                    }}
                                                >
                                                    Voir le détail
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
                                                </Link>
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
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <div className="col-span-3 text-center py-8 text-gray-400">
                                Aucun projet associé à cette compétence pour le
                                moment.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal to display project details */}
            {showModal && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 transition-opacity">
                    <div
                        className="absolute inset-0"
                        onClick={closeModal}
                    ></div>
                    <div
                        className="bg-gray-900 rounded-lg max-w-3xl w-full mx-auto overflow-hidden shadow-2xl z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal header */}
                        <div className="relative">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://via.placeholder.com/800x400?text=Projet";
                                    }}
                                />
                            </div>
                            <button
                                className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
                                onClick={closeModal}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                {selectedProject.title}
                            </h2>

                            <div className="mb-6">
                                <h3
                                    className="text-xl font-semibold text-white mb-3"
                                    style={{ color: skill.color }}
                                >
                                    Pourquoi ce projet est-il associé à la
                                    compétence {skill.title}?
                                </h3>
                                <p className="text-gray-300">
                                    {selectedProject.skillReasons &&
                                    selectedProject.skillReasons[skill.id]
                                        ? selectedProject.skillReasons[skill.id]
                                        : ""}
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Description
                                </h3>
                                <p className="text-gray-300">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <Link
                                    to={`/project/${selectedProject.id}`}
                                    className="px-6 py-2 rounded-lg font-medium text-white transition-colors"
                                    style={{
                                        backgroundColor: skill.color,
                                    }}
                                >
                                    Voir le projet
                                </Link>

                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium transition-colors flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Code source
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillDetail;
