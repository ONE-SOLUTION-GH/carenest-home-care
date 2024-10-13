import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../Packages.css'; // Ensure you create this CSS file

const Packages = () => {
  const handleFormClick = () => {
    window.open('https://your-google-form-link.com', '_blank'); // Replace with your Google Form link
  };

  return (
    <section id="packages" className="packages-section py">
      <Container>
        <h2>Our Packages</h2>
        <p className="packages-intro">Choose the best package that suits your needs.</p>
        <div className="packages-container">
          <div className="package-card beginner-card">
            <h3>Basic Care</h3>
            <p className="price">GHS 200</p>
            <p className="description">Includes basic nursing care and daily assistance.</p>
            <Button variant="primary" className="btn-package" onClick={handleFormClick}>Select Package</Button>
          </div>

          <div className="package-card standard-card">
            <h3>Standard Care</h3>
            <p className="price">GHS 400</p>
            <p className="description">Includes all Basic Care services plus medication management.</p>
            <Button variant="primary" className="btn-package" onClick={handleFormClick}>Select Package</Button>
          </div>

          <div className="package-card premium-card">
            <h3>Premium Care</h3>
            <p className="price">GHS 600</p>
            <p className="description">Comprehensive care with 24/7 nursing support and specialized services.</p>
            <Button variant="primary" className="btn-package" onClick={handleFormClick}>Select Package</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Packages;
