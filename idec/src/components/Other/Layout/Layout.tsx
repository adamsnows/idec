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
    <div
      className={`page  text-white relative font-amsi text-base leading-8 font-normal text-justify hyphens-auto`}
    >
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

      {/* <Nav /> */}
      <Header />
      <div className="my-auto">{children}</div>
    </div>
  );
};

export default Layout;
