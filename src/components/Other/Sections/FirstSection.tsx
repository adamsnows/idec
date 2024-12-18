"use client";

import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import OverlayVideo from "../OverlayVideo";

const FirstSection = () => {
  const [reloadKey, setReloadKey] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setReloadKey((prevKey) => prevKey + 1);
  }, [isPlaying]);

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="relative w-full tracking-widest" id="about">
      <div className="bg-white h-[280px]">
        <div className="container mx-auto flex flex-col items-start h-full text-black">
          <div className="mt-auto mb-12 font-ltWave font-extrabold">
            <h1 className="text-4xl ">O FUTURO DO DESENVOLVIMENTO</h1>
            <p className="text-4xl text-accent">HUMANO E PROFISSIONAL</p>
          </div>
        </div>
      </div>
      <div className="bg-accent text-black text-xl font-thin z-0">
        <div className="container mx-auto">
          <span className="py-10 block pb-20">
            O <strong>IDEC</strong>, Instituto de Desenvolvimento
            Comportamental, fundado por Rogério Vale, estrategista de negócios e
            CEO do grupo educacional Chave Mestra, é um referencial de
            excelência no desenvolvimento pessoal e profissional. Com sede em
            Alphaville – São Paulo, e unidades em Maringá – Paraná, Salvador –
            Bahia e Lisboa – Portugal, o IDEC se destaca pela missão de
            transformar vidas através de educação de alta qualidade e formar
            líderes capazes de liderar a si mesmos e outros em um mundo em
            constante transformação. Nosso diferencial está na combinação de
            professores altamente qualificados, especialistas no desenvolvimento
            comportamental, com plataformas de tecnologia de ponta, que garantem
            uma experiência de aprendizado moderna, prática e acessível. Nossos
            cursos não apenas ensinam habilidades técnicas, mas criam um impacto
            profundo, capacitando nossos alunos a se tornarem verdadeiros
            líderes que inspiram e treinam outros líderes, prontos para atuar na
            profissão do futuro: <strong>entender de pessoas.</strong>
          </span>
        </div>
      </div>
      <div className="bg-white min-h-[600px] relative">
        <img src="/patterns/pattern_olive.png" alt="" />
        <div className="container h-[600px] absolute top-[-50px] left-1/2 transform -translate-x-1/2">
          <YouTube
            videoId={"MvTA1DYoRZY"}
            className={"w-full h-full shadow-md shadow-black/30"}
            iframeClassName={"w-full h-full"}
            opts={
              isPlaying
                ? { playerVars: { autoplay: 1 } }
                : { playerVars: { autoplay: 0 } }
            }
            onPlay={() => console.log("O vídeo começou a ser reproduzido.")}
            onPause={() => console.log("O vídeo foi pausado.")}
            key={reloadKey}
          />
          <OverlayVideo isPlaying={isPlaying} togglePlay={togglePlay} />
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="container mx-auto text-black ">
          <span className="text-4xl text-accent font-ltWave">UMA VISÃO</span>
          <br />
          <span className="text-4xl text-accent font-ltWave">
            TRANSFORMADORA
          </span>
          <span className="py-10 block pb-2 mx-auto">
            No IDEC, acreditamos que cada pessoa tem o potencial de reescrever
            sua própria história. Nossa metodologia vai além do ensino
            convencional, unindo teoria e prática com mentorias especializadas,
            vivências impactantes e ferramentas exclusivas.
          </span>
          <span className="mt-4 block">
            Preparamos nossos alunos para os desafios do mercado global,
            promovendo não apenas o crescimento profissional, mas também o
            desenvolvimento humano. Oferecemos formações que vão desde
            habilidades técnicas específicas até programas que desenvolvem
            liderança, inteligência emocional e empreendedorismo, capacitando
            nossos alunos a criar um legado em suas áreas de atuação.
          </span>
        </div>
        <div className="container flex flex-col xl:flex-row gap-10 mx-auto mt-20">
          <iframe
            src="https://www.youtube.com/embed/ECaTYOHodbs?autoplay=1&loop=1&playlist=ECaTYOHodbs&controls=0&mute=1"
            title="Vídeo da nossa essência"
            className="w-[350px] h-[437px] xl:mx-0 mx-auto"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div className="flex flex-col gap-4 mx-auto ">
            <span className="text-accent text-5xl font-ltWave">
              NOSSA ESSÊNCIA
            </span>
            <span className="text-black text-lg max-w-[480px]">
              Valorizamos cada indivíduo como parte essencial do processo de
              transformação. Com uma abordagem humanizada e personalizada,
              proporcionamos uma experiência educacional completa que prepara
              não só grandes profissionais, mas também grandes pessoas, aptas a
              construir um futuro melhor para si e para a sociedade. No IDEC, o
              aprendizado não é apenas uma jornada, mas um movimento de
              progresso, impacto e realização. Seja bem-vindo ao lugar onde o
              conhecimento se transforma em liderança e o futuro é moldado a
              partir de hoje.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
