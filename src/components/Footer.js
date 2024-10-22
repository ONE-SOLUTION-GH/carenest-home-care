import React from 'react';
import '../Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={`${process.env.PUBLIC_URL}/carenest_logo.png`} alt="Carenest Logo" className="footer-logo-img" />
          <p className="footer-business-name">Carenest</p>
        </div>
        
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/carenestgh?igsh=MW40bjl4YmdkcDgwYw==" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/carenest24?s=11" className="social-icon"><i className="fab fa-twitter"></i></a>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">© {currentYear} Carenest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
