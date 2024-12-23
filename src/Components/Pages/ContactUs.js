
import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi"; // Feather Icons
import '../../App.css'; // Ensure this is the correct path to your CSS file

function ContactUs() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <h1 className="text-5xl font-extrabold text-center text-green-800 mb-12">
          Get In Touch
        </h1>

        {/* Contact Details Section */}
        <div className="bg-white p-10 rounded-lg shadow-lg mb-16 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
          {/* Contact Info Blocks */}
          {[
            {
              icon: <FiPhone className="text-green-500 text-4xl" />,
              title: "CALL US",
              details: [
                "Office: +251116325241/93",
                "Fax: +251116355241",
                "Cell: +251911543781",
              ],
            },
            {
              icon: <FiMail className="text-green-500 text-4xl" />,
              title: "EMAIL",
              details: ["info@al-impex.com"],
            },
            {
              icon: <FiMapPin className="text-green-500 text-4xl" />,
              title: "LOCATION",
              details: [
                "Kirkos Subcity, Dembel City Center 5th Floor",
                "Addis Ababa, Ethiopia",
              ],
            },
            {
              icon: <FiClock className="text-green-500 text-4xl" />,
              title: "BUSINESS HOURS",
              details: [
                "Mon – Fri: 8:30 AM – 5:30 PM",
                "Saturday: 8:30 AM – 12:30 PM",
                "Sunday: Closed",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center lg:w-1/4 space-y-4"
            >
              <div className="flex items-center justify-center w-16 h-16 border border-green-500 rounded-full shadow-md">
                {item.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h2>
              {item.details.map((detail, idx) => (
                <p key={idx} className="text-sm lg:text-base text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>


{/* Contact Form Section */}
        <div className="bg-white p-10 rounded-lg shadow-lg mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-center text-green-800 mb-14">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example12345@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;