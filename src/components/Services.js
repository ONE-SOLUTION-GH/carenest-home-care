import React, { useState } from "react";
import "../Services.css";

const servicesData = [
  {
    id: 1,
    title: "Elderly Care",
    description:
      "Personalized care for the elderly, ensuring comfort and well-being at all times.",
    details:
      "We provide compassionate and experienced caregivers who specialize in elderly care. Services include companionship, medication reminders, and assistance with daily activities.",
    image: "nursing_care.jpg",
  },
  {
    id: 2,
    title: "Post-Operative Care",
    description:
      "Professional care to help patients recover quickly after surgery.",
    details:
      "Our post-operative care includes monitoring vital signs, medication management, and support with physical therapy exercises to ensure a smooth recovery process.",
    image: "post_surgery.png",
  },
  {
    id: 3,
    title: "Chronic Illness Management",
    description:
      "Expert care for managing chronic conditions such as diabetes.",
    details:
      "We offer specialized services to help manage chronic illnesses, including regular health assessments, medication management, and lifestyle guidance to improve quality of life.",
    image: "chronic_illness.png",
  },
  {
    id: 4,
    title: "24/7 Nursing Services",
    description:
      "Round-the-clock nursing care for patients needing continuous support.",
    details:
      "Our trained nursing staff is available 24/7 to provide comprehensive care, including monitoring, medication administration, and personal care services to ensure safety and comfort.",
    image: "nursing_services.png",
  },
];

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null); // Collapse the card if it's already expanded
    } else {
      setExpandedCard(id); // Expand the clicked card
    }
  };

  return (
    <section id="services" className="services-section">
      {/* <p>Our Services</p> */}
      <h2 className="section-title-services">Types Of Services</h2>
      <p className="service-p2">
        Carenest provides personalized home nursing care, ensuring quality
        support for your health and well-being in the comfort of your home.
      </p>
      <div className="services-container">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className={`service-card${
              expandedCard === service.id ? "expanded" : ""
            }`}
            onClick={() => handleCardClick(service.id)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">
                {expandedCard === service.id
                  ? service.details
                  : service.description}
              </p>
              <button className="read-more-btn">
                {expandedCard === service.id ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
