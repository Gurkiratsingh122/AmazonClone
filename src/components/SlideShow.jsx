import React, {useState, useEffect } from 'react'
import slide3 from '../assets/Slide/slide3.jpg'
import slide4 from '../assets/Slide/slide4.jpg'

import './Slideshow.css'

function SlideShow() {
    const images = [
        `${slide3}`,
        `${slide4}`,
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup
    }, [currentIndex]);


    return (
        <div className=" w-full mx-auto overflow-hidden">
            {/* Slideshow Image */}
            <div className="relative">

            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="max-w-screen max-h-screen object-cover mask-gradient"
                />
</div>
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/4 mt-14 left-4 text-4xl transform -translate-y-1/2 text-white px-4 py-2 "
            >
                {'<'}
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/4 mt-14 right-4 text-4xl transform -translate-y-1/2  text-white px-4 py-2 "
            >
                {'>'}
            </button>

        </div>
    );
};

export default SlideShow