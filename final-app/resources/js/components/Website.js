import React from "react";
import { Link } from "react-router-dom";
import "../../sass/Website.scss"; // Import the advanced SCSS styles

export default function Website() {
  return (
    <div className="website">
      {/* Navbar */}
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="site-logo">
              <span className="logo-title">Greenfield University</span>
              <span className="logo-subtitle">Shaping Future Innovators</span>
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
                <Link to="/departments" className="nav-link">Departments</Link>
              </li>
              <li className="nav-item">
                <Link to="/admissions" className="nav-link">Admissions</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle">
                  Student Portal
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>Welcome to Greenfield University</h1>
          <p>Empowering Education, Research, and Community Engagement</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/images/online.jpg" alt="Online Classes" />
              <h3>Online Classes</h3>
              <p>Experience the future of education with our comprehensive online classes.</p>
              <Link to="/services/online-classes" className="btn tertiary-btn">Learn More</Link>
            </div>
            <div className="service-card">
              <img src="/images/Research.jpg" alt="Research Facilities" />
              <h3>Research Facilities</h3>
              <p>Explore our cutting-edge labs and resources that foster innovation.</p>
              <Link to="/services/research" className="btn tertiary-btn">Explore</Link>
            </div>
            <div className="service-card">
              <img src="/images/Community.jpg" alt="Community Engagement" />
              <h3>Community Engagement</h3>
              <p>Connect with local communities through our engagement programs.</p>
              <Link to="/services/community" className="btn tertiary-btn">Get Involved</Link>
            </div>
            <div className="service-card">
              <img src="/images/programs.jpg" alt="Programs" />
              <h3>Programs</h3>
              <p>Discover funding opportunities available for deserving students.</p>
              <Link to="/services/scholarships" className="btn tertiary-btn">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Greenfield University. All Rights Reserved.</p>
          <p>
            <Link to="#">Privacy Policy</Link> | <Link to="#">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
