import React from "react";
import "./Hero.css";
import Header from "./Header";

const Hero = () => (
  <section className="hero">
    <Header />
    <div className="hero-bg"></div>
    <div className="hero-content">
      <div className="hero-shape"></div>
      <img
        src="/assets/logo.png"
        alt="Mother Soil Logo"
        className="logo"
        style={{ height: "200px", maxWidth: "480px", marginBottom: "0.5rem" }}
      />
      <p className="tagline" style={{ margin: "0.25rem 0" }}>
        Pure From Nature, Delivered With Care
      </p>
      <p className="desc" style={{ margin: "0.25rem 0 0.5rem 0" }}>
        Supplying 100% natural products like raw honey, vermicompost, and more.
        <br />
        <span style={{ color: "#7fa86b", fontWeight: 600 }}>No chemicals</span>,
        just pure goodness from nature to your doorstep.
      </p>
      <a
        href="https://wa.me/919012723216?text=Hi%20Mother%20Soil!%20I%20want%20to%20order%20your%20natural%20products."
        className="cta-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order on WhatsApp
      </a>
    </div>
    <div className="honey-drip"></div>
  </section>
);

export default Hero;
