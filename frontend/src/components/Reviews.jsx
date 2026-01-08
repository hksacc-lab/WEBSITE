import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Reviews = () => {
  const testimonials = [
    {
      name: 'Ahmad Rahman',
      company: 'Developer - Klang Valley',
      rating: 5,
      text: 'HKS has been incredibly reliable for our earthwork needs. Their team is professional, and deliveries are always on time. Highly recommended!'
    },
    {
      name: 'Tan Wei Ming',
      company: 'Contractor - Puchong',
      rating: 5,
      text: 'Excellent service from start to finish. The machinery rental was seamless, and the operators were skilled and efficient.'
    },
    {
      name: 'Siti Nurhaliza',
      company: 'Project Manager',
      rating: 4,
      text: 'Great communication and transparent reporting. HKS made our material transport logistics much easier to manage.'
    }
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="title-underline"></div>
          
          <div className="google-rating">
            <div className="rating-display">
              <Star className="star-filled" fill="#E7C62A" stroke="#E7C62A" />
              <span className="rating-number">4.33</span>
              <span className="rating-text">Rated on Google by our clients</span>
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <CardContent className="testimonial-content">
                <Quote className="quote-icon" />
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`star ${i < testimonial.rating ? 'star-filled' : 'star-empty'}`}
                      fill={i < testimonial.rating ? '#E7C62A' : 'none'}
                      stroke="#E7C62A"
                    />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
