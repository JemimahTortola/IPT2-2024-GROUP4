import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports from components / our pathways
import Home from "./Home";
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ChangePassword from "./ChangePassword"
import Website from "./Website"
import Dashboard from "./Dashboard"
import Sidebar from "./Sidebar"
export default function Routers() {
    return (
        <Router>
            <Routes>
                {/* Core Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/LogIn" element={<SignIn />} />
                <Route path="/Register" element={<SignUp />} />
                <Route path="/ChangePassword" element={<ChangePassword />} />
                <Route path="/Website" element={<Website />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Sidebar" element={<Sidebar />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}

