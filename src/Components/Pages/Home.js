import React, { useState } from 'react';
import Navbar from '../Navbar';
import image1 from '../logo/sunvito.jpeg';
import image2 from '../logo/bunawoch.png';
import image3 from '../logo/Wezzam.png';
import image4 from '../logo/zala.png'; 
import image5 from '../logo/cof.jpg';
import image6 from '../logo/sunv.jpeg';


const Home = () => {
  const images = [image1,image5, image2,image6, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-full">
        <div
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
          className="w-full h-full bg-center bg-cover"
        ></div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full focus:outline-none"
        >
          &gt;
        </button>
      </div>
      <h1>Hello</h1>
    </div>
  );
};

export default Home;
