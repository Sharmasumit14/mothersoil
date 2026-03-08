import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-main">
      <div className="footer-logo-section">
        <img
          src="/assets/logo.png"
          alt="Mother Soil Logo"
          className="footer-logo"
        />
        <div className="footer-address">
          <span>Mother Soil&trade;</span>
          <span>New Raj Nagar, Bulandshahr,203001, Uttar Pradesh</span>
        </div>
      </div>
      <div className="footer-fssai-section">
        <img
          src="/assets/fssai.jpeg"
          alt="FSSAI Logo"
          className="footer-fssai-logo"
        />
      </div>
      <div className="footer-social-section">
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:info@mothersoil.in"
          aria-label="Mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://wa.me/919012723216?text=Hi%20Mother%20Soil!%20I%20want%20to%20order%20your%20natural%20products."
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>
        &copy; {new Date().getFullYear()} Mother Soil&trade;. All rights
        reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
