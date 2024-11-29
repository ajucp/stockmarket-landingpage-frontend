import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CourseHighlights from './components/CourseHighlights';
import InstructorBio from './components/InstructorBio';
import KeyFeatures from './components/KeyFeatures';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
    <div>
        <Header />
        <HeroSection />
        <CourseHighlights />
        <InstructorBio />
        <KeyFeatures />
        <Testimonials />
        <ContactForm />
        <Footer />
    </div>
);

export default App;
