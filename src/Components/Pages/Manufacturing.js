// Manufacturing.js
import React, { useState } from 'react';
//import sunVitoImage from '../logo/Sunvito.png'; // Import the image
import cardImage1 from '../logo/Sunvito.png'; // Import card images
import cardImage2 from '../logo/palmoil.jpg';
import cardImage3 from '../logo/soyabean.jpg';
import backgroundImage from '../logo/SunvitoBG.jpg'; // Adjust the path as needed
import deliveryImage from '../logo/delivery.jpg'; // Adjust the path as needed
import '../../App.css';

//import { Link } from 'react-router-dom';

function Manufacturing() {
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

  return (
    <div>
    <div className="relative w-full h-[500px] bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">NOVUS Edible oil</h1>
        <p className="mt-2">Home / Manufacturing </p>
      </div>
    </div>
    <div className="container mx-auto p-4 mt-20 bg-slate-50">
        <h1 className="text-3xl font-bold mb-4 text-center text-green-700">Premium Sunflower,Palm,Soya bean oil  Production</h1>
        <p className="mb-7 text-center text-lg text-gray-500">
        Our company specializes in high-quality oil production at our Adama factory, 
        distributing our products to local retailers and hotels.
         This ensures top-notch quality for our local market, supporting both our company and the community.
        </p>
      </div>

      <div className="flex flex-wrap mb-8 container mx-auto p-8 ">
  <div className="w-full md:w-5/12 lg:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={cardImage1} alt="Card 1" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-center">Sunflower Oil</h3>
        <p className="text-gray-700">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
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
      <img src={cardImage2} alt="Card 2" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-center">Palm Oil</h3>
        <p className="text-gray-700">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
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
      <img src={cardImage3} alt="Card 3" className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-center">Soya bean oil</h3>
        <p className="text-gray-700">A versatile cooking oil known for its light flavor and high smoke point, perfect for various culinary uses.</p>
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

  <div className="small-container p-4 mt-8 flex items-center">
  <div className="flex-1 text-zoom-in">
    <h3 className="text-2xl font-bold mb-2">Delivery Service</h3>
    <p className="text-gray-700">We offer reliable and efficient delivery services to ensure your
       products reach you on time and in perfect condition. 
      Our dedicated team ensures that every delivery is handled with care and delivered promptly,
       maintaining the quality and freshness of your products throughout the journey.</p>
  </div>
  <div className="flex-1 flex justify-center image-container">
    <img src={deliveryImage} alt="Delivery" className="max-w-full h-auto object-contain image-zoom-in" />
  </div>
</div>


</div>
</div>

  );
}

export default Manufacturing;
