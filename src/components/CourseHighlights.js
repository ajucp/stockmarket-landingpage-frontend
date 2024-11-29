import React from 'react';
import Slider from 'react-slick';
import '../style.css'; // Import the global CSS file

const CourseHighlights = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const highlights = [
        {
            title: "Learn stock trading from scratch.",
            description: "Our course is designed for beginners, guiding you through every step of stock trading, from the basics to advanced strategies."
        },
        {
            title: "Understand the crypto market.",
            description: "Gain a deep understanding of cryptocurrency markets, including trading techniques and investment strategies for the digital age."
        },
        {
            title: "Exclusive community support.",
            description: "Join a thriving community of learners and traders, where you can ask questions, share insights, and collaborate on strategies."
        },
        {
            title: "Lifetime access to course materials.",
            description: "Once enrolled, you’ll have lifetime access to our course content, allowing you to learn at your own pace and revisit materials anytime."
        },
        {
            title: "Weekly live trading sessions.",
            description: "Participate in live trading sessions every week, where you can watch real trades, ask questions, and gain hands-on experience."
        },
    ];

    return (
        <section id="highlights" className="course-highlights">
            <h2>Course Highlights</h2>
            <Slider {...settings}>
                {highlights.map((highlight, index) => (
                    <div key={index} className="course-slide">
                        <h3>{highlight.title}</h3>
                        <p>{highlight.description}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default CourseHighlights;
