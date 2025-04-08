import React from "react";
import LearnMoreButton from "./LearnMoreButton";

const SkillCard = ({ id, title, color, description, icon }) => {
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
                    <LearnMoreButton to={`/${id}`} color={color} />
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
