"use client"; // Para Next.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { MdGroups2 } from "react-icons/md";

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
      <div className="relative w-full h-[650px] mx-auto bg-black" id="home">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 10000 }}
          onSlideChange={() => setProgress(0)}
          style={{ height: "638px" }}
        >
          {/* Slides */}
          <SwiperSlide>
            <div className="relative w-full h-[638px] font-ltWave font-extrabold">
              {/* Imagem de Fundo */}
              <img
                className="w-full h-full object-cover"
                srcSet="/banners/mobile/mob_01.jpg 1200w, /banners/4k/banner_1.jpg 1201w"
                sizes="(max-width: 1200px) 100vw, 100vw"
                alt="Slide 1"
              />

              {/* Texto e Selos */}
              <div className="absolute bottom-0 left-0 flex flex-col gap-4 text-start w-full">
                {/* Texto */}
                <div className="mx-auto xl:w-[1600px] flex flex-col text-4xl lg:text-8xl p-10 md:p-20">
                  <div className="flex flex-col mb-10">
                    <span className="text-accent">Desperte seu</span>
                    <span className="text-white">potencial máximo</span>
                    <span className="text-accent">com o IDEC</span>
                  </div>
                  <div className="flex flex-col md:flex-row max-w-[1200px] items-center justify-between gap-4">
                    <div className="flex items-center gap-4 max-w-[1200px]">
                      <img
                        src="/selos/mec.png"
                        alt="Mec"
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "contain",
                        }}
                      />
                      <img
                        src="/selos/international.png"
                        alt="International"
                        style={{
                          width: "200px",
                          height: "78px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                    <img
                      src="/idec/logo-light.png"
                      alt="Logo IDEC"
                      style={{
                        width: "393px",
                        height: "77px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[638px] font-ltWave font-extrabold">
              {/* Imagem de Fundo */}
              <img
                className="w-full h-full object-cover"
                srcSet="/banners/mobile/mob_02.jpg 768w, /banners/4k/banner_2.jpg 769w"
                sizes="(max-width: 768px) 100vw, 100vw"
                alt="Slide 1"
              />

              {/* Texto e Selos */}
              <div className="absolute bottom-0 left-0 flex flex-col gap-4 text-start w-full">
                {/* Texto */}
                <div className="mx-auto xl:w-[1600px] flex flex-col text-8xl p-20">
                  <div className="flex items-center gap-4 text-white mb-20">
                    <div className="flex flex-col mb-10 pl-4 text-xl md:text-4xl font-ltWaveRegular tracking-widest">
                      <img
                        src="/idec/ASP.png"
                        alt=""
                        className="w-[200px]"
                        style={{ width: "500px" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center items-center  w-full md:justify-between gap-4 max-w-[1200px]">
                    <div className="flex flex-col ps-6 leading-5 text-start text-lg border-b-2 pb-4 md:border-l-2 w-full md:border-b-0 md:pb-0 border-accent font-ltWaveRegular font-semibold ">
                      <span>Faça parte da nossa comunidade gratuita </span>
                      <span>de desenvolvimento continuo e networking</span>
                    </div>
                    <img
                      src="/idec/logo-light.png"
                      alt="Logo IDEC"
                      style={{
                        width: "393px",
                        height: "77px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-[638px] font-ltWave font-extrabold">
              <img
                className="w-full h-full object-cover"
                srcSet="/banners/mobile/mob_03.jpg 768w, /banners/4k/banner_3.jpg 769w"
                sizes="(max-width: 768px) 100vw, 100vw"
                alt="Slide 1"
              />

              {/* Texto e Selos */}
              <div className="absolute bottom-0 left-0 flex flex-col gap-4 text-start w-full">
                {/* Texto */}
                <div className="mx-auto xl:w-[1400px] flex flex-col text-8xl p-20">
                  <div className="flex items-center gap-4 text-white mb-20">
                    <img
                      src="/banners/advance.png"
                      alt=""
                      style={{ width: "500px" }}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row items-center  w-full justify-end gap-4 text-4xl tracking-widest">
                    <span className="text-accent">EM BREVE....</span>{" "}
                    <span>UMA IMERSÃO AINDA MAIOR!</span>
                  </div>
                </div>
              </div>
            </div>
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
