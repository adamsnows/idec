import { motion } from "framer-motion";

import TestButton from "@/components/Other/TestButton/TestButton";

import Image from "next/image";

const IdeaSmvZap = () => {
  return (
    <div
      id="history"
      className="relative flex gap-8 flex-col items-center h-[inherit] text-center xl:text-left overflow-x-hidden my-28"
    >
      <h2 className="h2 text-accent">De onde veio a ideia do SMVZap?</h2>

      <div className="container mx-auto p-3 flex flex-col-reverse items-center xl:flex-row gap-12 xl:gap-6 flex-1">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex w-full items-center justify-center xl:max-w-[48%]"
        >
          <Image
            src={"/person-with-arrow.webp"}
            alt="pessoa bem sucedida"
            width={560}
            height={380}
            loading="eager"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex md:min-w-xl xl:max-w-none xl:mx-0"
        >
          <div className="flex-1 flex flex-col justify-start gap-6 text-start">
            <h2 className="flex flex-col h3-base font-light z-10 text-start items-start">
              <span>
                O SMVZap surgiu de uma dor que o Super Mega Vendas, que existia,
                passava, o maior evento de vendas de automóveis do país, com{" "}
              </span>
              <span className="bg-accent text-black px-1 w-fit font-medium">
                mais de 15.000 carros vendidos
              </span>
            </h2>
            <span className="flex gap-6 mt-1 flex-col info text-start items-start">
              <span className="z-10">
                <span className="text-accent">
                  As pessoas não atendiam mais ligações telefônicas,
                </span>{" "}
                e nós precisávamos atingir toda a base de clientes das
                concessionárias{" "}
                <span className="text-accent">
                  a ponto de lotar os eventos do Super Mega Vendas.
                </span>
              </span>
              <span className="z-10">
                E aí surgiu a estratégia do evento Super Mega Vendas de realizar
                os{" "}
                <span className="text-accent">
                  disparos em massa para toda a base de contatos
                </span>{" "}
                e organizar os leads durante o evento para{" "}
                <span className="text-accent">não perder nenhuma venda </span>e
                bater a meta do mês na semana.
              </span>
              <span className="z-10">
                Diante de anos de produção, o SMVZap veio com o objetivo de{" "}
                <span className="text-accent">
                  sintetizar toda a estratégia do Super Mega Vendas em uma
                  extensão para WhatsApp Web
                </span>{" "}
                e está dominando o Brasil inteiro com sua alta performance.
              </span>
              {/* <TestButton /> */}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IdeaSmvZap;
