import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LocationCard from "../components/locationCard";
import "./Contact.css";

function Contact() {
  return (
    <>
         <LocationCard />
      <Navbar />

      <div className="contact-page">
        <div className="contact-container">

          {/* Left Side - Info */}
          <div className="contact-info">
            <h1>Contact Us</h1>
            <p>
              Have questions about investing or trading? 
              Our team at Dojis is here to help you.
            </p>

            <div className="info-item">
              <h4>📍 Address</h4>
              <p>Puducherry, India</p>
            </div>

            <div className="info-item">
              <h4>📞 Phone</h4>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-item">
              <h4>✉ Email</h4>
              <p>support@dojis.com</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;