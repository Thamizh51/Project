import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./about.css";
import LocationCard from "../components/locationCard";

function Counter({ target, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="counter-box">
      <h2>{count.toLocaleString()}+</h2>
      <p>{label}</p>
    </div>
  );
}

function About() {
  return (
    <>
      <LocationCard />
      <Navbar />

      <div className="about-page">
        <div className="about-container">
          <h1>About Dojis</h1>

          <p className="about-intro">
            Dojis is a professional trading platform based in Puducherry.
            We manage client capital using structured trading strategies
            with a transparent 10% performance-based profit model.
          </p>

          {/* 🔥 Counter Section */}
          <div className="counter-section">
            <Counter target={250} label="Active Investors" />
            <Counter target={12500} label="Trades Executed" />
            <Counter target={8500000} label="Total Profit Generated (₹)" />
            <Counter target={92} label="Success Rate (%)" />
          </div>

          <div className="about-section">
            <h2>Our Trading Model</h2>
            <p>
              Clients invest capital with us, and our professional trading
              team executes market strategies. Investors retain 90% of the
              profits, while Dojis earns a 10% performance fee.
            </p>
          </div>

          <div className="about-section">
            <h2>Risk Disclosure</h2>
            <p>
              Trading involves risk. While we aim for consistent returns,
              profits are not guaranteed. Clients should invest responsibly.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;