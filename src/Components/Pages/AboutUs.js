import React, { useState } from "react";
import imageWhoWeAre from '../logo/al-impexLogo.jpg'; // Assuming this is your image for Who We Are
import division1Image from '../logo/delivery.jpg'; // Import your division images
import division2Image from '../logo/delivery.jpg';
import division3Image from '../logo/delivery.jpg';
import division4Image from '../logo/delivery.jpg';
import division5Image from '../logo/delivery.jpg';
import division6Image from '../logo/delivery.jpg';
import division7Image from '../logo/delivery.jpg';
import '../../App.css'; // Ensure this is the correct path to your CSS file

function AboutUs() {
  const [expandedDivisions, setExpandedDivisions] = useState([]);

  const toggleExpansion = (index) => {
    if (expandedDivisions.includes(index)) {
      setExpandedDivisions(expandedDivisions.filter(item => item !== index));
    } else {
      setExpandedDivisions([...expandedDivisions, index]);
    }
  };

  const isExpanded = (index) => {
    return expandedDivisions.includes(index);
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full h-[300px] bg-center bg-cover bg-green-700 flex flex-col items-center justify-center text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">About Al-Impex</h1>
          <p className="mt-2 text-xl">Home / About Al-Impex</p> 
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto p-8 mt-16  rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed vitae urna condimentum, convallis urna id, congue nunc.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna condimentum,
             convallis urna id, congue nunc.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed vitae urna condimentum, convallis urna id, congue nunc.Lorem ipsum dolor 
              sit amet, consectetur adipiscing elit.
             Sed vitae urna condimentum, convallis urna id, congue nunc.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img src={imageWhoWeAre} alt="Who We Are" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

{/* Vision, Mission, and Values Section */}
<div className="container mx-auto p-8 mt-44">
  {/* <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Our Vision, Mission, and Values</h2> */}

  <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-4">
    
    {/* Mission Card */}
    <div className="rounded-lg bg-gray-50 shadow-md border-l-4 border-yellow-500 flex-1 p-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-0 left-0 w-16 h-full bg-yellow-500 opacity-20"></div>
      <h3 className="text-2xl font-bold text-yellow-600 mb-4">Our Mission</h3>
      <p className="text-gray-700 mb-6">
        Promoting Development Through Entrepreneurship.
      </p>
      {/* <div className="absolute bottom-4 right-4 text-sm font-bold text-gray-500">Step 01</div> */}
    </div>

    {/* Vision Card */}
    <div className="rounded-lg bg-gray-50 shadow-md border-l-4 border-green-500 flex-1 p-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-0 left-0 w-16 h-full bg-green-500 opacity-20"></div>
      <h3 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h3>
      <p className="text-gray-700 mb-6">
        To be a socially responsible world calss company.
      </p>
      {/* <div className="absolute bottom-4 right-4 text-sm font-bold text-gray-500">Step 02</div> */}
    </div>

    {/* Values Card */}
    <div className="rounded-lg bg-gray-50 shadow-md border-l-4 border-blue-500 flex-1 p-6 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-0 left-0 w-16 h-full bg-blue-500 opacity-20"></div>
      <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Values</h3>
      <p className="text-gray-700 mb-6">
        Integrity, collaboration, sustainability, and a commitment to excellence guide everything we do.
      </p>
      {/* <div className="absolute bottom-4 right-4 text-sm font-bold text-gray-500">Step 03</div> */}
    </div>

  </div>
</div> 


{/* Introduction Section */}
<div className="container mx-auto p-8 mt-16  rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="lg:w-1/2 lg:pr-10 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-green-700 mb-4">Our Story</h2>
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
      </div>





      {/* Divisions Section */}
      <div className="container mx-auto p-8 mt-44">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Our Divisions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Division 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <img src={division1Image} alt="Division 1" className="rounded-t-lg" />
            <div className="p-4 bg-gray-100 text-gray-700">
              <h3 className="text-xl font-bold mb-2">NOVUS(Edibleoil)</h3>
              {isExpanded(1) ?
                <>
                  <p className="text-gray-700 mb-4">Description of Division 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna condimentum, convallis urna id, congue nunc.</p>
                  <button onClick={() => toggleExpansion(1)} className="text-green-500">Read Less</button>
                </>
                :
                <button onClick={() => toggleExpansion(1)} className="text-green-500">Read More</button>
              }
            </div>
          </div>

          {/* Division 2 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <img src={division2Image} alt="Division 2" className="rounded-t-lg" />
            <div className="p-4 bg-gray-100 text-gray-700">
              <h3 className="text-xl font-bold mb-2">WEZAM(Coffee Export)</h3>
              {isExpanded(2) ?
                <>
                  <p className="text-gray-700 mb-4">Description of Division 2. Quisque et ligula interdum, eleifend augue eu, accumsan lacus.</p>
                  <button onClick={() => toggleExpansion(2)} className="text-green-500">Read Less</button>
                </>
                :
                <button onClick={() => toggleExpansion(2)} className="text-green-500">Read More</button>
              }
            </div>
          </div>

          {/* Division 3 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <img src={division3Image} alt="Division 3" className="rounded-t-lg" />
            <div className="p-4 bg-gray-100 text-gray-700">
              <h3 className="text-xl font-bold mb-2">ZALA(OPS)</h3>
              {isExpanded(3) ?
                <>
                  <p className="text-gray-700 mb-4">Description of Division 3. Fusce tincidunt risus at dui hendrerit consectetur.</p>
                  <button onClick={() => toggleExpansion(3)} className="text-green-500">Read Less</button>
                </>
                :
                <button onClick={() => toggleExpansion(3)} className="text-green-500">Read More</button>
              }
            </div>
          </div>

          {/* Division 4 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <img src={division4Image} alt="Division 4" className="rounded-t-lg" />
            <div className="p-4 bg-gray-100 text-gray-700">
              <h3 className="text-xl font-bold mb-2">Animal Health</h3>
              {isExpanded(4) ?
                <>
                  <p className="text-gray-700 mb-4">Description of Division 4. Proin id sem id magna varius ullamcorper.</p>
                  <button onClick={() => toggleExpansion(4)} className="text-green-500">Read Less</button>
                </>
                :
                <button onClick={() => toggleExpansion(4)} className="text-green-500">Read More</button>
              }
            </div>
          </div>

          {/* Division 5 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <img src={division5Image} alt="Division 5" className="rounded-t-lg" />
            <div className="p-4 bg-gray-100 text-gray-700">
              <h3 className="text-xl font-bold mb-2">FMCG(Sales)</h3>
              {isExpanded(5) ?
                <>
                  <p className="text-gray-700 mb-4">Description of Division 5. Duis sollicitudin est vel sem placerat, quis auctor tortor cursus.</p>
                  <button onClick={() => toggleExpansion(5)} className="text-green-500">Read Less</button>
                </>
                :
                <button onClick={() => toggleExpansion(5)} className="text-green-500">Read More</button>
              }
            </div>
          </div>

          {/* Division 6 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <img src={division6Image} alt="Division 6" className="rounded-t-lg" />
            <div className="p-4 bg-gray-100 text-gray-700">
              <h3 className="text-xl font-bold mb-2">General Merchendise</h3>
              {isExpanded(6) ?
                <>
                  <p className="text-gray-700 mb-4">Description of Division 6. Vivamus eget odio vel justo aliquet rutrum.</p>
                  <button onClick={() => toggleExpansion(6)} className="text-green-500">Read Less</button>
                </>
                :
                <button onClick={() => toggleExpansion(6)} className="text-green-500">Read More</button>
              }
            </div>
          </div>

          {/* Division 7 */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transform transition duration-500 hover:scale-105">
            <img src={division7Image} alt="Division 7" className="rounded-t-lg" />
            <div className="p-4 bg-gray-100 text-gray-700">
              <h3 className="text-xl font-bold mb-2">Tender</h3>
              {isExpanded(7) ?
                <>
                  <p className="text-gray-700 mb-4">Description of Division 7. Integer nec mauris vitae lacus fermentum vehicula.</p>
                  <button onClick={() => toggleExpansion(7)} className="text-green-500">Read Less</button>
                </>
                :
                <button onClick={() => toggleExpansion(7)} className="text-green-500">Read More</button>
              }
            </div>
          </div>
        </div>
      </div>

      

      
    </div>
  );
}

export default AboutUs;
