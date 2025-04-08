import React, { useEffect } from "react";
import { useParams } from "react-router";
import projects from "../data/projects";
import BackButton from "../components/BackButton";
import Tag from "../components/Tag";

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === projectId);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // If project not found
    if (!project) {
        return (
            <div className="min-h-screen bg-gray-900 text-white p-8">
                <BackButton to="/#projects" text="Retour aux projets" />
                <div className="max-w-4xl mx-auto mt-12 text-center">
                    <h1 className="text-3xl font-bold mb-4">
                        Projet non trouvé
                    </h1>
                    <p className="text-gray-400">
                        Le projet que vous recherchez n'existe pas ou a été
                        supprimé.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="relative h-80 md:h-96">
                <div className="absolute inset-0">
                    <img
                        src={
                            project.image ||
                            "https://via.placeholder.com/1200x600?text=Projet"
                        }
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "https://via.placeholder.com/1200x600?text=Projet";
                        }}
                    />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {project.title}
                        </h1>
                        {/* Compétences */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {project.skillsInfo &&
                                project.skillsInfo.map((skill, index) => (
                                    <Tag
                                        key={index}
                                        skill={skill}
                                        linkable={true}
                                    />
                                ))}
                        </div>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Voir le code source
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto py-12 px-4">
                <BackButton to="/#projects" text="Retour aux projets" />

                <div className="mt-8 bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">
                        Description du projet
                    </h2>
                    <p className="text-gray-300 mb-6">{project.description}</p>

                    {/* Functionnalities */}
                    {project.features && project.features.length > 0 && (
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">
                                Fonctionnalités principales
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Challenges */}
                    {project.challenges && (
                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">
                                Défis techniques
                            </h3>
                            <p className="text-gray-300">
                                {project.challenges}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
