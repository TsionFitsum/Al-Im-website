import React, { useState, useEffect } from 'react';
import image1 from '../logo/sunvito.jpeg';
import image3 from '../logo/Wezzam.png';
import image4 from '../logo/zala.png';
import image5 from '../logo/hero-icon.jpg';
import image7 from '../logo/medicine.jpeg';
import image8 from '../logo/tyre.webp';
import image10 from '../logo/Construction_9.png';
import image11 from '../logo/Wezam.png';
import brand1 from '../logo/amce.jpeg';
// import deliveryImage from '../logo/amce.jpeg';
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
  const images = [image1, image5, image3, image4, image7, image10, image11, image8];
  const brands = [brand1, brand3, brand4, brand5, brand6, brand7, brand8];
  const brandsPerSlide = 3; // Number of brands to show per slide

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
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

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextBrandSlide = () => {
    setCurrentBrandIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(brands.length / brandsPerSlide)
    );
  };

  const prevBrandSlide = () => {
    setCurrentBrandIndex((prevIndex) =>
      (prevIndex - 1 + Math.ceil(brands.length / brandsPerSlide)) % Math.ceil(brands.length / brandsPerSlide)
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const brandInterval = setInterval(nextBrandSlide, 5000); // Change brand slide every 5 seconds
    return () => clearInterval(brandInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Navbar (Assuming your navbar component is here) */}
      <nav className="navbar">
        {/* Navbar content */}
      </nav>

      {/* Image Carousel */}
      <div className="relative flex items-center justify-center mt-4" style={{ height: '32rem' }}>
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        {/* <button
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
        </button> */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
            ></div>
          ))}
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

          <div className="flex flex-wrap mb-8 container mx-auto p-8 ">
            <div className="w-full md:w-5/12 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={exportt} alt="Card 1" className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-center text-green-700">Export</h3>
                  <p className="text-gray-700">Connecting global markets with premium exports: Coffee, oilseeds, spices, and pulses from Al-Impex.</p>
                  <div className="text-center">
                    <button 
                      onClick={handleReadMoreCard1}
                      className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2"
                    >
                      {showMoreCard1 ? 'Read Less' : 'Read More'}
                    </button>
                    {showMoreCard1 && (
                      <p className="text-gray-700 mt-2">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={importt} alt="Card 2" className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-center text-green-700">Import</h3>
                  <p className="text-gray-700">Bringing the world's best to you: High-quality imports across various sectors from Al-Impex</p>
                  <div className="text-center">
                    <button 
                      onClick={handleReadMoreCard2}
                      className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2"
                    >
                      {showMoreCard2 ? 'Read Less' : 'Read More'}
                    </button>
                    {showMoreCard2 && (
                      <p className="text-gray-700 mt-2">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
                <img src={image11} alt="Card 3" className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-center text-green-700">Manufacturing</h3>
                  <p className="text-gray-700">Crafting excellence locally: Premium manufacturing solutions by Al-Impex, tailored to your needs.</p>
                  <div className="text-center">
                    <button 
                      onClick={handleReadMoreCard3}
                      className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2"
                    >
                      {showMoreCard3 ? 'Read Less' : 'Read More'}
                    </button>
                    {showMoreCard3 && (
                      <p className="text-gray-700 mt-2">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brands We Work With Section */}
          

          {/* Logos */}
          <div class='logos'>
          <div className="small-container p-4 mt-20 flex items-center">
            <div className="flex-1 text-zoom-in">
              <h3 className="text-2xl font-bold mb-2 text-green-700 text-center mb-5">Brands We Work With</h3>
              <p className="text-gray-500 text-center mb-5">Our company works with different brands from around the world.</p>
            </div>
          </div>
          <div class="logos-slide">
            {[
              logo, brand7, image7, image11, brand5,
              logo, brand7, image7, image11, brand5,
              logo, brand7, image7, image11, brand5,
              logo, brand7, image7, image11, brand5,
              logo, brand7, image7, image11, brand5,
              logo, brand7, image7, image11, brand5
            ].map((src, index) => (
              <img key={index} src={src} alt={`logo-${index}`} className="inline-block mx-2 my-4" />
            ))}
          </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Home;
