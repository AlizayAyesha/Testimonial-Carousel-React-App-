import React, { useState } from 'react';
import './style.css';

function Testimonial() {
  const[currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      qoute: "This is the best product I've ever used!",
      author: "Jane Doe"
    },
    {
      qoute: "I highly recommend this product to everyone!",
      author: "Jhon Smith"
    },
    {
      qoute: "This product completely changed my life!",
      author: "Alizay"
    },
  ];

  const handlePrevClick =()=> {
    setCurrentIndex((currentIndex + testimonials.length -1) % testimonials.length)
  }

  
  const handleNextClick =()=> {
    setCurrentIndex((currentIndex +1) % testimonials.length)
  }
return (
    <div className='testimonails'>
      <div className='testimonails-qoute'>
         {testimonials[currentIndex].qoute}
      </div>
      <div className='testimonials-author'>
         - {testimonials[currentIndex].author}
      </div>
      <testimonial className="nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </testimonial>
    </div>
  );
}

export default Testimonial;
