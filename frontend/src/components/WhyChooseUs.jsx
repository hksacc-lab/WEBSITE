import React from 'react';
import { Clock, ShieldCheck, Users, TrendingUp, CheckCircle, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Reliable Scheduling',
      description: 'On-time deliveries and consistent project timelines you can count on'
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Compliance',
      description: 'Full adherence to safety standards and local regulations'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Skilled drivers and operators with years of industry experience'
    },
    {
      icon: HeadphonesIcon,
      title: 'Clear Communication',
      description: 'Transparent updates and comprehensive trip reporting'
    },
    {
      icon: TrendingUp,
      title: 'Flexible Solutions',
      description: 'Adaptable arrangements for projects of all sizes'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Well-maintained equipment and rigorous quality standards'
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose HKS Infra & Earthwork</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Your trusted partner for reliable and professional construction support services
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="reason-card">
                <div className="reason-icon">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
