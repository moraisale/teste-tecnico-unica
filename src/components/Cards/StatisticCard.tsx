import Image from "next/image";
import React from "react";
import { IStatisticCard } from "../types/IStatisticCard";

export const StatisticCard = ({ text, iconURL }: IStatisticCard) => {
  return (
    <div className="bg-gradient-to-r from-[#A68BFF]/100 to-[#7500FF00]/0 rounded-lg p-[2px] max-w-[384px] ">
      <div className="flex flex-col gap-[42px] py-[46px] pl-[34px] bg-black rounded-lg">
        <Image alt="ícone" width={82} height={82} src={iconURL} />
        <p className="text-[22px] text-white font-bold">{text}</p>
      </div>
    </div>
  );
};
