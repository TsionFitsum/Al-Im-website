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
import brand2 from '../logo/amce.jpeg';
import brand3 from '../logo/amce.jpeg';
import brand4 from '../logo/amce.jpeg';
import brand5 from '../logo/amce.jpeg';
import brand6 from '../logo/amce.jpeg';
import brand7 from '../logo/amce.jpeg';
import brand8 from '../logo/amce.jpeg';

const Home = () => {
  const images = [image1, image5, image3, image4, image7, image10, image11, image8];
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];
  const brandsPerSlide = 3; // Number of brands to show per slide

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

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
      <div className="relative flex items-center justify-center mt-4 " style={{ height: '32rem' }}>
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
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
      <div className="bg-gray-100 py-12 mb-30  relative z-10">
        <div className="container mx-auto mt-20 mb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-green-700">What We Do</h2>
            <p className="text-xl text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lorem nec odio
              tincidunt dignissim. Phasellus vulputate lorem non turpis vestibulum, et semper nisl
              vehicula.
            </p>
            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-4 mb-4">
                  <h3 className="text-xl font-bold text-green-700 mb-10">Import</h3>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate
                  lorem.
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-4 mb-4">
                
                  <h3 className="text-xl font-bold text-green-700 mb-10">Export</h3>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate
                  lorem.
                </p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-gray-200 p-4 mb-4">
                  <h3 className="text-xl font-bold text-green-700 mb-10">Manufacturing</h3>
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate
                  lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Carousel */}
      {/* <div className="text-center mt-4">
        <h1 className="text-2xl font-bold">Brands We Work With</h1>
        <p className="text-gray-600">Our company imports top brands around the world</p>
      </div>
      <div className="relative flex items-center justify-center mt-4">
        <button
          onClick={prevBrandSlide}
          className="absolute left-4 md:left-8 bg-gray-700 text-white px-3 py-1 rounded-full focus:outline-none z-10"
        >
          &lt;
        </button>
        <div className="flex overflow-hidden w-full justify-center">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentBrandIndex * 100}%)` }}>
            {Array(Math.ceil(brands.length / brandsPerSlide)).fill().map((_, slideIndex) => (
              <div key={slideIndex} className="flex">
                {brands.slice(slideIndex * brandsPerSlide, (slideIndex + 1) * brandsPerSlide).map((brand, index) => (
                  <div
                    key={index}
                    className="w-24 h-24 m-2 bg-center bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${brand})` }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextBrandSlide}
          className="absolute right-4 md:right-8 bg-gray-700 text-white px-3 py-1 rounded-full focus:outline-none z-10"
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {Array(Math.ceil(brands.length / brandsPerSlide)).fill().map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentBrandIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
