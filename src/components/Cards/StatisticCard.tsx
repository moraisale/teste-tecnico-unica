import Image from "next/image";
import React from "react";
import { IStatisticCard } from "../../types/IStatisticCard";

export const StatisticCard = ({ text, iconURL }: IStatisticCard) => {
  return (
    <div className="bg-gradient-to-r from-[#A68BFF]/100 to-[#7500FF00]/0 rounded-lg p-[2px] xl:w-[384px] w-[273px] max-w-[384px] xl:min-h-[273px]">
      <div className="flex flex-col gap-[42px] py-[46px] pl-[34px] bg-white dark:bg-black rounded-lg xl:w-[384px] w-[273px] xl:h-[273px] xl:max-h-[273px]">
        <Image alt="ícone" width={82} height={82} src={iconURL} />
        <p className="text-[22px] text-black dark:text-white font-bold light:text-black">
          {text}
        </p>
      </div>
    </div>
  );
};
