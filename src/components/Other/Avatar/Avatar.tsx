import Image from "next/image";

import { AvatarInterface } from "@/interfaces/AvatarInterface";

const RocketSMV = ({ opacity }: AvatarInterface) => {
  return (
    <div className="flex max-w-none">
      <Image
        src={"/smv/favicon.png"}
        width={1500}
        height={2000}
        alt=""
        loading="eager"
        className={`translate-z-0 w-full h-full

        `}
      />
    </div>
  );
};

export default RocketSMV;
