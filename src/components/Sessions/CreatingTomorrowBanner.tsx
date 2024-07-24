import { poppins } from "@/app/layout";
import Image from "next/image";

export const CreatingTomorrowBanner = () => {
  return (
    <div className="flex flex-col relative h-full w-full min-h-[134px] text-white items-center justify-center mt-10 xl:mt-[140px] 2xl:mt-[240px]">
      <Image
        alt="geometric black background"
        src="/images/geometric-black-bg.svg"
        fill
        objectFit="cover"
        className="w-full h-full z-[-1]"
      />
      <p className={`text-xl font-semibold ${poppins.className}`}>
        CRIANDO HOJE O SEU AMANHÃ!
      </p>
    </div>
  );
};
