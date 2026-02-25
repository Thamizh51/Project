import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Signup Successful 🚀");
  };

  return (
    <>
      <Navbar />

      <div className="signup-page">
        <motion.div
          className="signup-container"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Create Account</h2>
          <p className="signup-subtitle">
            Start your investment journey with Dojis
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            
            {/* Full Name */}
            <div className="floating-group">
              <input type="text" required />
              <label>Full Name</label>
            </div>

            {/* Email */}
            <div className="floating-group">
              <input type="email" required />
              <label>Email Address</label>
            </div>

            {/* Password */}
            <div className="floating-group password-group">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>

              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="floating-group password-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label>Confirm Password</label>

              <span
                className="toggle-password"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </span>
            </div>

            {/* Error Message */}
            {error && (
              <motion.p
                className="error-text"
                initial={{ x: -10 }}
                animate={{ x: 10 }}
                transition={{
                  repeat: 3,
                  duration: 0.1
                }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              className="signup-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>

          </form>

          <p className="signup-footer-text">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;