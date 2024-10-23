import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/Register.scss"; // Import SCSS file

export default function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            setSuccess("");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setSuccess("");
            return;
        }

        // Simulate successful sign-up logic (e.g., API call)
        console.log("User data:", { firstName, lastName, email, password });
        
        // Reset form on success
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
        setError(""); // Clear error messages
        setSuccess("Sign-up successful! Please log in."); // Set success message
    };

    return (
        <div className="signup">
            <div className="signup-container">
                <div className="form-card">
                    <h2 className="form-title">SIGN UP FORM</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">{success}</div>}
                        <button type="submit" className="signup-button">
                            Sign Up
                        </button>
                    </form>
                    <div className="login-link">
                        <span>Already have an account? </span>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
