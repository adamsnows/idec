import { fadeIn } from "@/components/Animations/FadeIn";

import TestButton from "@/components/Other/TestButton/TestButton";
import { instructionsData } from "@/data/instructions";
import { motion } from "framer-motion";

import YoutubePlaylist from "./youtube-playlist";

const Instructions = () => {
  return (
    <div
      id="instructions"
      className="flex gap-[40px] text-center xl:text-left flex-col container mx-auto mb-20 mt-[40px]"
    >
      <div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col  mb-6 xl:-mb-20 text-center"
        >
          <h2 className="h2">
            Entendendo como funciona cada passo do{" "}
            <span className="text-black bg-accent px-2">SMVZAP</span>.
          </h2>
        </motion.div>

        <YoutubePlaylist />

        <div className="flex lg:hidden flex-col w-full gap-4 mt-5">
          {/* <TestButton text="QUERO VENDER MAIS" /> */}
        </div>
      </div>

      <div className="mt-10 flex w-full flex-1 flex-col gap-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className=" flex flex-col  mb-6 xl:mb-0 text-center">
            <h2 className="h2">
              Passo a passo para usar o{" "}
              <span className="text-black bg-accent px-2">SMVZap</span>.
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3 md:flex-row">
          <ul className="flex gap-2 flex-col lg:flex-row ">
            {instructionsData.map(({ id, title, description }) => (
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="show"
                exit="hidden"
                key={id}
              >
                <li className="bg-white w-[100%] h-[100%] flex flex-col gap-2 p-6 items-start lg:max-w-[450px]">
                  <h2 className="h2 text-xl text-left text-black">{title}</h2>
                  <p className="text-base text-left text-black">
                    {description}
                  </p>
                </li>
              </motion.div>
            ))}
          </ul>
        </div>

        {/* <TestButton text="QUERO USAR O SMVZAP" /> */}
      </div>
    </div>
  );
};

export default Instructions;
