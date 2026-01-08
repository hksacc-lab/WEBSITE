import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Industrial Platform Earthwork',
      location: 'Puchong Industrial Area',
      description: 'Complete site preparation and platform formation for a new industrial facility, including cut and fill operations.',
      scope: 'Earthwork, Site Clearing, Platform Formation',
      image: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=800&q=80'
    },
    {
      title: 'Infrastructure Development Support',
      location: 'Klang Valley',
      description: 'Ongoing transport services for sand and aggregates supporting major infrastructure development projects.',
      scope: 'Material Transport, Coordination',
      image: 'https://images.unsplash.com/photo-1649644625092-6a66a59cffda?w=800&q=80'
    },
    {
      title: 'Commercial Development Site Works',
      location: 'Subang Jaya',
      description: 'Heavy machinery rental and excavation services for commercial property development.',
      scope: 'Machinery Rental, Excavation',
      image: 'https://images.unsplash.com/photo-1599995903128-531fc7fb694b?w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Delivering quality earthwork and construction support across the Klang Valley
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <CardContent className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-location">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-scope">
                  <span className="scope-label">Scope:</span>
                  <span className="scope-text">{project.scope}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
