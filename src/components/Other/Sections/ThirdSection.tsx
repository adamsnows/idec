"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ThirdSection = () => {
  return (
    <div
      className="relative w-full h-full bg-white tracking-widest	font-thin text-2xl text-black"
      id="description"
    >
      <div className="container mx-auto ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000 }}
          style={{ height: "650px" }}
        >
          <SwiperSlide>
            <div className="flex flex-col gap-8 text-start items-center justify-center h-full font-thin">
              <span className="">
                O IDEC – Instituto de Desenvolvimento Comportamental – apresenta
                a Formação Internacional de Especialista Comportamental, uma
                experiência educacional única que capacita profissionais a
                transformarem vidas e carreiras. Reconhecida pelo MEC, nossa
                formação acontece presencialmente em Alphaville – São Paulo,
                Maringá – Paraná, Salvador – Bahia e Lisboa – Portugal, unindo
                abrangência nacional e internacional.
              </span>
              <span>
                Com um corpo docente altamente qualificado e uma metodologia
                exclusiva, esta formação oferece muito mais do que aprendizado
                teórico. Nossos alunos recebem um setup completo de
                atendimentos, incluindo slides, ferramentas práticas e modelos
                de treinamentos em grupo, saindo prontos para impactar vidas e
                construir carreiras sólidas na área comportamental.
              </span>
              <span>
                A Formação Internacional de Especialista Comportamental é mais
                do que um curso: é um marco na capacitação de líderes e
                profissionais que desejam atuar com excelência em um mercado em
                constante evolução. Venha fazer parte do IDEC e descubra como
                transformar conhecimento em impacto real.
              </span>
              <button className="bg-accent px-6 py-2 me-auto  text-3xl mt-4">
                SAIBA MAIS
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-4 text-start items-center justify-center h-full">
              <span className="">
                O IDEC – Instituto de Desenvolvimento Comportamental – apresenta
                a Formação Internacional de Especialista Comportamental, uma
                experiência educacional única que capacita profissionais a
                transformarem vidas e carreiras. Reconhecida pelo MEC, nossa
                formação acontece presencialmente em Alphaville – São Paulo,
                Maringá – Paraná, Salvador – Bahia e Lisboa – Portugal, unindo
                abrangência nacional e internacional.
              </span>
              <span>
                Com um corpo docente altamente qualificado e uma metodologia
                exclusiva, esta formação oferece muito mais do que aprendizado
                teórico. Nossos alunos recebem um setup completo de
                atendimentos, incluindo slides, ferramentas práticas e modelos
                de treinamentos em grupo, saindo prontos para impactar vidas e
                construir carreiras sólidas na área comportamental.
              </span>
              <span>
                A Formação Internacional de Especialista Comportamental é mais
                do que um curso: é um marco na capacitação de líderes e
                profissionais que desejam atuar com excelência em um mercado em
                constante evolução. Venha fazer parte do IDEC e descubra como
                transformar conhecimento em impacto real.
              </span>
              <button className="bg-accent px-6 py-2 me-auto  text-3xl mt-4">
                SAIBA MAIS
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-4 text-start items-center justify-center h-full">
              <span className="">
                O IDEC – Instituto de Desenvolvimento Comportamental – apresenta
                a Formação Internacional de Especialista Comportamental, uma
                experiência educacional única que capacita profissionais a
                transformarem vidas e carreiras. Reconhecida pelo MEC, nossa
                formação acontece presencialmente em Alphaville – São Paulo,
                Maringá – Paraná, Salvador – Bahia e Lisboa – Portugal, unindo
                abrangência nacional e internacional.
              </span>
              <span>
                Com um corpo docente altamente qualificado e uma metodologia
                exclusiva, esta formação oferece muito mais do que aprendizado
                teórico. Nossos alunos recebem um setup completo de
                atendimentos, incluindo slides, ferramentas práticas e modelos
                de treinamentos em grupo, saindo prontos para impactar vidas e
                construir carreiras sólidas na área comportamental.
              </span>
              <span>
                A Formação Internacional de Especialista Comportamental é mais
                do que um curso: é um marco na capacitação de líderes e
                profissionais que desejam atuar com excelência em um mercado em
                constante evolução. Venha fazer parte do IDEC e descubra como
                transformar conhecimento em impacto real.
              </span>
              <button className="bg-accent px-6 py-2 me-auto  text-3xl mt-4">
                SAIBA MAIS
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ThirdSection;
