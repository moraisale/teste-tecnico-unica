import { poppins } from "@/app/layout";
import { statisticsCards } from "@/helpers/statisticsCards";
import React from "react";
import { StatisticCard } from "../Cards/StatisticCard";

export const StatisticsSession = () => {
  return (
    <div className="flex flex-col w-full h-full pt-[101px] bg-white dark:bg-black">
      <div className="text-center flex flex-col lg:px-[158.5px] gap-[26px] ">
        <p className="text-xl lg:text-[32px] leading-[26px] lg:leading-[41.6px] text-black dark:text-white">
          Perfeita para você!
        </p>
        <p
          className={`text-black dark:text-white font-medium text-[15px] lg:text-[22px] text-center leading-[19.5px] lg:leading-[28.6px] ${poppins.className}`}
        >
          Há mais de 22 anos, a Faculdade Única transforma vidas por meio da
          educação. Com base na ética e na responsabilidade social, com um preço
          justo e acessível, utilizamos a tecnologia e a inovação para ampliar
          as possibilidades de ensino de milhares de alunos espalhados por todo
          o país.
        </p>
      </div>
      <div
        className={`flex flex-col items-center xl:flex-row lg:justify-between lg:px-[124px] gap-9 pt-[71px] pb-[45px] ${poppins.className}`}
      >
        {statisticsCards.map((infoItem, index) => (
          <StatisticCard key={+index} {...infoItem} />
        ))}
      </div>
    </div>
  );
};
