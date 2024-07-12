// Manufacturing.js
import React from 'react';
import sunVitoImage from '../logo/Sunvito.png'; // Import the image
import { Link } from 'react-router-dom';

function Manufacturing() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5">Manufacturing SunVito Oil</h2>
      <p className="text-lg mb-5 justify-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam 
      sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat,
       accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, 
       consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed,
        convallis at tellus. Donec rutrum congue leo eget malesuada. Curabitur aliquet
         quam id dui posuere blandit. Nulla porttitor accumsan tincidunt. Curabitur non 
         nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh.
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.

      </p>
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 p-2">
          <img src={sunVitoImage} alt="SunVito Oil" className="rounded-lg shadow-md max-w-xs md:max-w-full h-auto"/>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <p className="text-lg mb-3">SunVito Oil is known for its purity and freshness. Our manufacturing process involves:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">Cleaning and sorting sunflower seeds.</li>
            <li className="mb-2">Pressing the seeds to extract oil.</li>
            <li className="mb-2">Filtering and refining the oil to maintain quality standards.</li>
            <li className="mb-2">Packaging the oil for distribution.</li>
          </ul>
          <p className="text-lg mb-3">For more information, please <Link to="/contact-us" className="text-green-600 hover:underline">contact us</Link>.</p>
        </div>
      </div>
    </div>
  );
}

export default Manufacturing;
