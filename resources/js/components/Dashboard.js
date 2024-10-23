import React from "react";
import { Link } from "react-router-dom";
import "../../sass/Dashboard.scss"; // Assuming you will style it using SCSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h1>Dashboard</h1>
        <ul className="nav-links">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <h2>Welcome to your Dashboard!</h2>
        <div className="dashboard-cards">
          <div className="card">
            <h3>Overview</h3>
            <p>Your account overview and statistics will be shown here.</p>
          </div>
          <div className="card">
            <h3>Recent Activity</h3>
            <p>Check your recent activity or updates.</p>
          </div>
          <div className="card">
            <h3>Tasks</h3>
            <p>Manage your tasks and to-dos here.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
