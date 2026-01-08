import React from 'react';
import { Truck, Hammer, Wrench } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Earthwork & Excavation',
      description: 'Professional cut & fill operations, platform formation, site clearing, and stockpile management services.',
      features: [
        'Site preparation and clearing',
        'Cut and fill operations',
        'Platform formation',
        'Stockpile management'
      ],
      image: 'https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?w=800&q=80'
    },
    {
      icon: Truck,
      title: 'Material Transport Services',
      description: 'Reliable tipper lorry transport for sand, soil, ore, and other bulk materials within legal load limits.',
      features: [
        'Sand and soil transport',
        'Trip-based services',
        'Legal load compliance',
        'Timely deliveries'
      ],
      image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&q=80'
    },
    {
      icon: Wrench,
      title: 'Heavy Machinery Rental',
      description: 'Modern fleet of excavators, loaders, and heavy equipment available with or without operators.',
      features: [
        'Excavators and loaders',
        'Experienced operators available',
        'Well-maintained equipment',
        'Flexible rental terms'
      ],
      image: 'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800&q=80'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Comprehensive earthwork and construction support solutions for your projects
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon-overlay">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>
                <CardContent className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
