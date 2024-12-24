import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faCoffee, faCogs, faPaw } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";
import logoo from '../logo/Al-Impex.png'; // Assuming this is your image for Who We Are
import imageWhoWeAre from '../logo/al-impexLogo.jpg'; // Assuming this is your image for Who We Are
import division1Image from '../logo/Zoetiss.jpg'; // Import your division images
import division2Image from '../logo/coffee.jpg';
import division3Image from '../logo/sunv.jpg';
import division4Image from '../logo/year_of_pulses.jpg';
import division5Image from '../logo/Alstaff.jpg';
import division6Image from '../logo/delivery.jpg';
import division7Image from '../logo/Tender.png';
import '../../App.css'; // Ensure this is the correct path to your CSS file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web from '../logo/Alstaff.jpg'; // Import your division images
import webb from '../logo/intCoffee.jpg'; // Import your division images
import webbb from '../logo/anothercupping.jpg'; // Import your division images
import webbbb from '../logo/community.jpg'; // Import your division images
import webNo1 from '../logo/factory.jpg';
import webNo2 from '../logo/sunvitoD2D.jpg';
import webNo5 from '../logo/fabrica.jpg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function AboutUs() {
  const [expandedDivision, setExpandedDivision] = useState([]);
  const img=web;
  const [selectedCategory, setSelectedCategory] = useState("all"); // Category state
  const [backgroundImage, setBackgroundImage] = useState(division1Image);
  const [hoveredDivisionImage, setHoveredDivisionImage] = useState(web); // Default background image

  const divisions = [
    { id: 1, name: "Animal Health", image: division1Image },
    { id: 2, name: "Coffee", image: division2Image },
    { id: 3, name: "FMCG", image: division3Image },
    { id: 4, name: "OPS", image: division4Image }
    
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
    <div className="bg-gray-100">


      
<div>
  {/* About Us Section */}
  <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`, // Replace with the About Us banner image
        backgroundSize: "cover", // Ensures the image covers the entire area
        backgroundPosition: "center", // Centers the image
      }}
    ></div>

    {/* Semi-transparent Black Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Smaller Transparent Content Box */}
    <div 
    className="relative z-10 px-8 py-2 max-w-xl rounded-lg shadow-lg text-center bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-50 hover:shadow-xl hover:-translate-y-2 transition duration-300"
    style={{ height: 'auto', maxHeight: '700px' }} // Further reduced container height
  >
    <h1 className="text-2xl md:text-3xl font-bold text-green-800 leading-tight mb-2 mt-5">
      About Us 
    </h1>
    <p className="text-gray-200 mb-4 text-base md:text-lg">
  Discover our mission to promote excellence and innovation in dynamic markets. 
  We are committed to delivering impactful solutions that drive growth and transformation.
</p>

    
    {/* Buttons Inside the Transparent Container */}
    <div className="flex justify-center gap-4 mb-5">
    <a
          href="/about-us"
          className="bg-green-600 text-white py-2 px-4 mt-4 rounded hover:bg-green-700 transition inline-block"
        >
          Learn More
        </a>
      {/* <button className="bg-gray-200 text-gray-800 font-bold py-2 px-5 rounded-lg hover:bg-gray-300 text-lg">
        Watch the Webcast
      </button> */}
    </div>
  </div>
  </div>
</div>



<div className="container mx-auto px-8 lg:px-16 py-16 mt-56 mb-20 bg-white rounded-lg shadow-2xl">
  <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
    {/* Text Section */}
    <div className="lg:w-1/2 bg-gray-100 p-10 rounded-md shadow-md mt-20">
      <h2 className="text-4xl font-semibold text-gray-800 leading-tight border-l-4 border-green-600 pl-4 mb-6">
        Who We Are
      </h2>
      <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
        We are committed to excellence and innovation. Our solutions drive
        transformation, empower growth, and redefine industries. Integrity and
        quality form the foundation of our work, making us a trusted partner in
        delivering impactful results.
      </p>
      {/* <button className="px-6 py-3 text-white bg-green-600 rounded hover:bg-green-700 shadow-md transition">
        Learn More
      </button> */}
    </div>

   {/* Carousel Section */}
<div className="lg:w-1/2">
  <div className="group relative overflow-hidden transition-transform duration-500 hover:shadow-lg hover:scale-[1.02] rounded-lg">
    <Carousel
      showThumbs={false} // Hides thumbnails
      showIndicators={false} // Adds dots for navigation
      showStatus={false} // Hides the "3 of 3" text
      infiniteLoop
      useKeyboardArrows
      autoPlay
      interval={3000} // Adjusts autoplay speed
      showArrows={false} // Hides arrow navigation
      className="w-full rounded-lg overflow-hidden shadow-lg"
    >
      <div>
        <img
          src={webbb}
          alt="Slide 1"
          className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div>
        <img
          src={webbbb}
          alt="Slide 2"
          className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div>
        <img
          src={webNo2}
          alt="Slide 3"
          className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div>
        <img
          src={webb}
          alt="Slide 4"
          className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div>
        <img
          src={webNo1}
          alt="Slide 5"
          className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div>
        <img
          src={webNo5}
          alt="Slide 5"
          className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
    </Carousel>
  </div>
</div>

  </div>
  <div className="container mx-auto mt-44 mb-32 px-4">
          <div className="max-w-4xl mx-auto text-center mt-32 mb-20">
            <h2 className="text-4xl font-bold mt-32 mb-10 text-green-800">Our Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              At Al-Impex, we are dedicated to connecting global markets and enriching local communities through
              our comprehensive range of businesses. Our businesses are designed to uplift communities while delivering 
              highest quality products.
            </p> 
          </div>
          </div>
</div>











{/* Introduction Section */}
{/* <div className="container mx-auto p-8 mt-32  rounded-lg shadow-lg">
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
      </div>  */}



      

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
              className="flex justify-center items-center text-white text-lg font-semibold px-4 py-2 bg-green-700 bg-opacity-100 w-1/4 text-center rounded-md hover:bg-green-900 cursor-pointer transition-all"
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





<div className="flex justify-center space-x-8 text-center mt-12 mb-4 bg-gray-200">
  {/* Icon Section 1 */}
  {/* <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
    <FontAwesomeIcon icon={faIndustry} size="3x" className="text-green-700 mb-4" />
    <h3 className="text-lg font-bold text-gray-800">Industry Expertise</h3>
    <p className="text-gray-600 text-sm mt-2">
      Years of excellence in the agriculture and export sector.
    </p>
  </div> */}

  {/* Icon Section 2 */}
  {/* <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
    <FontAwesomeIcon icon={faCoffee} size="3x" className="text-green-700 mb-4" />
    <h3 className="text-lg font-bold text-gray-800">Quality Products</h3>
    <p className="text-gray-600 text-sm mt-2">
      Delivering the finest Ethiopian coffee and pulses worldwide.
    </p>
  </div> */}

  {/* Icon Section 3 */}
  {/* <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
    <FontAwesomeIcon icon={faCogs} size="3x" className="text-green-700 mb-4" />
    <h3 className="text-lg font-bold text-gray-800">Innovation</h3>
    <p className="text-gray-600 text-sm mt-2">
      Continuously improving processes and services.
    </p>
  </div> */}

  {/* Icon Section 4 */}
  {/* <div className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300">
    <FontAwesomeIcon icon={faPaw} size="3x" className="text-green-700 mb-4" />
    <h3 className="text-lg font-bold text-gray-800">Sustainability</h3>
    <p className="text-gray-600 text-sm mt-2">
      Promoting ethical and sustainable business practices.
    </p>
  </div> */}
</div>






<div className="w-auto bg-green-100 p-8 rounded-lg shadow-lg relative border-2 border-transparent mb-0 text-center mt-42">
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