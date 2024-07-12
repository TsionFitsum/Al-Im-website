import React from "react";

import imageWhoWeAre from '../logo/Al-Impex.png'; // Add the correct path to your image
import '../../App.css'; // Ensure this is the correct path to your CSS file

function AboutUs() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[500px] bg-center bg-cover bg-green-700 flex flex-col items-center justify-center text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-2 text-xl">Home / About Us</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto p-8 mt-16 bg-gray-100 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700">
              Our company is a leading exporter of agricultural products, mainly oil seeds and pulses from Ethiopia to the global market. 
              We are dedicated to providing high-quality products that bring vital foreign currency to our company and country.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={imageWhoWeAre} alt="Who We Are" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="container mx-auto p-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 p-6 bg-gray-100 text-gray-700">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To deliver the finest quality agricultural products to our global customers, while promoting sustainable farming practices 
              and contributing to the economic growth of Ethiopia.
            </p>
          </div>

          {/* Vision */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 p-6 bg-gray-100 text-gray-700">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading exporter of premium oil seeds and pulses in the global market, recognized for our commitment to quality, 
              sustainability, and customer satisfaction.
            </p>
          </div>

          {/* Values */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105 p-6 bg-gray-100 text-gray-700">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Our Values</h2>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Quality</li>
              <li>Sustainability</li>
              <li>Integrity</li>
              <li>Customer Focus</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto p-8 mt-16 bg-gray-100 rounded-lg shadow-lg ">
        <h2 className="text-4xl font-bold text-green-700 mb-4 text-center">Our Story</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Founded in 2000, our company started as a small family business with a passion for agriculture and a vision to bring the 
          best of Ethiopia's oil seeds and pulses to the world. Over the years, we have grown into a major player in the export market, 
          known for our quality products and reliable service.
        </p>
        <p className="text-lg text-gray-700 text-center">
          Today, we work with a network of dedicated farmers and partners to ensure that our products meet the highest standards of 
          quality and sustainability. We are proud of our heritage and committed to contributing to the prosperity of our country.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
