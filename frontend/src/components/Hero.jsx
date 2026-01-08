import React from 'react';
import { Button } from './ui/button';
import { Phone, MessageCircle, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <div className="rating-badge">
            <Star className="star-icon" fill="#E7C62A" stroke="#E7C62A" />
            <span>4.33 on Google Reviews</span>
          </div>
        </div>

        <h1 className="hero-title">
          Your Trusted Partner for
          <span className="hero-highlight"> Earthwork & Infrastructure</span>
        </h1>

        <p className="hero-subtitle">
          Professional earthwork, bulk material transport, and heavy machinery rental services
          serving Puchong and the wider Klang Valley area.
        </p>

        <div className="hero-cta">
          <Button onClick={scrollToContact} className="btn-primary">
            Request a Quote
          </Button>
          <Button
            onClick={() => window.location.href = 'tel:+60380757915'}
            className="btn-secondary"
          >
            <Phone className="h-5 w-5" />
            Call: 03-8075 7915
          </Button>
          <Button
            onClick={() => window.open('https://wa.me/60102328297', '_blank')}
            className="btn-whatsapp"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
