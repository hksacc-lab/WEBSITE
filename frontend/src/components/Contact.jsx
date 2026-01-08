import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: 'Required Fields Missing',
        description: 'Please fill in all required fields.',
        variant: 'destructive'
      });
      return;
    }

    // Mock submission
    console.log('Form submitted:', formData);
    
    toast({
      title: 'Enquiry Sent Successfully!',
      description: 'We will contact you shortly.',
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Contact us today for a consultation
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="info-text">
                <p className="info-label">Address</p>
                <p className="info-value">
                  23, Jalan Tpk 1/1 & Sek-1,<br />
                  Taman Perindustrian Kinrara,<br />
                  47100 Puchong, Selangor
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Phone className="h-6 w-6" />
              </div>
              <div className="info-text">
                <p className="info-label">Phone</p>
                <a href="tel:+60380757915" className="info-value info-link">
                  03-8075 7915
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="info-text">
                <p className="info-label">WhatsApp</p>
                <a 
                  href="https://wa.me/60102328297" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="info-value info-link"
                >
                  +60 10-232 8297
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail className="h-6 w-6" />
              </div>
              <div className="info-text">
                <p className="info-label">Email</p>
                <a href="mailto:info@hks-my.com" className="info-value info-link">
                  info@hks-my.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Clock className="h-6 w-6" />
              </div>
              <div className="info-text">
                <p className="info-label">Business Hours</p>
                <p className="info-value">
                  Monday - Friday: 8:00 AM - 5:30 PM<br />
                  Saturday: By Appointment
                </p>
              </div>
            </div>

            <Button
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=23+Jalan+Tpk+1%2F1+Taman+Perindustrian+Kinrara+47100+Puchong+Selangor', '_blank')}
              className="btn-maps"
            >
              <MapPin className="h-5 w-5" />
              View on Google Maps
            </Button>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name (optional)"
                />
              </div>

              <div className="form-group">
                <Label htmlFor="phone">Phone / WhatsApp *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your contact number"
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="message">Project Details / Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="btn-submit">
                Send Enquiry
              </Button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4095819999997!2d101.6299!3d3.0234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c1f7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2s23%2C%20Jalan%20Tpk%201%2F1%2C%20Taman%20Perindustrian%20Kinrara%2C%2047100%20Puchong%2C%20Selangor!5e0!3m2!1sen!2smy!4v1234567890!5m2!1sen!2smy"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HKS Location Map"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
