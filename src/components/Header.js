import React from 'react';
import '../Header.css';

const Header = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>Experience <span className="highlight">Compassionate Care</span> at Carenest</h1>
        <p>Your health, your home, our priority</p>
        <a href="#services" className="btn btn-primary mt hero-btn">Explore Our Services</a>
      </div>
    </header>
  );
};

export default Header;
