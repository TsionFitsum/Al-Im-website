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
  const [showMoreCard4, setShowMoreCard4] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Example Corp',
      text: 'Working with Al-Impex has been transformative for our business. Their dedication to excellence is unmatched.'
    },
    {
      name: 'Jane Smith',
      role: 'Director, Global Solutions',
      text: 'The team at Al-Impex consistently delivers exceptional results. We value our partnership immensely.'
    },
    {
      name: 'Ahmed Khan',
      role: 'Founder, InnovateTech',
      text: 'Al-Impex has been instrumental in helping us achieve our international growth objectives.'
    }
  ];

  const handleReadMoreCard1 = () => {
    setShowMoreCard1(!showMoreCard1);
  };

  const handleReadMoreCard2 = () => {
    setShowMoreCard2(!showMoreCard2);
  };

  const handleReadMoreCard3 = () => {
    setShowMoreCard3(!showMoreCard3);
  };
  const handleReadMoreCard4 = () => {
    setShowMoreCard4(!showMoreCard4);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="overflow-hidden">
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
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
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

      {/* Brands We Work With */}
      <div className='logos'>
        <div className="small-container p-4 mt-20 flex items-center">
          <div className="flex-1 text-zoom-in">
            <h3 className="text-2xl font-bold mb-2 text-green-700 text-center mb-5">Brands We Work With</h3>
            <p className="text-gray-500 text-center mb-5">Our company works with different brands from around the world.</p>
          </div>
        </div>
        <div className="logos-slide">
          {[
            logo, brand7, image7, image11, brand5,
            logo, brand7, image7, image11, brand5,
            logo, brand7, image7, image11, brand5
          ].map((src, index) => (
            <img key={index} src={src} alt={`logo-${index}`} className="inline-block mx-2 my-4" />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-green-800">What Our Clients Say</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 italic mb-4">"{testimonials[testimonialIndex].text}"</p>
            <h4 className="text-green-700 font-bold">{testimonials[testimonialIndex].name}</h4>
            <p className="text-gray-500 text-sm">{testimonials[testimonialIndex].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
