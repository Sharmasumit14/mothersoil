import React from "react";
import "./Header.css";

const Header = () => (
  <header className="hero-header">
    <img src="/assets/logo.png" alt="Mother Soil Logo" className="logo" />
    <nav>
      <a href="#about">About</a>
      <a href="#products">Products</a>
      <a href="#why">Why Us</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
