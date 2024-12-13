import React, { useState, useEffect } from 'react';
import image1 from '../logo/sunvito.jpeg';
import image3 from '../logo/Wezzam.png';
import image4 from '../logo/zala.png';
import image5 from '../logo/cof.jpg';
import image7 from '../logo/medicine.jpeg';
import image8 from '../logo/tyre.webp';
import image10 from '../logo/Construction_9.png';
import image11 from '../logo/sunvittto.jpeg';
import brand1 from '../logo/amce.jpeg';
import deliveryImage from '../logo/amce.jpeg';
import brand3 from '../logo/amce.jpeg';
import brand4 from '../logo/amce.jpeg';
import brand5 from '../logo/Tender.png';
import brand6 from '../logo/amce.jpeg';
import brand7 from '../logo/amce.jpeg';
import brand8 from '../logo/amce.jpeg';
import importt from '../logo/import.jpg';
import exportt from '../logo/export.jpg';
import logo from '../logo/al-impexLogo.jpg';

const Home = () => {
  const images = [image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMoreCard1, setShowMoreCard1] = useState(false);
  const [showMoreCard2, setShowMoreCard2] = useState(false);
  const [showMoreCard3, setShowMoreCard3] = useState(false);

  const handleReadMoreCard1 = () => {
    setShowMoreCard1(!showMoreCard1);
  };

  const handleReadMoreCard2 = () => {
    setShowMoreCard2(!showMoreCard2);
  };

  const handleReadMoreCard3 = () => {
    setShowMoreCard3(!showMoreCard3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden ">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-[340px] bg-gray-50">
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
        <div
          className="relative z-10 px-4 py-6 max-w-xl rounded-lg shadow-lg text-center"
          style={{
            background: 'rgba(255, 255, 255, 0.3)', // Semi-transparent gray
            backdropFilter: 'blur(10px)', // Frosted glass blur effect
            WebkitBackdropFilter: 'blur(10px)', // For Safari
            border: '1px solid rgba(255, 255, 255, 0.2)', // Optional subtle border
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-green-800 leading-tight mb-2">
            Promoting Development Through Entrepreneurship.
          </h1>
          <p className="text-gray-200 mb-4 text-sm md:text-base">
            Achieving steady growth and performance in dynamic markets through excellence and innovation.
          </p>
          <div className="flex justify-center gap-2">
            <button className="bg-green-600 text-white font-bold py-1 px-3 rounded hover:bg-green-700 text-sm">
              Read More
            </button>
            <button className="bg-gray-200 text-gray-800 font-bold py-1 px-3 rounded hover:bg-gray-300 text-sm">
              Watch the Webcast
            </button>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gray-100 py-12 mb-30 relative z-10">
        <div className="container mx-auto mt-20 mb-20 px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold mb-10 text-green-800">What We Do</h2>
            <p className="text-xl text-gray-600 mb-8">
              At Al-Impex, we are dedicated to connecting global markets and enriching local communities through
              our comprehensive range of services. Our operations are designed to deliver the highest quality products and services to our customers.
            </p>
          </div>






          <div className="flex flex-wrap justify-center mb-8 container mx-auto p-4">
  <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={exportt} alt="Card 1" className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center text-green-700">Export</h3>
        <p className="text-gray-700 text-sm">Connecting global markets with premium exports: Coffee, oilseeds, spices, and pulses from Al-Impex.</p>
        <div className="text-center">
          <button 
            onClick={handleReadMoreCard1}
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2 text-sm"
          >
            {showMoreCard1 ? 'Read Less' : 'Read More'}
          </button>
          {showMoreCard1 && (
            <p className="text-gray-700 text-sm mt-2">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
          )}
        </div>
      </div>
    </div>
  </div>

  <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={importt} alt="Card 2" className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center text-green-700">Distribution</h3>
        <p className="text-gray-700 text-sm">Bringing the world's best to you: High-quality imports across various sectors from Al-Impex.</p>
        <div className="text-center">
          <button 
            onClick={handleReadMoreCard2}
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2 text-sm"
          >
            {showMoreCard2 ? 'Read Less' : 'Read More'}
          </button>
          {showMoreCard2 && (
            <p className="text-gray-700 text-sm mt-2">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
          )}
        </div>
      </div>
    </div>
  </div>

  <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image11} alt="Card 3" className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center text-green-700">Manufacturing</h3>
        <p className="text-gray-700 text-sm">Crafting excellence locally: Premium manufacturing solutions by Al-Impex, tailored to your needs.</p>
        <div className="text-center">
          <button 
            onClick={handleReadMoreCard3}
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2 text-sm"
          >
            {showMoreCard3 ? 'Read Less' : 'Read More'}
          </button>
          {showMoreCard3 && (
            <p className="text-gray-700 text-sm mt-2">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
          )}
        </div>
      </div>
    </div>
  </div>

  <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image11} alt="Card 4" className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center text-green-700">Agricultural Development</h3>
        <p className="text-gray-700 text-sm">Crafting excellence locally: Premium manufacturing solutions by Al-Impex, tailored to your needs.</p>
        <div className="text-center">
          <button 
            onClick={handleReadMoreCard3}
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2 text-sm"
          >
            {showMoreCard3 ? 'Read Less' : 'Read More'}
          </button>
          {showMoreCard3 && (
            <p className="text-gray-700 text-sm mt-2">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
          )}
        </div>
      </div>
    </div>
  </div>
</div>




        </div>
      </div>
    </div>
  );
};

export default Home;     
