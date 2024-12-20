import React from "react";

const About = () => {
  return (
    <div
      id="footer"
      className="flex flex-col items-center justify-center w-full mt-20 relative"
    >
      <div className="flex flex-col items-center justify-center container mx-auto mt-20 h-full relative">
        <div className="flex flex-wrap gap-6 items-center justify-center">
          <img
            src={"/idec/logo-light.png"}
            alt="SMV Logo"
            className="w-[200px] sm:w-[300px] lg:w-[520px] h-auto"
          />
          <img
            src={"/selos/mec.png"}
            alt="SMV Logo"
            className="w-[80px] sm:w-[100px] lg:w-[120px] h-auto"
          />
          <img
            src={"/selos/international.png"}
            alt="SMV Logo"
            className="w-[150px] sm:w-[200px] lg:w-[230px] h-auto"
          />
          <img
            src={"/selos/br_pt.png"}
            alt="SMV Logo"
            className="w-[50px] sm:w-[80px] lg:w-[100px] h-auto"
          />
        </div>

        <p className="text-[12px] sm:text-[14px] text-accent my-20 text-center">
          IDEC - Insituto de Desenvolvimento Comportamental - Brasil © 2024
          Todos os Direitos Reservados.
        </p>
      </div>

      <img
        src="/patterns/pattern_olive_fade.png"
        alt=""
        className="w-full object-cover absolute bottom-0"
      />
      <div className="w-full border-b border-accent border-[10px] absolute bottom-0" />
    </div>
  );
};

export default About;
