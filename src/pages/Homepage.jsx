import Navbar from "../components/navbar";
import LocationCard from "../components/locationCard";
import Footer from "../components/footer";
import "./Homepage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

function Homepage() {
  return (
    <>
      <LocationCard />
      <Navbar />

      <div className="homepage">

        {/* ===== HERO SECTION ===== */}
        <section className="hero-section">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Grow Your Wealth With Smart Trading</h1>

            <p>
              Dojis is a trusted investment and trading company based in
              Puducherry. We manage client capital with disciplined strategies
              and a transparent 90% profit return model.
            </p>

            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link to="/login" className="invest-btn">
                Invest Now
              </Link>
            </motion.div>

          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
              alt="Trading"
            />
          </motion.div>

        </section>

        {/* ===== ABOUT SECTION ===== */}
        <section className="about-preview">

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44"
              alt="Market Analysis"
            />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Professional Capital Management</h2>

            <p>
              Our experienced trading team monitors markets daily to identify
              strong opportunities while applying strict risk management.
            </p>

            <p>
              Investors retain 90% of profits while Dojis takes only a 10%
              performance-based fee.
            </p>

          </motion.div>

        </section>

        {/* ===== SERVICES ===== */}
        <section className="services-section">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Services
          </motion.h2>

          <div className="services-grid">

            {["Market Trading", "Risk Management", "Profit Sharing"].map(
              (service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3>{service}</h3>
                  <p>
                    Professional strategies designed for sustainable growth.
                  </p>
                </motion.div>
              )
            )}

          </div>
        </section>

        {/* ===== WHY SECTION ===== */}
        <section className="why-section">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Dojis?
          </motion.h2>

          <div className="why-grid">

            {[
              "Transparent 10% Profit Model",
              "Experienced Trading Team",
              "Strong Risk Management"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>✔ {item}</h3>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ===== CTA ===== */}
        <motion.section
          className="cta-section"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Start Investing?</h2>
          <p>Join Dojis today and grow your financial future.</p>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/signup" className="cta-btn">
              Start Now
            </Link>
          </motion.div>

        </motion.section>

      </div>

      <Footer />
    </>
  );
}

export default Homepage;