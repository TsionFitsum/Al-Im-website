import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoo from '../Components/logo/Official_al-impex_logo-removebg-preview.png';
import '../App.css'; // Correct path to App.css

function Navbar() {
  const [isImportDropdownOpen, setIsImportDropdownOpen] = useState(false);
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const getLinkClasses = (path) => {
    return `relative text-black font-medium p-2 rounded transition duration-300 ease-in-out 
      before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-700 
      before:transition-all before:duration-300 
      ${location.pathname === path ? 'before:w-full text-green-700' : 'hover:before:w-full hover:text-green-700 hover:bg-green-50 hover:bg-opacity-5'}`;
  };

  return (
    <>
      <nav className="bg-gray-100 py-4 shadow-md relative z-10">
        <div className="container mx-auto flex justify-between items-center px-10">
          <div className="flex items-center">
            <img src={logoo} alt="Logo" className="h-20 w-25 mr-4" />
          </div>
          <ul className="flex space-x-6">
            {['/', '/About-Us', '/Import', '/Export', '/Contact-Us'].map((path) => (
              <li className="relative" key={path}
                onMouseEnter={() => {
                  if (path === '/Import') setIsImportDropdownOpen(true);
                  if (path === '/Export') setIsExportDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (path === '/Import') setIsImportDropdownOpen(false);
                  if (path === '/Export') setIsExportDropdownOpen(false);
                }}>
                <Link to={path} className={getLinkClasses(path)}>
                  <div className="link-container relative">
                    <span className="relative z-10">{path === '/' ? 'Home' : path.substring(1).replace('-', ' ')}</span>
                    <div className="link-hover-bg"></div>
                  </div>
                </Link>
                {path === '/Import' && isImportDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                    <li className="px-4 py-2 hover:bg-green-100 hover:text-green-900 transition 
                    duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                      <Link to="/import/vehicles-and-trucks">Vehicles & Trucks</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-green-100 hover:text-green-900 transition 
                    duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                      <Link to="/import/construction-machinery">Construction Machinery</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-green-100 hover:text-green-900 transition 
                    duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                      <Link to="/import/tyres-and-battery">Tyres & Battery</Link>
                    </li>
                  </ul>
                )}
                {path === '/Export' && isExportDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-20">
                    <li className="px-4 py-2 hover:bg-green-100 hover:text-green-900 transition 
                    duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                      <Link to="/zala">Zala (Oil Seeds and Pulses)</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-green-100 hover:text-green-900 transition 
                    duration-300 ease-in-out" style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                      <Link to="/wezam">Wezam (Coffee)</Link>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
