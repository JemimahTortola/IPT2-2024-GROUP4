import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "../../sass/SignIn.scss"; // Import SCSS styles

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Input validation logic
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
    } else if (email === "test@example.com" && password === "124") {
      alert("Login Successful!");
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password link */}
          <div className="forgot-password">
            <Link to="/ChangePassword">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

