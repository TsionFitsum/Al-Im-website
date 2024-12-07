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
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Navbar */}
          <nav className="flex items-center space-x-6 bg-black text-white ml-32">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/" className="text-white hover:text-gray-300">
                Home ⌄
              </Link>
              {hoveredMenu === "home" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-48">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/home/option1">Option 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/home/option2">Option 2</Link>
                  </li>
                </ul>
              )} 
            </div>

            <Link to="/offices" className="text-white hover:text-gray-300">
              Offices
            </Link>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("careers")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/careers" className="text-white hover:text-gray-300">
                Careers
              </Link>
              {hoveredMenu === "careers" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-48">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/careers/option1">Option 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/careers/option2">Option 2</Link>
                  </li>
                </ul>
              )}
            </div>

            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Second Row Navbar */}
      <div className="bg-white text-black">
        <div className="container mx-auto px-4 py-2 flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoo}
              alt="Logo"
              className="mr-4"
              style={{ height: "100px", width: "auto" }}
            />
          </div>

          {/* Secondary Links */}
          <div className="flex items-center space-x-6 ml-auto">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about" className="hover:text-gray-700">
                About
              </Link>
              {hoveredMenu === "about" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-56">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/about/company">Our Company</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/about/team">Our Team</Link>
                  </li>
                </ul>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("network")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/network" className="hover:text-gray-700">
                Our Coffee Network
              </Link>
              {hoveredMenu === "network" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-56">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/network/global">Global Network</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/network/local">Local Partnerships</Link>
                  </li>
                </ul>
              )}
            </div>

            <Link to="/sustainability" className="hover:text-gray-700">
              Sustainability
            </Link>
            <Link to="/news" className="hover:text-gray-700">
              News and Impact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default VolcafeHeader;


