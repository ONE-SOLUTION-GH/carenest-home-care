

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import CustomNavbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import './App.css';  // Import custom styles
import ContactInfo from './components/ContactInfo';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Packages from './components/Packages';
import Faq from './components/Faq';

function App(){
  return (
    <>
      <CustomNavbar />
      <Header />
      <Services />
      <About />
      <Packages />
      <ContactInfo />
      <Testimonial />
      <Faq />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
