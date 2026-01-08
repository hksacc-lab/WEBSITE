import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_puchong-construction/artifacts/magxrnky_Logo%20for%20Form%20and%20others.JPG" 
                alt="HKS Logo" 
                className="footer-logo-image"
              />
              <h3>HKS Infra & Earthwork Sdn Bhd</h3>
            </div>
            <p className="footer-description">
              Your trusted partner for earthwork, material transport, and heavy machinery rental services in the Klang Valley.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li>Earthwork & Excavation</li>
              <li>Material Transport</li>
              <li>Heavy Machinery Rental</li>
              <li>Site Preparation</li>
              <li>Project Support</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin className="h-4 w-4" />
                <span>Puchong, Selangor</span>
              </li>
              <li>
                <Phone className="h-4 w-4" />
                <a href="tel:+60380757915">03-8075 7915</a>
              </li>
              <li>
                <Mail className="h-4 w-4" />
                <a href="mailto:info@hks-my.com">info@hks-my.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} HKS Infra & Earthwork Sdn Bhd. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
