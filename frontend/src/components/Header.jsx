import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Projects', target: 'projects' },
    { label: 'Why Us', target: 'why-us' },
    { label: 'Contact', target: 'contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_puchong-construction/artifacts/magxrnky_Logo%20for%20Form%20and%20others.JPG" 
            alt="HKS Logo" 
            className="logo-image"
          />
          <span className="logo-text">HKS Infra & Earthwork</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <Button
            onClick={() => window.location.href = 'tel:+60380757915'}
            className="btn-call"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </Button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollToSection(link.target)}
              className="mobile-nav-link"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
