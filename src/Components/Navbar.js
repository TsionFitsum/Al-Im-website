import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoo from "../Components/logo/LogoPlusSlogan-removebg-preview.png";
import slogan from "../Components/logo/slog-removebg-preview.png";


function VolcafeHeader() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [showLocations, setShowLocations] = useState(false); // State to show/hide Locations dropdown

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const toggleLocations = () => {
    setShowLocations(!showLocations); // Toggle the dropdown
  };

  return (
    <header>
      {/* Top Navbar */}
      <div className="bg-green-700 text-white relative z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <nav className="flex items-center bg-green-700 text-white ml-32 relative">
            {/* Home Tab */}
<div className="relative flex items-center nav-tab">
  <Link
    to="/"
    className="text-white hover:text-gray-100 px-6 text-lg font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-white hover:after:w-full after:transition-all after:duration-300"
  >
    Home
  </Link>
</div>


            <div className="border-l border-gray-400 h-6 mx-2"></div>

            {/* Contact Tab */}
            
            {/* <div className="border-l border-gray-400 h-6 mx-2"></div>

            {/* Careers Tab */}
            {/* <Link
              to="/contact-us"
              className="text-white hover:text-gray-300 px-4 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              Careers 
            </Link> */} 
            <div className="border-l border-gray-400 h-6 mx-2"></div>

            {/* Locations Tab */}
            <div className="relative flex items-center nav-tab">
            <button
  onClick={toggleLocations}
  className="text-white hover:text-gray-100 px-6 text-lg font-bold focus:outline-none relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1 after:bg-white hover:after:w-full after:transition-all after:duration-300"
>
  Locations
</button>

              {showLocations && (
  <div className="absolute top-full left-0 bg-green-800 text-white shadow-lg py-4 px-6 w-80">
    <h2 className="text-xl font-bold mb-4">Locations</h2>
    <div className="grid grid-cols-2 gap-4">
      {/* Africa Column */}
      <div>
        <h3 className="font-bold mb-2">Ethiopia</h3>
        <ul className="text-sm space-y-1">
          <li>Addis Ababa</li>
          <li>Adama</li>
          <li>Dilla</li>
          <li>Guji</li>
        </ul>
      </div>

      {/* Asia Pacific Column */}
      <div>
        <h3 className="font-bold mb-2">Addis Ababa</h3>
        <ul className="text-sm space-y-1">
          <li>Dembel-Head Quarter</li>
          <li>Jacross</li>
          <li>Legetafo</li>
          <li>Kality</li>
          
        </ul>
      </div>

      {/* Europe Column
      <div>
        <h3 className="font-bold mb-2">Europe</h3>
        <ul className="text-sm space-y-1">
          <li>Germany</li>
          <li>Slovenia</li>
          <li>Ukraine</li>
          <li>Italy</li>
          <li>Spain</li>
          <li>United Kingdom</li>
        </ul>
      </div> */}
    </div>
  </div>
)}

            </div>
          </nav>
        </div>
      </div>




      {/* Second Row Navbar */}
     {/* Second Row Navbar */}
<div className="bg-white text-black relative z-20">


<div className="container mx-auto px-4 py-2 flex items-center">
  {/* Logo and Slogan */}
  <div className="flex items-center">
  <Link to="/"><img 
      src={logoo} 
      alt="Logo" 
      className="mr-4" 
      style={{ height: "170px", width: "auto" }} 
    /> </Link> 
    
    

  </div>
  {/* <img 
  src={slogan} 
  alt="Slogan" 
  className="-ml-14 mt-32" 
  style={{ height: "150px", width: "auto" }} 
/> */}

  {/* Secondary Links */}
  <div className="flex items-center space-x-6 ml-auto">
    {/* About Tab */}
    <div
      className="relative nav-tab text-bold"
      onMouseEnter={() => handleMouseEnter("about")}
      onMouseLeave={handleMouseLeave}
    >
      About ↓
      {hoveredMenu === "about" && (
        <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-56 dropdown">
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="/about-us">Our Company</Link>
          </li>
        </ul>
      )}
    </div>

    {/* Coffee Network Tab */}
    <div
      className="relative nav-tab"
      onMouseEnter={() => handleMouseEnter("network")}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/our-products" className="font-bold hover:text-gray-700">
        Our Products ↓
      </Link>
      {/* {hoveredMenu === "network" && (
        <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-56 dropdown">
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="/manufacturing">Edible Oil</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="https://wezam-webzite.vercel.app/">Wezam</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to="https://zala-nine.vercel.app/">Zala</Link>
          </li>
        </ul>
      )} */}
    </div>

    <Link to="/contact-us" className="font-bold hover:text-gray-700">
      Get In Touch
    </Link>
  </div>
</div>


</div>

    </header>
  );
}

export default VolcafeHeader;
