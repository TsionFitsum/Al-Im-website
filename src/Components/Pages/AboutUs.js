import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faCoffee, faCogs, faPaw } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import logoo from '../logo/Al-Impex.png'; // Assuming this is your image for Who We Are
import imageWhoWeAre from '../logo/al-impexLogo.jpg'; // Assuming this is your image for Who We Are
import division1Image from '../logo/sunvito.jpeg'; // Import your division images
import division2Image from '../logo/delivery.jpg';
import division3Image from '../logo/cof.jpg';
import division4Image from '../logo/zala.png';
import division5Image from '../logo/zoetis.jpeg';
import division6Image from '../logo/delivery.jpg';
import division7Image from '../logo/export.jpg';
import '../../App.css'; // Ensure this is the correct path to your CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web from '../logo/web.jpg'; // Import your division images


function AboutUs() {
  const [expandedDivision, setExpandedDivision] = useState([]);
  const img=web;
  const [selectedCategory, setSelectedCategory] = useState("all"); // Category state
  const [backgroundImage, setBackgroundImage] = useState(division1Image);
  const [hoveredDivisionImage, setHoveredDivisionImage] = useState(web); // Default background image

  const divisions = [
    { id: 1, name: "Novus (Edible Oil)", image: division1Image },
    { id: 2, name: "FMCG", image: division2Image },
    { id: 3, name: "Wezam", image: division3Image },
    { id: 4, name: "Zala", image: division4Image },
    { id: 5, name: "Animal Health", image: division5Image },
    { id: 6, name: "Leasing Division", image: division6Image },
    { id: 7, name: "General Service", image: division7Image },
  ];

  // Filtered divisions
  const filteredDivisions =
    selectedCategory === "all"
      ? divisions
      : divisions.filter((division) => division.category === selectedCategory);

  const toggleExpansion = (index) => {
    if (expandedDivision.includes(index)) {
      setExpandedDivision(expandedDivision.filter(item => item !== index));
    } else {
      setExpandedDivision([...expandedDivision, index]);
    }
  }; 

  const [activeSection, setActiveSection] = useState('mission');

  

  const isExpanded = (index) => {
    return expandedDivision.includes(index);
  };

  return (
    <div>
<div>
  {/* About Us Section */}
  <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})` // Replace with the About Us banner image
      }}
    ></div>

    {/* Semi-transparent Black Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Banner Content with Hover Effect */}
    <div
      className="relative z-10 px-4 py-6 max-w-xl rounded-lg shadow-lg text-center hover:bg-opacity-50 hover:shadow-xl hover:-translate-y-2 transition duration-300"
      style={{
        background: "rgba(255, 255, 255, 0.3)", // Semi-transparent gray
        backdropFilter: "blur(10px)", // Frosted glass blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari
        border: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-green-800 leading-tight mb-2">
        About Us
      </h1>
      <p className="text-gray-200 mb-4 text-sm md:text-base">
        Learn more about our mission to promote excellence and innovation in dynamic markets.
      </p>
      <div className="flex justify-center gap-2">
        <button className="bg-green-600 text-white font-bold py-1 px-3 rounded hover:bg-green-700 text-sm">
          Learn More
        </button>
        <button className="bg-gray-200 text-gray-800 font-bold py-1 px-3 rounded hover:bg-gray-300 text-sm">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</div>


{/* Introduction Section */}
      <div className="container mx-auto p-8 mt-32 mb-32  ">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0 bg-gray-100 p-6 rounded-lg shadow-lg">
  <h2 className="text-4xl font-bold text-green-700 mb-4 border-b-4 border-green-700 pb-2">
    Who We Are
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed vitae urna condimentum, convallis urna id, congue nunc. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna condimentum,
    convallis urna id, congue nunc. Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit. Sed vitae urna condimentum, convallis urna id, congue nunc.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna condimentum, 
    convallis urna id, congue nunc.
  </p>
</div>

<div className="lg:w-1/2 flex justify-center">
  <img 
    src={logoo} 
    alt="Who We Are" 
    className="transform transition-transform duration-300 hover:scale-110"
  />
</div>

        </div>
      </div>

      <div className="container mx-auto p-8 mt-32">
  <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-4">
    {/* Cards Section */}
    <div className="grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-6 md:w-1/2">
      {/* Mission Card */}
      <div
        className={`cursor-pointer rounded-lg shadow-md flex items-center justify-between p-6 transition transform hover:scale-105 hover:shadow-lg ${
          activeSection === 'mission' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => setActiveSection('mission')}
      >
        <span className="text-lg font-bold">Mission</span>
        <span>🎯</span>
      </div>

      {/* Vision Card */}
      <div
        className={`cursor-pointer rounded-lg shadow-md flex items-center justify-between p-6 transition transform hover:scale-105 hover:shadow-lg ${
          activeSection === 'vision' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => setActiveSection('vision')}
      >
        <span className="text-lg font-bold">Vision</span>
        <span>👁</span>
      </div>

      {/* Motto Card */}
      <div
        className={`cursor-pointer rounded-lg shadow-md flex items-center justify-between p-6 transition transform hover:scale-105 hover:shadow-lg ${
          activeSection === 'motto' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => setActiveSection('motto')}
      >
        <span className="text-lg font-bold">Motto</span>
        <span>📢</span>
      </div>

      {/* Values Card */}
      <div
        className={`cursor-pointer rounded-lg shadow-md flex items-center justify-between p-6 transition transform hover:scale-105 hover:shadow-lg ${
          activeSection === 'values' ? 'bg-green-700 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => setActiveSection('values')}
      >
        <span className="text-lg font-bold">Values</span>
        <span>💎</span>
      </div>
    </div>

    {/* Content Section */}
    <div className="md:w-1/2 p-6 flex items-center justify-center">
      <div className="max-w-lg">
        {activeSection === 'mission' && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-green-600">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To inspire the sphere of thought towards sustainable development by partnering
              with decision-makers to come up with practical solutions that tackle complex
              development challenges.
            </p>
          </>
        )}
        {activeSection === 'vision' && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-green-600">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              To be a socially responsible world-class company that empowers development and
              fosters excellence.
            </p>
          </>
        )}
        {activeSection === 'motto' && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-green-600">Our Motto</h2>
            <p className="text-gray-700 text-lg">
              Promoting Development Through Entrepreneurship.
            </p>
          </>
        )}
        {activeSection === 'values' && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-green-600">Our Values</h2>
            <p className="text-gray-700 text-lg">
              Integrity, collaboration, sustainability, and a commitment to excellence guide
              everything we do.
            </p>
          </>
        )}
      </div>
    </div>
  </div>
</div>
 


{/* Introduction Section */}
<div className="container mx-auto p-8 mt-32  rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-green-700 mb-4 ">Our Story</h2>
            <p className="text-lg text-gray-700">
            Founded in 2000, our company started as a small family business with a passion for agriculture and a vision to bring the 
          best of Ethiopia's oil seeds and pulses to the world. Over the years, we have grown into a major player in the export market, 
          known for our quality products and reliable service.
          <p className="text-lg text-gray-700">
          Today, we work with a network of dedicated farmers and partners to ensure that our products meet the highest standards of 
          quality and sustainability. We are proud of our heritage and committed to contributing to the prosperity of our country.
          </p>
          
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={imageWhoWeAre} alt="Who We Are" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>



      

      <div className='mb-32 mt-32' >
  {/* Section Title */}
  

  <div className='mb-32 mt-32'>
      {/* Section Title */}
      

      {/* Background Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${hoveredDivisionImage})`,
          transition: "background-image 0.5s ease-in-out",
        }}
        
      >
       
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Vertical Division List */}
        <div className="relative flex flex-col justify-center items-center h-full space-y-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Our Divisions
      </h2>
          {divisions.map((division) => (
            <div
              key={division.id}
              className="flex justify-center items-center text-white text-lg font-semibold px-4 py-2 bg-green-700 bg-opacity-75 w-1/4 text-center rounded-md hover:bg-green-800 cursor-pointer transition-all"
              onMouseEnter={() => setHoveredDivisionImage(division.image)}
              onMouseLeave={() => setHoveredDivisionImage(web)}
            >
              {division.name}
            </div>
          ))}
        </div>
      </div>
    </div>
</div>

<div className="flex justify-center space-x-8 text-center mt-12">
  {/* Icon Section 1 */}
  <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
    <FontAwesomeIcon icon={faIndustry} size="3x" className="text-green-700 mb-4" />
    <h3 className="text-lg font-bold text-gray-800">Industry Expertise</h3>
    <p className="text-gray-600 text-sm mt-2">
      Years of excellence in the agriculture and export sector.
    </p>
  </div>

  {/* Icon Section 2 */}
  <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
    <FontAwesomeIcon icon={faCoffee} size="3x" className="text-green-700 mb-4" />
    <h3 className="text-lg font-bold text-gray-800">Quality Products</h3>
    <p className="text-gray-600 text-sm mt-2">
      Delivering the finest Ethiopian coffee and pulses worldwide.
    </p>
  </div>

  {/* Icon Section 3 */}
  <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
    <FontAwesomeIcon icon={faCogs} size="3x" className="text-green-700 mb-4" />
    <h3 className="text-lg font-bold text-gray-800">Innovation</h3>
    <p className="text-gray-600 text-sm mt-2">
      Continuously improving processes and services.
    </p>
  </div>

  {/* Icon Section 4 */}
  <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
    <FontAwesomeIcon icon={faPaw} size="3x" className="text-green-700 mb-4" />
    <h3 className="text-lg font-bold text-gray-800">Sustainability</h3>
    <p className="text-gray-600 text-sm mt-2">
      Promoting ethical and sustainable business practices.
    </p>
  </div>
</div>


<div className="w-auto bg-green-100 p-8 rounded-lg shadow-lg relative border-2 border-transparent mb-0 text-center mt-32">
          <h2 className="text-4xl font-semibold text-center text-green-900 mb-6">Get To Know Us</h2>
          <p className="text-gray-700 text-lg mb-6">
          Get in Touch
Have questions or want to learn more about us? We’d love to hear from you!
Feel free to reach out through our contact form
          </p>
          <Link to="/contact-us" className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300">Contact Us</Link>
        </div>
      

      
    </div>
  );
}

export default AboutUs;