import { motion } from "framer-motion";

import BannerInfinity from "@/components/Other/BannerInfinity/BannerInfinity";
import OverlayVideo from "@/components/Other/OverlayVideo";
import TestButton from "@/components/Other/TestButton/TestButton";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import kanban from "../../../../public/kanban-frame.json";

const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export const Kanban = () => (
  <DynamicLottie animationData={kanban} loop={true} />
);

const Home = () => {
  const playerRef = useRef<any>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setReloadKey((prevKey) => prevKey + 1);
  }, [isPlaying]);

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <div
        id="home"
        className={`relative flex text-center xl:text-left lg:min-h-dvh`}
      >
        <div className="container mx-auto pt-24 pb-16 xl:pb-3 flex flex-col gap-6 items-center text-start lg:flex-row lg:gap-x-12  mt-14">
          <div className="flex w-full lg:flex-1 flex-col gap-4 lg:gap-6 z-[10]"></div>
          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 1.2 }}
            className="relative w-full lg:w-[50%] shadow-zinc  overflow-hidden"
            onClick={togglePlay}
          >
            <YouTube
              videoId={"4OoV-2d9wUA"}
              className={"w-full h-full my-auto shadow-md shadow-black/30"}
              iframeClassName={"w-full h-full aspect-video "}
              opts={
                isPlaying
                  ? { playerVars: { autoplay: 1 } }
                  : { playerVars: { autoplay: 0 } }
              }
              onPlay={() => console.log("O vídeo começou a ser reproduzido.")}
              onPause={() => console.log("O vídeo foi pausado.")}
              key={reloadKey}
            />
            <OverlayVideo isPlaying={isPlaying} />
          </motion.div> */}
        </div>
      </div>
      {/* <BannerInfinity /> */}
    </>
  );
};

export default Home;
