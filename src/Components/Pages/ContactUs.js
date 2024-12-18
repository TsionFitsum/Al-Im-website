import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi"; // Feather Icons
import '../../App.css'; // Ensure this is the correct path to your CSS file

function ContactUs() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 lg:px-0 flex flex-wrap items-center justify-center lg:justify-between">
        {/* Contact Details Section */}
        <div className="w-full lg:w-full mb-8 lg:mb-0 mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

          {/* Contact Info */}
          <div className="bg-white p-20 rounded-lg shadow-lg mb-6 flex flex-wrap lg:flex-nowrap items-center lg:items-start justify-between">
            {/* Phone */}
            <div className="flex flex-col items-center mb-6 lg:mb-0 lg:w-1/4">
              <div className="flex items-center justify-center w-16 h-16 border border-green-500 rounded-full mb-2">
                <FiPhone className="text-green-500 text-3xl" />
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-sm lg:text-base">CALL US</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">Office: +251116325241/93</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">Fax: +251116355241</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">Cell: +251911543781</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center mb-6 lg:mb-0 lg:w-1/4">
              <div className="flex items-center justify-center w-16 h-16 border border-green-500 rounded-full mb-2">
                <FiMail className="text-green-500 text-3xl" />
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-sm lg:text-base">EMAIL</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">info@al-impex.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center mb-6 lg:mb-0 lg:w-1/4">
              <div className="flex items-center justify-center w-16 h-16 border border-green-500 rounded-full mb-2">
                <FiMapPin className="text-green-500 text-3xl" />
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-sm lg:text-base">LOCATION</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">Kirkos Subcity, Dembel City Center 5th floor</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex flex-col items-center lg:w-1/4">
              <div className="flex items-center justify-center w-16 h-16 border border-green-500 rounded-full mb-2">
                <FiClock className="text-green-500 text-3xl" />
              </div>
              <div className="text-center">
                <p className="text-gray-700 text-sm lg:text-base">BUSINESS HOURS</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">Mon – Fri 8:30 AM – 5:30 PM</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">Saturday 8:30 AM – 12:30 PM</p>
                <p className="text-gray-700 text-sm lg:text-base font-bold">Sunday Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 mx-auto">
          {/* Text in Between */}
          <h1 className="text-xl font-bold text-center text-gray mb-2">Feel free to contact us using the details above or fill out the form below.</h1>

          {/* Send Message Form */}
          <form className="bg-gray p-6 rounded-lg shadow-lg border border-gray-300">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input type="text" id="subject" name="subject" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-green-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
