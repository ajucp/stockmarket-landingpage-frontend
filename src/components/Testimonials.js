import React from 'react';
import '../style.css'; // Import the global CSS file

const Testimonials = () => (
    <section id="testimonials" className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials-container">
            <div className="testimonial-card">
                <blockquote>"This course changed my life! I can now trade confidently." - Alice</blockquote>
            </div>
            <div className="testimonial-card">
                <blockquote>"John's teaching style is amazing. Highly recommend!" - Bob</blockquote>
            </div>
        </div>
    </section>
);

export default Testimonials;
