"use client"; // Para Next.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";

// Import Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FullWidthSwiper = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[760px]" id="home">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        onSlideChange={() => setProgress(0)}
        style={{ height: "750px" }}
      >
        {/* Slides */}
        <SwiperSlide>
          <img
            className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            src="/placeholders/placeholder1.webp"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            src="/placeholders/placeholder2.png"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl"
            src="/placeholders/placeholder3.png"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-0 mt-20 left-0 w-full h-3 bg-gray-200">
        <div
          className="h-full bg-[#f1c663] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default FullWidthSwiper;
