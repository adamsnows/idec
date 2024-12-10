"use client";

import dynamic from "next/dynamic";
import { FaArrowTrendUp } from "react-icons/fa6";
import fire from "@/../../public/animations/fire.json";
import LeadsCaptureModal from "../Modals/Leads";
import { Modal } from "rizzui";
import { useEffect, useState } from "react";

const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

export const Fire = () => (
  <DynamicLottie animationData={fire} loop className="h-8 w-8 -mt-2 " />
);

const TestButton = ({
  text = "ASSINAR AGORA",
  access = true,
  className,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        className={`${className} focus:outline-none text-black bg-[#32CD32] hover:bg-[##32CD32] focus:ring-4 focus:ring-yellow-300 font-medium text-lg px-5 py-2.5 transition duration-300 dark:focus:ring-[#32CD32] pointer w-full pointer -mb-3 z-40 cursor-pointer`}
        onClick={() => handleClick("projects")}
      >
        <div className="flex justify-center items-center gap-4">
          <Fire />
          {text}
          <Fire />
        </div>
      </button>
      {access && (
        <span className="mx-auto flex items-center gap-4 text-lg text-white font-normal">
          <FaArrowTrendUp />
          ACESSO IMEDIATO
        </span>
      )}
    </>
  );
};

export default TestButton;
