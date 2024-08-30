import React, { useState, useEffect } from 'react';
import '../styles/slider.css';

// Import images at the top
import img1 from '/assets/pic1.jpg';
import img2 from '/assets/pic2.jpg';
import img3 from '/assets/pic3.jpg';

// Define the slides array with image and text
const slides = [
  {
    img: img1,
    text: 'Slide 1',
  },
  {
    img: img2,
    text: 'Slide 2',
  },
  {
    img: img3,
    text: 'Slide 3',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <h2>{slide.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default Slider;
