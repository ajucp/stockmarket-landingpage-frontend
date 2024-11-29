import React from 'react';
import '../style.css'; // Import the CSS file

const Header = () => (
    <header className="header">
        <h1 className="header-title">STOCK MARKET COURSE</h1>
        <nav className="header-nav">
            <a href="#highlights" className="header-link">Highlights</a>
            <a href="#bio" className="header-link">Instructor</a>
            <a href="#features" className="header-link">Features</a>
            <a href="#testimonials" className="header-link">Testimonials</a>
            <a href="#contact" className="header-link">Contact</a>
        </nav>
    </header>
);

export default Header;
