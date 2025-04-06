import React from "react";
import { useNavigate } from "react-router";

const LearnMoreButton = ({ to, color }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(to)}
            className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors duration-300 inline-flex items-center"
            style={{ borderColor: color, borderWidth: "1px" }}
        >
            En savoir plus
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
        </button>
    );
};

export default LearnMoreButton;
