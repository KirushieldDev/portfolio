import React from "react";
import { Link } from "react-router";

const BackButton = ({ to, text }) => {
    return (
        <div className="fixed top-4 left-4 z-10">
            <Link
                to={to}
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                {text}
            </Link>
        </div>
    );
};

export default BackButton;
