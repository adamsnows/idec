import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { RiDoubleQuotesL } from "react-icons/ri";
import SwiperCore from "swiper";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import { testimonialSlider } from "@/data/indications";

SwiperCore.use([Autoplay, FreeMode, Pagination]);

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation] as any}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="h-full"
      loop
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full xl:px-16 px-6">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="lg:mt-4  mx-auto">
                    <Image
                      className="rounded-full"
                      src={person.image}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col xl:justify-center justify-start before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="xl:flex hidden mb-4">
                  <RiDoubleQuotesL className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="scrollbar-none xl:text-lg text-center md:text-left xl:mt-0 mt-3 xl:overflow-hidden overflow-y-scroll xl:max-h-full">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
