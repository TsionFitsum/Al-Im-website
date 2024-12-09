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
                Home ↓
              </Link>
              {hoveredMenu === "home" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-48 dropdown">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/home/option1">Option 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/home/option2">Option 2</Link>
                  </li>
                </ul>
              )}
            </div>

            <div className="border-l border-gray-500 h-6 mx-2"></div>

            {/* Offices Tab */}
            <div
              className="relative flex items-center nav-tab"
              onMouseEnter={() => handleMouseEnter("offices")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/offices" className="text-white hover:text-gray-300 px-4">
                Offices ↓
              </Link>
              {hoveredMenu === "offices" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-48 dropdown">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/offices/asia">Asia</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/offices/europe">Europe</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/offices/africa">Africa</Link>
                  </li>
                </ul>
              )}
            </div>

            <div className="border-l border-gray-500 h-6 mx-2 bold"></div>

            {/* Careers Tab */}
            <div
              className="relative flex items-center nav-tab"
              onMouseEnter={() => handleMouseEnter("careers")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/careers" className="text-white hover:text-gray-300 px-4">
                Careers ↓
              </Link>
              {hoveredMenu === "careers" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-48 dropdown">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/careers/jobs">Job Openings</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/careers/internships">Internships</Link>
                  </li>
                </ul>
              )}
            </div>

            <div className="border-l border-gray-500 h-6 mx-2"></div>

            {/* Contact Tab */}
            <div className="flex items-center">
              <Link to="/contact" className="text-white hover:text-gray-300 px-4">
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
              className="relative nav-tab"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/about" className="font-bold hover:text-gray-700">
                About ↓
              </Link>
              {hoveredMenu === "about" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-56 dropdown">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/about/company">Our Company</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/about/team">Our Team</Link>
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
              <Link to="/network" className="font-bold hover:text-gray-700">
                Our Coffee Network ↓
              </Link>
              {hoveredMenu === "network" && (
                <ul className="absolute top-full left-0 bg-black text-white shadow-lg py-2 rounded w-56 dropdown">
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/network/global">Global Network</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-800">
                    <Link to="/network/local">Local Partnerships</Link>
                  </li>
                </ul>
              )}
            </div>

            <Link to="/sustainability" className="font-bold hover:text-gray-700">
              Sustainability
            </Link>
            <Link to="/news" className="font-bold hover:text-gray-700">
              News and Impact
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
}

export default VolcafeHeader;
