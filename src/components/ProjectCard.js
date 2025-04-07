import React from "react";
import { Link } from "react-router";
import placeholderImg from "../assets/images/placeholder.png";

const ProjectCard = ({ id, title, description, image, link, skillsInfo }) => {
    // Fallback image if the project image is not available
    const fallbackImage = placeholderImg;

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
            {/* Project Image */}
            <div className="h-48 overflow-hidden relative">
                <img
                    src={image || fallbackImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImage;
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Compétences */}
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {skillsInfo &&
                            skillsInfo.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 text-xs font-semibold text-white rounded-full"
                                    style={{ backgroundColor: skill.color }}
                                >
                                    {skill.title}
                                </span>
                            ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                    <Link
                        to={`/project/${id}`}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                    >
                        Voir détails
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

                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                            aria-label="Voir le code source"
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
    );
};

export default ProjectCard;
