import React, { useState, useEffect } from 'react';
import image3 from '../logo/Wezzam.png';

const Home = () => {
  const images = [image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden"> 
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen bg-gray-50">
        {/* Background Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-8 bg-white bg-opacity-90 max-w-2xl rounded-lg shadow-lg text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 leading-tight mb-4">
            Alimpex delivers 8.3% growth in EBIT, steady PATMI for H1 2024
          </h1>
          <p className="text-gray-700 mb-6">
            Achieving steady growth and performance in dynamic markets through excellence and innovation.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
              Read More
            </button>
            <button className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-300">
              Watch the Webcast
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentImageIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;