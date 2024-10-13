import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import '../About.css'; 

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="about-image-container">
            <Image src="about1.jpg" alt="Nurse" fluid className="about-image" />
          </Col>
          <Col md={6} className="about-description">
            {/* <p className='about-p1'>About Us</p> */}
            <h2>Your Home, Your Health Are Our Priority</h2>
            <p>
              We are a team of experienced professionals dedicated to providing quality care services tailored to meet the unique needs of each client, including assistance with daily living activities, medication reminders, and specialized nursing care.
            </p>
            <Button variant="primary" href="#book-appointment" className="btn-about">
              Book an Appointment
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
