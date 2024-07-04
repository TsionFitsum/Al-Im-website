import React from 'react';
import logoo from '../Components/logo/Official_al-impex_logo-removebg-preview.png';

function Navbar() {
  return (
    <>
      <nav className="bg-gray-300 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-10">
          <div className="flex items-center">
            <img src={logoo} alt="Logo" className="h-20 w-25 mr-4" />
          </div>
          <ul className="flex space-x-6">
            <li className="relative">
              <a href="#home" className="text-black font-medium p-2 rounded relative transition duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-700 before:transition-all before:duration-300 hover:before:w-full hover:text-green-700">Home</a>
            </li>
            <li className="relative">
              <a href="#about-us" className="text-black font-medium p-2 rounded relative transition duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-700 before:transition-all before:duration-300 hover:before:w-full hover:text-green-700">About Us</a>
            </li>
            <li className="relative">
              <a href="#import" className="text-black font-medium p-2 rounded relative transition duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-700 before:transition-all before:duration-300 hover:before:w-full hover:text-green-700">Import</a>
            </li>
            <li className="relative">
              <a href="#export" className="text-black font-medium p-2 rounded relative transition duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-700 before:transition-all before:duration-300 hover:before:w-full hover:text-green-700">Export</a>
            </li>
            <li className="relative">
              <a href="#profile" className="text-black font-medium p-2 rounded relative transition duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-700 before:transition-all before:duration-300 hover:before:w-full hover:text-green-700">Profile</a>
            </li>
            <li className="relative">
              <a href="#contact-us" className="text-black font-medium p-2 rounded relative transition duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-green-700 before:transition-all before:duration-300 hover:before:w-full  hover:text-green-700 ">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
