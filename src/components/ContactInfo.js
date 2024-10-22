import React, { useEffect } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../ContactInfo.css';

const ContactInfo = () => {
  // Animation for fade-in effect
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, idx) => {
      el.style.animationDelay = `${idx * 0.3}s`;
      el.classList.add('fade-in-animate');
    });
  }, []);

  return (
    <section id="contact" className="contact-info py">
      <div className="container text-center">
        <h2 className="fade-in">Contact Us</h2>
        <p className="subtitle fade-in">We'd love to hear from you! Reach out to us via phone, email, or our social channels below.</p>

        <div className="contact-grid fade-in">
          <div className="contact-item">
            <FaPhone className="icon" />
            <p>055 482 6404</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>Amasaman Sonitra rd</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>carenest24@gmail.com</p>
          </div>
        </div>

        <div className="social-media mt-4 fade-in">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/carenest24?s=11" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/carenestgh?igsh=MW40bjl4YmdkcDgwYw==" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
