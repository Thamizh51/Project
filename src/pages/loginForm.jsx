import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./loginForm.css";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
      <Navbar />

      <div className="login-page">

        <motion.div
          className="login-container"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Welcome Back</h2>
          <p className="login-subtitle">
            Login to access your investment dashboard
          </p>

          <form className="login-form">

            <motion.div
              className="input-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input type="email" placeholder="Email Address" required />
            </motion.div>

            <motion.div
              className="input-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input type="password" placeholder="Password" required />
            </motion.div>

            <motion.button
              type="submit"
              className="login-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>

          </form>

          <p className="login-footer-text">
            Don’t have an account? <span> <Link to="/signup">Register</Link></span>
          </p>
        </motion.div>

      </div>

      <Footer />
    </>
  );
}

export default Login;