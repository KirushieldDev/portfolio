import React, { useState, useEffect } from "react";
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Effect to detect scroll and change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to scroll to a specific section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMobileMenuOpen(false); // Close mobile menu after clicking
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-gray-900 shadow-lg py-2"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#"
                            className="text-white font-bold text-xl cursor-pointer"
                            onClick={() => scrollToSection("hero")}
                        >
                            Portfolio.
                        </a>
                    </div>

                    {/* Navigation - Desktop */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                À propos
                            </button>
                            <button
                                onClick={() => scrollToSection("path")}
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Parcours
                            </button>
                            <button
                                onClick={() => scrollToSection("skills")}
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Compétences
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Projets
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">
                                Ouvrir le menu principal
                            </span>
                            {/* Icon when menu is closed */}
                            <svg
                                className={`${
                                    isMobileMenuOpen ? "hidden" : "block"
                                } h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Icon when menu is open */}
                            <svg
                                className={`${
                                    isMobileMenuOpen ? "block" : "hidden"
                                } h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div
                className={`${
                    isMobileMenuOpen ? "block" : "hidden"
                } md:hidden bg-gray-900 shadow-lg`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <button
                        onClick={() => scrollToSection("about")}
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                        À propos
                    </button>
                    <button
                        onClick={() => scrollToSection("path")}
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                        Parcours
                    </button>
                    <button
                        onClick={() => scrollToSection("skills")}
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                        Compétences
                    </button>
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                        Projets
                    </button>
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
