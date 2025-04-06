import React from "react";
import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/routes";

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
