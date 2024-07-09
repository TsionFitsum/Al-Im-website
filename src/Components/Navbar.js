import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoo from '../Components/logo/Official_al-impex_logo-removebg-preview.png';

function Navbar() {
  const [isImportDropdownOpen, setIsImportDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const hoverMaskStyle = {
    position: 'relative',
    display: 'inline-block',
    padding: '2px',
    transition: 'background 0.3s ease-in-out'
  };

  const hoverMaskBeforeStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url(al-impex-website/src/Components/logo/ne.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'opacity 0.3s ease-in-out',
    opacity: 0
  };

  const hoverMaskHoverBeforeStyle = {
    opacity: 1
  };

  const getLinkClasses = (path) => {
    return `text-black font-medium p-2 rounded relative transition 
      duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5
      before:bg-green-700 before:transition-all before:duration-300 
      ${location.pathname === path ? 'before:w-full text-green-700' : 'hover:before:w-full hover:text-green-700'}`;
  };

  return (
    <>
      <nav className="bg-gray-100 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-10">
          <div className="flex items-center">
            <img src={logoo} alt="Logo" className="h-20 w-25 mr-4" />
          </div>
          <ul className="flex space-x-6">
            <li className="relative">
              <Link to="/" className={getLinkClasses('/')}>
                <span style={hoverMaskStyle}>
                  Home
                  <span style={hoverMaskBeforeStyle} className="hover-mask-before" />
                </span>
              </Link>
            </li>
            <li className="relative">
              <Link to='/about-us' className={getLinkClasses('/about-us')}>
                <span style={hoverMaskStyle}>
                  About Us
                  <span style={hoverMaskBeforeStyle} className="hover-mask-before" />
                </span>
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsImportDropdownOpen(true)}
              onMouseLeave={() => setIsImportDropdownOpen(false)}
            >
              <Link to='/import' className={getLinkClasses('/import')}>
                <span style={hoverMaskStyle}>
                  Import
                  <span style={hoverMaskBeforeStyle} className="hover-mask-before" />
                </span>
              </Link>
              {isImportDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                  <li className="px-4 py-2 hover:bg-green-100 hover:text-green-700 transition 
                  duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                    <Link to="/import/vehicles-and-trucks">Vehicles & Trucks</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-100 hover:text-green-700 transition 
                  duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                    <Link to="/import/construction-machinery">Construction Machinery</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-100 hover:text-green-700 transition 
                  duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                    <Link to="/import/tyres-and-battery">Tyres & Battery</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsExportDropdownOpen(true)}
              onMouseLeave={() => setIsExportDropdownOpen(false)}
            >
              <Link to='/export' className={getLinkClasses('/export')}>
                <span style={hoverMaskStyle}>
                  Export
                  <span style={hoverMaskBeforeStyle} className="hover-mask-before" />
                </span>
              </Link>
              {isExportDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                  <li className="px-4 py-2 hover:bg-green-100 hover:text-green-700 transition 
                  duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                    <Link to="/export/vehicles-and-trucks">Vehicles & Trucks</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-100 hover:text-green-700 transition 
                  duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                    <Link to="/export/construction-machinery">Construction Machinery</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-green-100 hover:text-green-700 transition 
                  duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                    <Link to="/export/tyres-and-battery">Tyres & Battery</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <Link to='/contact-us' className={getLinkClasses('/contact-us')}>
                <span style={hoverMaskStyle}>
                  Contact Us
                  <span style={hoverMaskBeforeStyle} className="hover-mask-before" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
