import React, { useState, useEffect } from 'react';
import image1 from '../logo/sunv.jpg';
import image3 from '../logo/mas.jpg';
import image4 from '../logo/novuss.jpg';
import image5 from '../logo/fafrica.jpg';
import imagee from '../logo/AGRIC.jpg';
import imageee from '../logo/loading.jpg';
import imageNo1 from '../logo/tafoWarehouse.jpg';
import imageNo2 from '../logo/tafo.jpg';
import imageNo3 from '../logo/commm.jpg';
import imageNo4 from '../logo/Novusjerrycan.jpg';
import imageNo5 from '../logo/fabrica.jpg';
import image7 from '../logo/zoetis.jpeg';
import image8 from '../logo/tyre.webp';
import image10 from '../logo/Construction_9.png';
import image11 from '../logo/edible oil.webp';
import image12 from '../logo/agri.jpg';
import brand1 from '../logo/amce.jpeg';
import deliveryImage from '../logo/amce.jpeg';
import brand3 from '../logo/amce.jpeg';
import brand4 from '../logo/amce.jpeg';
import brand5 from '../logo/Tender.png';
import brand6 from '../logo/amce.jpeg';
import brand7 from '../logo/amce.jpeg';
import brand8 from '../logo/amce.jpeg';
import importt from '../logo/van.webp';
import exportt from '../logo/export.jpg';
import logo from '../logo/al-impexLogo.jpg';
import he from '../logo/web.jpg';
import Parallax from './Parallax';



const Home = () => {
  const images = [image1, image5, image3, image4, image7, image10, image11, image8];
  const img = he ;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMoreCard1, setShowMoreCard1] = useState(false);
  const [showMoreCard2, setShowMoreCard2] = useState(false);
  const [showMoreCard3, setShowMoreCard3] = useState(false);
  const [showMoreCard4, setShowMoreCard4] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Example Corp',
      text: 'Working with Al-Impex has been transformative for our business. Their dedication to excellence is unmatched.'
    },
    {
      name: 'Jane Smith',
      role: 'Director, Global Solutions',
      text: 'The team at Al-Impex consistently delivers exceptional results. We value our partnership immensely.'
    },
    {
      name: 'Ahmed Khan',
      role: 'Founder, InnovateTech',
      text: 'Al-Impex has been instrumental in helping us achieve our international growth objectives.'
    }
  ];

  const handleReadMoreCard1 = () => {
    setShowMoreCard1(!showMoreCard1);
  };

  const handleReadMoreCard2 = () => {
    setShowMoreCard2(!showMoreCard2);
  };

  const handleReadMoreCard3 = () => {
    setShowMoreCard3(!showMoreCard3);
  };
  const handleReadMoreCard4 = () => {
    setShowMoreCard4(!showMoreCard4);
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="overflow-hidden">
     {/* Hero Section */}
<div className="relative flex items-center justify-center h-[500px] bg-gray-50">
  {/* Parallax Background */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center"
    style={{
      backgroundImage: `url(${he})`,
      backgroundAttachment: 'fixed', // Enables parallax effect
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  ></div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Hero Content Container (Smaller Transparent Container with Buttons Inside) */}
  <div
    className="relative z-10 px-8 py-2 max-w-xl rounded-lg shadow-lg text-center bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-50 hover:shadow-xl hover:-translate-y-2 transition duration-300"
    style={{ height: 'auto', maxHeight: '700px' }} // Further reduced container height
  >
    <h1 className="text-2xl md:text-3xl font-bold text-green-800 leading-tight mb-2 mt-5">
      Promoting Development Through Entrepreneurship.
    </h1>
    <p className="text-gray-200 mb-4 text-lg md:text-xl">
      Achieving steady growth and performance in dynamic markets through excellence and innovation.
    </p>
    
    {/* Buttons Inside the Transparent Container */}
    <div className="flex justify-center gap-4 mb-5">
    <a
          href="/about-us"
          className="bg-gray-200 text-gray-900 py-2 px-4 mt-4 rounded hover:bg-green-700 transition inline-block"
        >
          Learn More
        </a>
      {/* <button className="bg-gray-200 text-gray-800 font-bold py-2 px-5 rounded-lg hover:bg-gray-300 text-lg">
        Watch the Webcast
      </button> */}
    </div>
  </div>
</div>





 {/* What We Do Section */}
 <div className="bg-gray-100 py-12 mb-0 relative z-10  ">
        <div className="container mx-auto mt-32 mb-32 px-4">
          <div className="max-w-4xl mx-auto text-center mt-32 mb-20">
            <h2 className="text-4xl font-bold mt-32 mb-10 text-green-800">What We Do</h2>
            <p className="text-xl text-gray-600 mb-8">
              At Al-Impex, we are dedicated to connecting global markets and enriching local communities through
              our comprehensive range of businesses. Our businesses are designed to uplift communities while delivering 
              highest quality products.
            </p> 
          </div>
          </div>





          
          <div className="flex flex-wrap justify-center mb-8 container mx-auto p-4">
          <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2 ">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image12} alt="Card 4" className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center text-green-700">Agricultural Development</h3>
        <p className="text-gray-700 text-sm">Advancing agricultural development through innovative practices and sustainable 
          solutions. </p>
        <div className="text-center">
          <button 
            onClick={handleReadMoreCard4}
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2 text-sm"
          >
            {showMoreCard4 ? 'Read Less' : 'Read More'}
          </button>
          {showMoreCard4 && (
            <p className="text-gray-700 text-sm mt-2">Al-Impex is helping to build resilient agricultural systems that 
            feed communities and contribute to economic development. Our focus is on fostering growth that balances 
            productivity with environmental stewardship, ensuring a lasting impact on both local and global scales.
            By embracing innovation and prioritizing sustainability, we aim to contribute to the advancement of agriculture 
            as a cornerstone of economic development.</p>
          )}
        </div>
      </div>
    </div>
  </div>




  <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2 mb-14">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={importt} alt="Card 2" className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center text-green-700">Distribution</h3>
        <p className="text-gray-700 text-sm">Delivering excellence to every corner: Reliable distribution of high-quality products by Al-Impex.</p>
        <div className="text-center">
          <button 
            onClick={handleReadMoreCard2} 
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2 text-sm"
          >
            {showMoreCard2 ? 'Read Less' : 'Read More'}
          </button>
          {showMoreCard2 && (
            <p className="text-gray-700 text-sm mt-2">With a focus on efficiency and quality, we distribute our premium products.
            Our extensive network and commitment to excellence allow us to meet the demands of diverse industries while maintaining 
            the highest standards of reliability and customer satisfaction.
            Al-Impex is not just a distributor; we are a reliable partner invested in your success, delivering the products you need 
            when and where you need them most.</p>

          )}
        </div>
      </div>
    </div>
  </div>


  <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2 mb-10">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={exportt} alt="Card 1" className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center text-green-700">Export</h3>
        <p className="text-gray-700 text-sm">Connecting global markets with premium exports: Coffee, oilseeds, spices, and pulses from Al-Impex.</p>
        <div className="text-center">
          <button 
            onClick={handleReadMoreCard1}
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2 text-sm"
          >
            {showMoreCard1 ? 'Read Less' : 'Read More'}
          </button>
          {showMoreCard1 && (
            <p className="text-gray-700 text-sm mt-2">At Al-Impex, we take pride in being a trusted partner in global trade, connecting markets with 
            Ethiopia’s finest exports. Our product range includes premium-grade coffee, oilseeds, spices, and pulses, 
            cultivated with care and precision. Each product embodies the richness of Ethiopian agriculture, ensuring 
            quality and sustainability at every step of the supply chain.</p>
          )}
        </div>
      </div>
    </div>
  </div>



<div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-2">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image11} alt="Card 3" className="w-full h-40 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-center text-green-700">Manufacturing</h3>
        <p className="text-gray-700 text-sm">Crafting excellence locally: Premium manufacturing solutions by Al-Impex, tailored to your needs.</p>
        <div className="text-center">
          <button 
            onClick={handleReadMoreCard3}
            className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 mt-2 text-sm"
          >
            {showMoreCard3 ? 'Read Less' : 'Read More'}
          </button>
          {showMoreCard3 && (
            <p className="text-gray-700 text-sm mt-2">Al-Impex takes pride in offering premium manufacturing solutions 
            tailored to meet the needs of our customers. Our focus is on producing high-quality edible oils, ensuring 
            consistency, purity, and excellent flavor. From sourcing the best raw materials to maintaining rigorous 
            quality control during production, we are committed to delivering products that exceed expectations.</p>
          )}
        </div>
      </div>
    </div>
  </div>

  <div className="container mx-auto mt-24 mb-32 px-4">
          <div className="max-w-4xl mx-auto text-center mt-4 mb-4">
           
            <p className="text-xl text-gray-600 mb-4">
              At Al-Impex, we are dedicated to connecting global markets and enriching local communities through
              our comprehensive range of businesses. Our businesses are designed to uplift communities while delivering 
              highest quality products.
            </p> 
          </div>
          </div>

  
</div>
          </div>







{/* <div>
<div className="bg-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 mt-14 mb-14">
      {/* Text Content */}
      {/* <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Empowering Global Trade from Ethiopia
        </h2>
        <p className="text-gray-600 mb-6">
        Rooted in Ethiopia, we specialize in exporting premium coffee, oilseeds, and pulses to global markets. 
        As a trusted importer of diverse materials and a manufacturer of high-quality coffee and edible oil, 
        we also take pride in distributing oil to meet growing regional demands.
        </p>
        <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition">
        Experience Our Commitment to Quality and Sustainability
        </button>
      </div> */}

      {/* Image Section */}
      {/* <div className="md:w-1/2">
        <img
          src="https://via.placeholder.com/600x400" // Replace with your image URL
          alt="Agriculture"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
</div> */} 











         
{/* <section class="bg-gray-100 py-12 mt-14 ">
  <div class="container mx-auto text-center mt-14 mb-14"> */}
    {/* <!-- Section Title --> */}
    {/* <h2 class="text-3xl font-bold text-green-700 mb-24">
      Some Counts That Matter
    </h2> */}

    {/* <!-- Hexagon Grid --> */}
    {/* <div class="flex flex-wrap justify-center gap-6"> */}
      {/* <!-- Hexagon 1 --> */}
      {/* <div class="hexagon flip-container">
        <div class="hexagon-inner">
          <div class="hexagon-front">
            <p class="text-4xl font-bold text-white">15</p>
          </div>
          <div class="hexagon-back">
            <p class="text-lg font-bold text-white">Projects</p>
          </div>
        </div>
      </div> */}

      {/* <!-- Hexagon 2 --> */}
      {/* <div class="hexagon flip-container">
        <div class="hexagon-inner">
          <div class="hexagon-front">
            <p class="text-4xl font-bold text-white">200 +</p>
          </div>
          <div class="hexagon-back">
            <p class="text-lg font-bold text-white">Clients</p>
          </div>
        </div>
      </div> */}

      {/* <!-- Hexagon 3 --> */}
      {/* <div class="hexagon flip-container">
        <div class="hexagon-inner">
          <div class="hexagon-front">
            <p class="text-4xl font-bold text-white">200 +</p>
          </div>
          <div class="hexagon-back">
            <p class="text-lg font-bold text-white">Tasks Completed</p>
          </div>
        </div>
      </div> */}

      {/* <!-- Hexagon 4 --> */}
      {/* <div class="hexagon flip-container">
        <div class="hexagon-inner">
          <div class="hexagon-front">
            <p class="text-4xl font-bold text-white">5</p>
          </div>
          <div class="hexagon-back">
            <p class="text-lg font-bold text-white">Locations</p>
          </div>
        </div>
      </div> */}

      {/* <!-- Hexagon 5 --> */}
      {/* <div class="hexagon flip-container">
        <div class="hexagon-inner">
          <div class="hexagon-front">
            <p class="text-4xl font-bold text-white">25 +</p>
          </div>
          <div class="hexagon-back">
            <p class="text-lg font-bold text-white">International Clients</p>
          </div>
        </div>
      </div> */}
    {/* </div>
  </div>
</section> */}




{/* <div>
  <div className="bg-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 mt-14 mb-14">
    {/* Image Section (Now First) */}
    {/* <div className="md:w-1/2">
      <img
        src="https://via.placeholder.com/600x400" // Replace with your image URL
        alt="Agriculture"
        className="rounded-lg shadow-lg"
      />
    </div> */} 

    {/* Text Content (Now Second) */}
    {/* <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Empowering Global Trade from Ethiopia
      </h2>
      <p className="text-gray-600 mb-6">
        Rooted in Ethiopia, we specialize in exporting premium coffee, oilseeds, and pulses to global markets. 
        As a trusted importer of diverse materials and a manufacturer of high-quality coffee and edible oil, 
        we also take pride in distributing oil to meet growing regional demands.
      </p>
      <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition">
        Experience Our Commitment to Quality and Sustainability
      </button>
    </div> */}
  {/* </div>
</div> */}



<div>
      {/* Your other sections */}

      <div>
      {/* Your other sections */}

      {/* Parallax Carousel Section */}
      <Parallax
        images={[image1,  image3, image4, image5, imagee, imageee, imageNo1, imageNo2, imageNo3, imageNo4, imageNo5]} // Array of images for the carousel
        height="600px" // Optional: Set the height of the carousel
      />

      {/* Your other sections */}
    </div>

      {/* Your other sections */}
    </div>






{/* Brands We Work With */}
<div className="bg-gray-200 flex items-center justify-center ">
  <div className="logos bg-white rounded-lg shadow-lg mx-auto  mt-4 mb-4">
    <div className="small-container p-4 flex items-center">
      <div className="flex-1 text-zoom-in">
        <h3 className="text-2xl font-bold mb-2 text-green-700 text-center mb-5">
          Brands We Work With
        </h3>
        <p className="text-gray-500 text-center mb-5">
          Our company works with different brands from around the world.
        </p>
      </div>
    </div> 
    <div className="logos-slide text-center p-4">
      {[
        logo, brand7, image7, image11, brand5,
        logo, brand7, image7, image11, brand5,
        logo, brand7, image7, image11, brand5
      ].map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`logo-${index}`}
          className="inline-block mx-2 my-4"
        />
      ))}
    </div>
  </div>
</div>


      
    </div>
  );
};

export default Home;