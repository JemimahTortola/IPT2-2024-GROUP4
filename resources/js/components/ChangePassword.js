import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "../../sass/ChangePassword.scss"; // Import your SCSS

export default function ChangePassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State to handle success/failure messages

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Logic to handle password reset (e.g., send reset link to the email)
    setMessage(`Password reset link sent to ${email}`);
  };

  return (
    <div className="change-password-container">
      <div className="change-password-box">
        <h2>Change Password</h2>

        {message && <p className="message">{message}</p>} {/* Display the message */}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              aria-label="Email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-reset">
            Send Password Reset Link
          </button>
        </form>

        <p className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}
