import React from "react";

const About = () => {
  return (
    <div
      id="footer"
      className="flex flex-col items-center justify-center w-full mt-20 h-[400px] relative"
    >
      <div className="flex flex-col items-center justify-center container mx-auto mt-20 h-full relative">
        <div className="flex gap-14 items-center justify-between -mt-20">
          <img
            src={"/idec/logo-light.png"}
            alt="SMV Logo"
            className="w-[520px] h-[100px]"
          />
          <img
            src={"/selos/mec.png"}
            alt="SMV Logo"
            className="w-[120px] h-[120px]"
          />
          <img
            src={"/selos/international.png"}
            alt="SMV Logo"
            className="w-[230px] h-[80px]"
          />
          <img
            src={"/selos/br_pt.png"}
            alt="SMV Logo"
            className="w-[100px] h-[30px]"
          />
        </div>

        <p className="text-[14px] text-accent my-20">
          IDEC - Insituto de Desenvolvimento Comportamental - Brasil © 2024
          Todos os Direitos Reservados.
        </p>
      </div>

      <img
        src="/patterns/pattern_olive.png"
        alt=""
        className="w-full object-cover h-[50%] absolute bottom-0 -mb-10 rotate-180"
        style={{ clipPath: "inset(0 0 50% 0)" }}
      />
    </div>
  );
};

export default About;
