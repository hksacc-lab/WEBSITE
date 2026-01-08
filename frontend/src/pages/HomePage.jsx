import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
