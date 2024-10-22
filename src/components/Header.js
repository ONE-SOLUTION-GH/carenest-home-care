import React, { useEffect, useState } from 'react';
import '../Header.css';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';

const images = [banner1, banner2, banner3];

const Header = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentImage(images[index]);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index]);

  return (
    <header className="hero-section" style={{ backgroundImage: `url(${currentImage})` }}>
      <div className="hero-content">
        <h1>
          Experience <span className="highlight">Compassionate Care</span> at Carenest
        </h1>
        <p>Your health, your home, our priority</p>
        <a href="#services" className="btn btn-primary mt hero-btn">Explore Our Services</a>
      </div>
    </header>
  );
};

export default Header;
