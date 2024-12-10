import { IoMdPlay } from "react-icons/io";

export default function OverlayVideo({ isPlaying }: { isPlaying: boolean }) {
  return (
    <>
      {!isPlaying && (
        <>
          <div className="blur-sm flex flex-col justify-center items-center absolute  w-full h-full inset-0 bg-cover  bg-no-repeat bg-[url('/Thumb_SMV.png')] cursor-pointer "></div>

          <div className="absolute top-0  flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-75 cursor-pointer">
            <div className="rounded-full border-white flex justify-center items-center w-44 h-44 bg-opacity-35 bg-white">
              <IoMdPlay size={100} className="text-black opacity-75 ms-4" />
            </div>

            <div className="flex flex-col absolute start-0 bottom-0 mb-10 ms-10 z-10">
              <p className="font-bold text-sm lg:text-xl text-[#ffcb03]">
                GRUPO EDUCACIONAL
              </p>
              <p className="text-sm lg:text-4xl font-bold">CHAVE MESTRA</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
