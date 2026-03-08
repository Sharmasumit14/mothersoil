import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FixedWhatsappButton.css";

const FixedWhatsappButton = () => (
  <a
    href="https://wa.me/919012723216?text=Hi%20Mother%20Soil!%20I%20want%20to%20order%20your%20natural%20products."
    className="fixed-whatsapp-btn"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp className="whatsapp-icon" />
  </a>
);

export default FixedWhatsappButton;
