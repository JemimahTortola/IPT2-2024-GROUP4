import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../../sass/home.scss'; // Assuming you have a CSS file for your styles

const Home = () => {
    return (
        <Router>
            <div className="app">
                <div className="sidebar">
                    <div className="navbar">
                        <h2>My Website</h2>
                    </div>
                    <ul className="sidebar-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="main-content">
                    <h1>Welcome to My Website</h1>
                    <p>This is the main content area.</p>
                </div>
            </div>
        </Router>
    );
};

export default Home;

if (document.getElementById('home')) { // Use 'root' if you chose Option B
    ReactDOM.render(<Home />, document.getElementById('home'));
}