"use client";

const SecondSection = () => {
  return (
    <div
      className="relative w-full tracking-widest bg-black h-[600px]"
      id="formation"
    >
      <div className="grid grid-cols-3 mt-20 z-[10]">
        <div className="border-accent w-full mb-3 border-b-2 -ms-10" />
        <span className="text-accent text-5xl text-nowrap">
          NOSSAS FORMAÇÕES
        </span>
      </div>
      <div className="container mx-auto mt-14 z-[20]">
        <div className="grid grid-cols-3 gap-10 z-[10]">
          <div className=" rounded-2xl bg-accent hover:bg-white transition duration-200 rounded- h-[400px] w-[380px] border-accent border-2 cursor-pointer relative z-[10]">
            <img
              src="/selos/MEC_01.png"
              alt=""
              className="absolute bottom-[-70px] start-[20px] h-[180px] w-[180px] z-[20] object-cover"
            />
          </div>
          <div className=" rounded-2xl bg-accent hover:bg-white transition duration-200 rounded- h-[400px] w-[380px] border-accent border-2 cursor-pointer z-[10]"></div>
          <div className=" rounded-2xl bg-accent hover:bg-white transition duration-200 rounded- h-[400px] w-[380px] border-accent border-2 cursor-pointer z-[10]"></div>
        </div>
      </div>

      <img
        src="/patterns/pattern_parallax.png"
        alt="Pattern"
        className="absolute bottom-0 left-0 w-full object-cover z-[0] h-[200px]"
      />
    </div>
  );
};

export default SecondSection;
