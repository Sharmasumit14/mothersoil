import "./Contact.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="contact section">
    <h2>Contact Us</h2>
    <p className="contact-subtitle">
      We’re here to help! Reach out to us for orders, questions, or feedback.
    </p>
    <div className="contact-info">
      <a
        href="https://wa.me/919012723216?text=Hi%20Mother%20Soil!%20I%20want%20to%20order%20your%20natural%20products."
        className="contact-btn whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp style={{ marginRight: "0.5rem" }} /> WhatsApp
      </a>
      <a href="tel:+919012723216" className="contact-btn phone">
        <FaPhoneAlt style={{ marginRight: "0.5rem" }} /> +91 90127 23216
      </a>
      <a
        href="mailto:mothersoilofficial@gmail.com"
        className="contact-btn email"
      >
        <FaEnvelope style={{ marginRight: "0.5rem" }} />{" "}
        mothersoilofficial@gmail.com
      </a>
      <span className="contact-btn location">
        <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} /> New Raj Nagar,
        Bulandshahr,203001, Uttar Pradesh
      </span>
    </div>
  </section>
);

export default Contact;
