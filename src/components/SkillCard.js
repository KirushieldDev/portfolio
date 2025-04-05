import React from "react";

const SkillCard = ({ id, title, color, description, icon, onDetailsClick }) => {
    const getBgColor = () => {
        return { backgroundColor: color };
    };

    const getBorderColor = () => {
        return { borderColor: color };
    };

    // Get text color based on background color
    const getTextColor = () => {
        const isColorLight = (hexColor) => {
            const r = parseInt(hexColor.slice(1, 3), 16);
            const g = parseInt(hexColor.slice(3, 5), 16);
            const b = parseInt(hexColor.slice(5, 7), 16);

            const brightness = (r * 299 + g * 587 + b * 114) / 1000;

            return brightness > 155;
        };

        // Get text color based on background color
        return isColorLight(color)
            ? { color: "#000000" }
            : { color: "#ffffff" };
    };

    return (
        <div
            className="rounded-lg shadow-lg overflow-hidden border-2 flex flex-col h-full"
            style={getBorderColor()}
        >
            <div className="p-4" style={{ ...getBgColor(), ...getTextColor() }}>
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{title}</h3>
                    {icon && (
                        <div className="w-6 h-6">
                            <img
                                src={icon}
                                alt={`${title} icon`}
                                className="w-full h-full"
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full p-4 bg-gray-800 text-gray-300 flex-grow flex flex-col">
                <p className="mb-auto">{description}</p>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => onDetailsClick && onDetailsClick(id)}
                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors duration-300 inline-flex items-center"
                        style={{ borderColor: color, borderWidth: "1px" }}
                    >
                        <span>En savoir plus</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 ml-1"
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
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
