import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavList() {
    const location = useLocation(); // Get the current path

    return (
        <div className="navbar">
            <div className="nav-list">
                {location.pathname !== "/" && (
                    <div className="nav-item">
                        <Link to="/">Home</Link>
                    </div>
                )}
            </div>
        </div>
    );
}