import React, { useState } from 'react';
import axios from 'axios';
import '../style.css'; // Import the global CSS file

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            setResponseMessage(response.data.message);

            // Clear the form after successful submission
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setResponseMessage('Error submitting the form.');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name} // Controlled input
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email} // Controlled input
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message} // Controlled input
                    onChange={handleChange}
                    required
                    className="input-field"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {responseMessage && <p className="response-message">{responseMessage}</p>}
        </section>
    );
};

export default ContactForm;
