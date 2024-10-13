import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Testimonial.css';

const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonial-section py">
      <div className="container text-center">
        <h2 className="section-title-testimonial">What Our Clients Say</h2>
        <p></p>
        <Carousel interval={5000} pause="hover" className="testimonial-carousel mt-4">
          <Carousel.Item>
            <div className="testimonial-content">
              <img
                className="testimonial-img"
                src="https://via.placeholder.com/100"
                alt="John Doe"
              />
              <p className="testimonial-text">
                "Carenest has been a lifesaver for my family. Their professionalism and compassion are unmatched!"
              </p>
              <h5 className="client-name">John Doe</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-content">
              <img
                className="testimonial-img"
                src="https://via.placeholder.com/100"
                alt="Jane Smith"
              />
              <p className="testimonial-text">
                "I felt so comfortable and cared for with Carenest's service. They truly go above and beyond."
              </p>
              <h5 className="client-name">Jane Smith</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-content">
              <img
                className="testimonial-img"
                src="https://via.placeholder.com/100"
                alt="Michael Lee"
              />
              <p className="testimonial-text">
                "Highly recommend! Their team is excellent and made the recovery process so much easier for me."
              </p>
              <h5 className="client-name">Michael Lee</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonial;
