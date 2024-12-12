import React, { useState, useEffect } from 'react';

import image3 from '../logo/Wezzam.png';

import image7 from '../logo/medicine.jpeg';


import image11 from '../logo/Wezam.png';
import brand1 from '../logo/amce.jpeg';
import importt from '../logo/import.jpg';
import exportt from '../logo/export.jpg';
import logo from '../logo/al-impexLogo.jpg';

const Home = () => {
  const images = [image3, image7, image11];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [showMoreCard1, setShowMoreCard1] = useState(false);
  const [showMoreCard2, setShowMoreCard2] = useState(false);
  const [showMoreCard3, setShowMoreCard3] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleReadMore = (card) => {
    if (card === 1) setShowMoreCard1(!showMoreCard1);
    if (card === 2) setShowMoreCard2(!showMoreCard2);
    if (card === 3) setShowMoreCard3(!showMoreCard3);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div> 

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            PROMOTING DEVELOPMENT THROUGH ENTREPRENEURSHIP
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Bridging Markets, Building Opportunities.
          </p>
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

      {/* What We Do Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 text-green-800">What We Do</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Al-Impex, we are dedicated to connecting global markets and enriching local communities.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { img: exportt, title: 'Export', desc: 'Premium exports: Coffee, oilseeds, spices, and pulses.' },
              { img: importt, title: 'Import', desc: 'High-quality imports from various sectors.' },
              { img: image11, title: 'Manufacturing', desc: 'Crafting premium manufacturing solutions.' },
            ].map((card, index) => (
              <div key={index} className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
                <img src={card.img} alt={card.title} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-2">{card.title}</h3>
                <p className="text-gray-700">{card.desc}</p>
                <button
                  onClick={() => handleReadMore(index + 1)}
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  {index === 0 && showMoreCard1 ? 'Read Less' : 'Read More'}
                  {index === 1 && showMoreCard2 ? 'Read Less' : 'Read More'}
                  {index === 2 && showMoreCard3 ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-4">Brands We Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[logo, brand1, image7, image11].map((src, index) => (
              <img key={index} src={src} alt={`brand-${index}`} className="h-16" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
