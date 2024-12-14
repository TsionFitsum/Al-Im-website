
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoo from "../Components/logo/Official_al-impex_logo-removebg-preview.png";

function VolcafeHeader() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <header>
      {/* Top Navbar */}
      <div className="bg-black text-white relative z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <nav className="flex items-center bg-black text-white ml-32 relative">
            
            {/* Home Tab */}
            <div
              className="relative flex items-center nav-tab"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className="text-white hover:text-gray-300 px-4">
                Home 
              </Link>
              {/* {hoveredMenu === "home" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-48 dropdown">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/home/option1">Option 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/home/option2">Option 2</Link>
                  </li>
                </ul>
              )} */}
            </div>

            <div className="border-l border-gray-500 h-6 mx-2"></div>


            <div className="border-l border-gray-500 h-6 mx-2"></div>

            {/* Contact Tab */}
            <div className="flex items-center">
              <Link to="/contact-us" className="text-white hover:text-gray-300 px-4">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>

            {/* Second Row Navbar */}
            <div className="bg-white text-black relative z-20">
        <div className="container mx-auto px-4 py-2 flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logoo} alt="Logo" className="mr-4" style={{ height: "100px", width: "auto" }} />
          </div>

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
                  {/* <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/about/team">Our Team</Link>
                  </li> */}
                </ul>
              )}
            </div>


{/* Coffee Network Tab */}
            <div
              className="relative nav-tab"
              onMouseEnter={() => handleMouseEnter("network")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/network" className="font-bold hover:text-gray-700">
                Our Services and Products ↓
              </Link>
              {hoveredMenu === "network" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-56 dropdown">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/manufacturing">Manufacturing</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/wezam">Wezam</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/zala">Zala</Link>
                  </li>
                </ul>
              )}
            </div>

            <Link to="/contact-us" className="font-bold hover:text-gray-700">
              Get In Touch
            </Link>
            {/* <Link to="/news" className="font-bold hover:text-gray-700">
              News and Impact
            </Link> */}
          </div>
        </div>
      </div>

    </header>
  );
}

export default VolcafeHeader;