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
    <div className="w-full relative">
      <div className="relative w-full h-[800px] mx-auto bg-black" id="home">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
          onSlideChange={() => setProgress(0)}
          style={{ height: "788px" }}
        >
          {/* Slides */}
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="/banners/hd/banner_1.jpg"
              srcSet="/banners/hd/banner_1.jpg 1920w, /banners/4k/banner_1.jpg 3840w"
              sizes="(max-width: 1920px) 100vw"
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="/banners/hd/banner_2.jpg"
              srcSet="/banners/hd/banner_2.jpg 1920w, /banners/4k/banner_2.jpg 3840w"
              sizes="(max-width: 1920px) 100vw"
              alt="Slide 2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
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
