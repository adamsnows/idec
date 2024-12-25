import { IoMdPlay } from "react-icons/io";

export default function OverlayVideo({
  isPlaying,
  togglePlay,
}: {
  isPlaying: boolean;
  togglePlay: () => void;
}) {
  return (
    <>
      {!isPlaying && (
        <>
          <div className=" flex flex-col justify-center items-center absolute  w-full h-full inset-0 bg-cover bg-no-repeat bg-[url('/idec/cover_video.jpg')] cursor-pointer " />

          <div
            className="absolute top-0 -ms-4 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75 cursor-pointer "
            onClick={togglePlay}
          >
            <div className="rounded-full border-white flex justify-center items-center w-[350px] h-[350px] bg-opacity-35 bg-white">
              <IoMdPlay size={200} className="text-black opacity-75 ms-10" />
            </div>

            <div className="flex flex-col absolute start-0 bottom-0 mb-4 ms-20 z-10 font-ltWave  hyphens-none">
              <p className="text-3xl lg:text-4xl font-bold text-[#ffcb03]">
                GRUPO EDUCACIONAL
              </p>
              <p className="text-3xl lg:text-6xl font-extrabold">
                CHAVE MESTRA
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
