import React from 'react';
import { CheckCircle2, Award, Users, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Years of Experience',
      description: 'Established expertise in construction and earthwork'
    },
    {
      icon: Users,
      title: 'Trusted by Many',
      description: 'Serving contractors, developers, and plant operators'
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Full adherence to local regulations and safety standards'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About HKS Infra & Earthwork</h2>
            <div className="title-underline"></div>
            
            <p className="about-description">
              <strong>HKS Infra & Earthwork Sdn Bhd</strong> is a leading construction and earthwork company based in Puchong, Selangor. We specialize in providing comprehensive earthwork solutions, bulk material transport, and heavy machinery rental services to contractors, developers, and industrial operators across the Klang Valley.
            </p>

            <p className="about-description">
              HKS Infra & Earthwork Sdn Bhd operates from our head office in Puchong, Selangor, while our machinery yard and fleet depot are strategically located in Kuantan, Pahang. This allows us to efficiently support projects across both Klang Valley and the East Coast region.
            </p>

            <p className="about-description">
              Our commitment to reliability, safety, and compliance with local regulations has made us a trusted partner for construction projects of all sizes. We understand the critical importance of timely delivery and quality execution in the construction industry.
            </p>

            <div className="coverage-block">
              <h3 className="coverage-title">Coverage Areas</h3>
              <ul className="coverage-list">
                <li>Klang Valley (Selangor & KL)</li>
                <li>Kuantan, Pahang / Terengganu region</li>
                <li>Other locations upon request</li>
              </ul>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>Professional and experienced team</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>Modern fleet of equipment and vehicles</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>Competitive pricing and flexible arrangements</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="feature-icon" />
                <span>Commitment to safety and environmental standards</span>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
