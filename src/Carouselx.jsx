import React, { useState } from 'react'
import './App.css';

const Carouselx = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className='prev' onClick={handlePrev}>Prev</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className='next' onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carouselx;
