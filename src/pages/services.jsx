import React from "react";
import Navbar from "../components/navbar";
import LocationCard from "../components/locationCard";
import Footer from "../components/footer";
import "./Services.css";

function Services() {
  return (
    <>
       <LocationCard />
      <Navbar />

      <div className="services-page">
        <div className="services-container">

          <h1>Our Services</h1>
          <p className="services-intro">
            At Dojis, we provide structured trading and capital management 
            services designed to help our clients grow their investments 
            with transparency and professional strategy.
          </p>

          <div className="service-grid">

            <div className="service-card">
              <h2>Capital Management</h2>
              <p>
                Clients invest capital with us, and our experienced trading 
                team manages the funds using disciplined market strategies 
                to maximize potential returns.
              </p>
            </div>

            <div className="service-card">
              <h2>Profit Sharing Model</h2>
              <p>
                Our business model is simple and transparent. Clients retain 
                90% of the profits generated, while Dojis takes a 10% 
                performance fee.
              </p>
            </div>

            <div className="service-card">
              <h2>Market Research & Analysis</h2>
              <p>
                We conduct continuous market research and technical analysis 
                to identify profitable opportunities and reduce unnecessary risk.
              </p>
            </div>

            <div className="service-card">
              <h2>Risk Management</h2>
              <p>
                Capital protection is our priority. We apply structured 
                risk-control strategies to maintain disciplined trading practices.
              </p>
            </div>

            <div className="service-card">
              <h2>Transparent Reporting</h2>
              <p>
                Clients receive clear updates regarding trading performance 
                and profit calculations to ensure complete transparency.
              </p>
            </div>

            <div className="service-card">
              <h2>Dedicated Client Support</h2>
              <p>
                Our support team is available to guide investors, answer 
                queries, and provide clarity about our trading process.
              </p>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;