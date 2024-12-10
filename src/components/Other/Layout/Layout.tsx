import Nav from "@/components/Other/Nav/Nav";
import Header from "@/components/Other/Header/Header";

import { ChildrenInterface } from "@/interfaces/ChildrenInterface";
import { Inter, Lexend_Deca } from "next/font/google";
import { motion } from "framer-motion";
import RocketSMV from "@/components/Other/Avatar/Avatar";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const lexend = Lexend_Deca({
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }: ChildrenInterface) => {
  return (
    <div className={`page  text-white relative ${lexend.className} `}>
      <div className="w-[100vw] h-full fixed right-0 bottom-0 overflow-hidden -z-20 opacity-30 bg-fixed bg-black bg-gradient bg-contain bg-repeat bg-bottom">
        <div
          className={`page bg-cube text-white relative min-h-dvh w-screen`}
        />
        <div className="xl:opacity-100 opacity-30 bg-paints bg-cover bg-center bg-no-repeat hue-rotate-[-20deg] w-full h-full absolute  translate-z-0 -z-[10]" />
        {/* <ParticlesContainer /> */}

        {/* <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 10, -10, 0],
            transition: { duration: 3, repeat: Infinity },
          }}
          className=" h-[165px] w-[165px] xl:w-full xl:h-full max-w-[150px] xl:max-w-[200px] xl:max-h-[678px] absolute top-32 lg:top-36 left-36 xl:-bottom-40 xl:right-[200px]"
        >
          <RocketSMV />
        </motion.div> */}
      </div>

      <Nav />
      <Header />
      <div className="my-auto">{children}</div>
    </div>
  );
};

export default Layout;
