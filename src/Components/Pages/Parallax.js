import React, { useState, useEffect } from "react";

const Parallax = ({ images, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="parallax-carousel relative flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: height || "500px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-2">Empowering Global Trade</h1>
        <p className="text-lg">Excellence in Export, Import, and Manufacturing.</p>
        <a
          href="/about-us"
          className="bg-green-600 text-white py-2 px-4 mt-4 rounded hover:bg-green-700 transition inline-block"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Parallax; 
