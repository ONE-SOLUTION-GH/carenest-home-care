import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../Packages.css';

const Packages = () => {
  const handleFormClick = () => {
    window.open('https://forms.gle/t8m3ZUK2qPZhns2P8', '_blank'); //  Google Form link
  };

  const handlePDFClick = () => {
    window.open(process.env.PUBLIC_URL + '/carenest_client_reg_form.pdf', '_blank'); //  PDF form
  };

  return (
    <section id="booking-form" className="booking-section py">
      <Container>
        <h2>Book an Appointment</h2>
        <p className="booking-intro">Please fill out our online form or download a PDF version to book an appointment.</p>
        <div className="booking-container">
          <Button variant="primary" className="btn-booking" onClick={handleFormClick}>Book via Google Form</Button>
          <Button variant="secondary" className="btn-pdf" onClick={handlePDFClick}>Download PDF Form</Button>
        </div>
      </Container>
    </section>
  );
};

export default Packages;
