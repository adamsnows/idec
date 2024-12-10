import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="footer"
      className="flex items-center justify-center py-5 px-2 mb-20 xl:mb-0 bg-[#1E1E1E]/50 backdrop-blur-sm font-bold"
    >
      <div className="flex flex-col items-center justify-center container mx-auto">
        <Image
          src={"/idec/logo-light.png"}
          width={500}
          height={300}
          alt="SMV Logo"
          className="max-w-[200px]"
        />

        <p className="text-[15px] mb-6 text-white text-justify font-medium">
          Importante: Este site e os materiais que oferecemos não têm nenhuma
          relação institucional com o Facebook, Instagram, WhatsApp ou Facebook
          Messenger. Ao tratar de questões financeiras em nossos produtos,
          incluindo sites, vídeos, palestras, programas ou outros conteúdos, nos
          esforçamos ao máximo para garantir que representem com precisão nossos
          cursos e sua capacidade de impactar positivamente o seu negócio e a
          sua vida. No entanto, é importante frisar que os resultados alcançados
          dependem inteiramente do empenho, dedicação e aplicação de cada
          indivíduo. As estratégias e informações que fornecemos não garantem
          que você obterá resultados financeiros ou ganhos monetários
          específicos. Nada em nosso site ou em nossos materiais deve ser
          interpretado como uma promessa ou garantia de ganhos futuros. Seu
          sucesso depende do seu esforço, dedicação e aplicação das ideias,
          ferramentas e estratégias que propomos. Estamos aqui para apoiar você
          com recursos valiosos no seu caminho, mas o seu sucesso é fruto do seu
          próprio esforço e dedicação.
        </p>
        <p className="text-[14px]  font-bold">TODOS DIREITOS RESERVADOS.</p>
        <p className="text-[14px] mb-6 font-bold">© 2024 IDEC</p>
        <span>
          <Link
            href="/politica-de-privacidade/"
            className="text-accent text-sm"
          >
            Política de Privacidade
          </Link>{" "}
          |{" "}
          <Link
            href="/politica-de-privacidade/"
            className="text-accent text-sm"
          >
            Termos de Uso
          </Link>
        </span>
      </div>
    </div>
  );
};

export default About;
