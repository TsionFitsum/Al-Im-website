import React, { useState } from 'react';
import image1 from '../logo/year_of_pulses.jpg';
import image3 from '../logo/Firefly linseeds and sesame seeds in a bag against the background of burlap 35981.jpg';
import image4 from '../logo/Firefly Red kidney beans, White pea beans, Green mung beans, Black beans, Haricot beans and Faba bea.jpg';
import image5 from '../logo/Firefly oil seeds , pulses and spices 79532.jpg';
import coffee from '../logo/cof.jpg';
import buna from '../logo/bunawoch.png';
import bunaa from '../logo/bu.png'
import cup from '../logo/OIP.jpeg';


import { Link, useLocation } from 'react-router-dom';
// import './OilSeedsAndPulses.css';  // Import the CSS file here

function Wezam() {
  const [selectedCategory, setSelectedCategory] = useState('pulses'); // Initial category selected
  const location = useLocation();

  const getLinkClasses = (path) => {
    return `relative text-black font-medium p-2 rounded transition duration-300 ease-in-out 
      before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-700 
      before:transition-all before:duration-300 
      ${location.pathname === path ? 'before:w-full text-green-700' : 'hover:before:w-full hover:text-green-700 hover:bg-green-50 hover:bg-opacity-5'}`;
  };


  const cards = [
    { category: 'pulses', image: coffee, title: 'Coffee', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { category: 'spices', image: image5, title: 'Tsion Fitsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { category: 'oilseeds', image: image3, title: 'Tsii', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { category: 'oilseeds', image: image3, title: 'Tsion', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { category: 'pulses', image: buna, title: 'Washed Wezam Coffee', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { category: 'spices', image: image5, title: 'Ellie Anderson', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { category: 'pulses', image: cup, title: 'Wezam Coffee', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { category: 'oilseeds', image: image3, title: 'Liam Brown', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { category: 'spices', image: image5, title: 'Sophia Davis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ];

  // Filter cards based on selected category
  const filteredCards = cards.filter(card => card.category === selectedCategory);
  
  // Add placeholders to ensure there are always 3 cards
  const cardsToDisplay = [
    ...filteredCards,
    ...Array(Math.max(0, 3 - filteredCards.length)).fill({
      title: 'Placeholder',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150'
    })
  ];

  // Click handlers for category links
  const handlePulsesClick = () => {
    setSelectedCategory('pulses');
  };

  const handleSpicesClick = () => {
    setSelectedCategory('spices');
  };

  const handleOilSeedsClick = () => {
    setSelectedCategory('oilseeds');
  };

  return (
    <div>
      <div className="relative w-full h-[500px] bg-center bg-cover" style={{ backgroundImage: `url(${image1})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Wezam ~ Coffee</h1>
          <p className="mt-2">Home / Export / Wezam (Coffee)</p>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-20 bg-slate-100">
        <h1 className="text-3xl font-bold mb-4 text-center text-green-700">Export of Coffee</h1>
        <p className="mb-7 text-center text-lg text-gray-500">
        We provide our customers with the best varieties of high quality Ethiopian coffee. 
Al-Impex is a founding member of the Ethiopian Commodity Exchange 
The processing department within the division, prepares the coffee according to international standards. 
Our lab/liquoring service tests and guarantees the quality of our coffee in order to meet our customers’ expectations.
Our processing plant is located at Legatafo.

        </p>
      </div>

      <div className="container mx-auto p-4 mt-20">
        <div className="flex justify-center space-x-4">
          <button onClick={handlePulsesClick} className={`button-hover-effect ${selectedCategory === 'pulses' ? 'text-green-700' : 'hover:text-green-700'}`}>
            <div className="link-container">
              <span className="relative z-10">Wezam Coffee </span>
              <div className="link-hover-bg absolute inset-0"></div>
            </div>
          </button>
          
          
        </div>
      </div>

      <div className="container mx-auto relative flex justify-center items-center p-4">
        <div className="flex flex-wrap justify-center">
          {cardsToDisplay.slice(0, 3).map((card, index) => (
            <div key={index} className="w-1/3 p-4 flex-shrink-0 card">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover" src={card.image} alt={card.title} />
                <div className="py-4 px-6 bg-white text-black">
                  <h1 className="font-bold text-xl">{card.title}</h1>
                  <p className="mt-2">{card.description}</p>
                  <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wezam;
