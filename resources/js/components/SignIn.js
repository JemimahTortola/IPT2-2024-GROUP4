import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../sass/SignIn.scss"; // Import the SCSS file

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Sample credentials (replace this with your own authentication logic)
  const validEmail = "test@example.com";
  const validPassword = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email/password validation
    if (email === validEmail && password === validPassword) {
      // Clear any errors
      setError("");
      
      // Navigate to the Dashboard after successful login
      navigate("/dashboard");
    } else {
      // Set an error message if credentials are incorrect
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signin-btn">Sign In</button>
      </form>
      <p className="signup-link">
        Don't have an account? <Link to="/Register" className="dropdown-link">SignUp</Link>
      </p>
    </div>
  );
};

export default SignIn;
