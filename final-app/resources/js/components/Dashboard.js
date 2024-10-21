import React from "react";
import { Link } from "react-router-dom";
import "../../sass/Dashboard.scss"; // Import your dashboard-specific SCSS styles
import Sidebar from "./Sidebar"; // Assuming you have a SidebarList component

export default function Dashboard() {
    return (
        <div className="dashboard">
            {/* Navbar */}
            <header className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="site-logo">
                            <span className="logo-title">Pinnacle Nexus University</span>
                            <span className="logo-subtitle">Empowering Students</span>
                        </Link>
                    </div>
                    <nav className="navbar-nav">
                        <ul className="nav-links">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/courses" className="nav-link">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Welcome Section */}
            <section className="welcome-section">
                <div className="container">
                    <div className="welcome-metric">
                        <div className="welcome-text">
                            <h2>WELCOME TO PINNACLE NEXUS UNIVERSITY</h2>
                            <p>Always stay updated in your student portal</p>
                        </div>
                        <img src={avatar} alt="User Avatar" className="avatar" />
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="metrics-section">
                <div className="container">
                    <h2>Dashboard Metrics</h2>
                    <div className="metrics-grid">
                        <div className="metric-item">
                            <h3>$10,000</h3>
                            <p>Total Payable</p>
                        </div>
                        <div className="metric-item">
                            <h3>$5,000</h3>
                            <p>Total Paid</p>
                        </div>
                        <div className="metric-item">
                            <h3>$300</h3>
                            <p>Others</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enrolled Courses */}
            <section className="courses-section">
                <div className="container">
                    <h2>Enrolled Courses</h2>
                    <div className="course-item">
                        <h4>Object Oriented Programming</h4>
                        <Link to="/courses/oop" className="btn view-btn">View</Link>
                    </div>
                    <div className="course-item">
                        <h4>Fundamentals of Database Systems</h4>
                        <Link to="/courses/dbms" className="btn view-btn">View</Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2024 Pinnacle Nexus University. All Rights Reserved.</p>
                    <p>
                        <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}
