import Link from "next/link";
import { useEffect, useState } from "react";

import Socials from "@/components/Other/Socials/Socials";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className={`fixed z-[999] w-full flex items-center px-5 xl:px-0 xl:h-[90px] py-5 ease-in duration-300 bg-black bg-opacity-20 backdrop-blur-sm border-b-4 border-[#f1c663]`}
    >
      <div className="container mx-auto p-0">
        <div className="flex flex-row justify-between items-center gap-y-6 xl:py-8">
          <Link href={"/"}>
            <Image
              src="/smv/smvzap.png"
              alt="Logo IDEC"
              width={200}
              height={200}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
