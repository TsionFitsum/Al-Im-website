import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import images
import image1 from '../logo/year_of_pulses.jpg';
import image2 from '../logo/al-impexLogo.jpg'; // Add your other images here

function OilSeedsAndPulses() {
  const images = [image1, image2]; // Add all your images here

  return (
    <div>
      <div className="relative w-full h-[500px] bg-center bg-cover" style={{ backgroundImage: `url(${images[0]})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Oil Seeds & Pulses</h1>
          <p className="mt-2">Home / Export / Oil Seeds & Pulses</p>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-3xl font-bold mb-4">Export of Oil Seeds & Pulses</h2>
        <p className="mb-4">
          Our company is a major exporter of agricultural products mainly oil seeds and pulses from Ethiopia to the global market. 
          Our high-quality exports bring vital foreign currency both to our company and to our country. The different kinds of oil 
          seeds and pulses we export include:
        </p>
        <h3 className="text-2xl font-bold mb-2">Pulses</h3>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[200px] bg-center bg-cover rounded-lg shadow-lg overflow-hidden" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center text-white">
                  <h3 className="text-lg font-bold">Image {index + 1}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OilSeedsAndPulses;
