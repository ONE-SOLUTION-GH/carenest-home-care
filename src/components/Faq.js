import React, { useState } from "react";
import "../Faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Carenest?",
      answer: "Carenest is a home nursing service provider offering personalized care solutions for your health needs.",
    },
    {
      question: "How can I book a service?",
      answer: "You can book a service through our website, or contact our support for more information.",
    },
    {
      question: "What services do you provide?",
      answer: "We offer a range of services including elderly care, post-surgery care, and nursing for chronic conditions.",
    },
    {
      question: "Are the nurses certified?",
      answer: "Yes, all our nurses are certified and highly trained to provide excellent care.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className={`faq-icon ${activeIndex === index ? "open" : ""}`}>+</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
