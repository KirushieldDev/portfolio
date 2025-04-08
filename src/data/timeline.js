import React from "react";

const timelineItems = [
    {
        date: "2023 - 2026",
        title: "BUT Informatique",
        description: (
            <>
                <p className="mb-2">
                    Étudiant à {""}
                    <a
                        href="https://iut.univ-gustave-eiffel.fr/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        l'IUT de Marne-la-Vallée
                    </a>
                    <br />
                    en alternance chez{" "}
                    <a
                        href="https://dessinetonmeuble.fr/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Aryga
                    </a>
                </p>
            </>
        ),
    },
    {
        date: "2020 - 2023",
        title: "Baccalauréat",
        description: (
            <>
                <p>
                    Obtention du baccalauréat
                    <br />
                    STI2D option SIN au lycée Martin Luther King à
                    Bussy-Saint-Georges.
                </p>
            </>
        ),
    },
    {
        date: "2019 - 2020",
        title: "Brevet des collèges",
        description: (
            <>
                <p>
                    Obtention du brevet au Collège Jacques Yves Cousteau
                    <br />à Bussy-Saint-Georges.
                </p>
            </>
        ),
    },
    {
        date: "Déc 2019",
        title: "Stage de 3ème chez Resoneo",
        description: (
            <>
                <p>Stage de découverte d'une semaine</p>
                <p>
                    Découverte du développement web et du marketing digital.
                </p>
            </>
        ),
    },
];

export default timelineItems;
