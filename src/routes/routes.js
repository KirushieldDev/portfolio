import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import SkillDetail from "../pages/SkillDetail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
                path="/realiser"
                element={<SkillDetail skillId="realiser" />}
            />
            <Route
                path="/optimiser"
                element={<SkillDetail skillId="optimiser" />}
            />
            <Route
                path="/administrer"
                element={<SkillDetail skillId="administrer" />}
            />
            <Route path="/gerer" element={<SkillDetail skillId="gerer" />} />
            <Route
                path="/conduire"
                element={<SkillDetail skillId="conduire" />}
            />
            <Route
                path="/collaborer"
                element={<SkillDetail skillId="collaborer" />}
            />
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};

export default AppRoutes;
