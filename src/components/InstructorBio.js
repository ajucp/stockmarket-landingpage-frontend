import React from 'react';
import '../style.css'; // Import the global CSS file

const InstructorBio = () => (
    <section id="bio" className="instructor-bio">
        <div className="bio-container">
            <img
                src="/images/profile.jpg" // Placeholder for the instructor's image
                alt="Instructor"
                className="bio-image"
            />
            <div className="bio-details">
                <h2>Meet Your Instructor</h2>
                <h3>Mohammed Ajmal CP</h3>
                <p className="bio-description">
                    Mohammed Ajmal CP is a passionate trader and instructor with over 10 years of experience in both stock and cryptocurrency markets.
                    Based in Kerala, Palakkad, Ajmal specializes in building custom trading strategies and has taught hundreds of students worldwide.
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/mohammed-ajmal-cp-594663221/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
                    <a href="https://github.com/ajucp" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
            </div>
        </div>
    </section>
);

export default InstructorBio;
