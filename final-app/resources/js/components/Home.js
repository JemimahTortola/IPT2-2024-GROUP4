import React from "react";
import { Link } from "react-router-dom";
import "../../sass/Home.scss"; // Import SCSS for styling

export default function Home() {
  return (
    <div className="home">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="site-logo">
              <span className="logo-title">Greenfield Faculty System</span>
            </Link>
          </div>
          <nav className="navbar-nav">
            <ul className="nav-links">
              <li className="nav-item">
                <Link to="/Website" className="nav-link">Website</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/faq" className="nav-link">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle">
                  My Account
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/login" className="dropdown-link">Log In</Link>
                  </li>
                  <li>
                    <Link to="/register" className="dropdown-link">Register</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="content">
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-text">
            <h1>Faculty System</h1>
            <p>Empowering Faculty, Students, and Supervisors to grow together.</p>
          </div>
        </section>

        {/* Updated Features Section */}
        <section className="features">
          <div className="container">
            <h2>Our Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <img src="/assets/faculty.jpg" alt="Faculty" />
                <h3>Faculty</h3>
                <p>Self-evaluate and improve your teaching skills with personalized feedback.</p>
              </div>
              <div className="feature-card">
                <img src="/assets/students.jpg" alt="Students" />
                <h3>Students</h3>
                <p>Provide meaningful evaluations of your instructors to enhance the learning experience.</p>
              </div>
              <div className="feature-card">
                <img src="/assets/supervisors.jpg" alt="Supervisors" />
                <h3>Supervisors</h3>
                <p>Oversee faculty performance and guide their professional growth.</p>
              </div>
              <div className="feature-card"> 
                <img src="/assets/peers.jpg" alt="Peers" /> 
                <h3>Peers</h3>
                <p>Collaborate with your peers to foster a culture of continuous improvement.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Faculty System. All Rights Reserved. <Link to="#">Privacy Policy</Link> | <Link to="#">Terms of Service</Link></p>
        </div>
      </footer>
    </div>
  );
}
