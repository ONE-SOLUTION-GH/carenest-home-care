import React, { useState } from 'react';
import '../CustomNavbar.css'; // Ensure your custom styles are imported

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src="carenest_logo.png" alt="Carenest" />
          <span>Carenest</span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><button className="cta-button">
          <a href="#packages">Packages</a>
            </button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
