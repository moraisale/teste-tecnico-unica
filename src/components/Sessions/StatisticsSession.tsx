import { poppins } from "@/app/layout";
import { statisticsCards } from "@/helpers/statisticsCards";
import React from "react";
import { StatisticCard } from "../Cards/StatisticCard";

export const StatisticsSession = () => {
  return (
    <div className="flex flex-col dark:text-black w-full h-full pt-[42px] px-8">
      <div className="text-center flex flex-col xl:px-[158.5px] gap-[26px] ">
        <p className="text-xl xl:text-[32px] leading-[26px] xl:leading-[41.6 px] text-white">
          Perfeita para você!
        </p>
        <p
          className={`text-white font-medium text-[15px] xl:text-[22px] text-center leading-[19.5px] xl:leading-[28.6px] ${poppins.className}`}
        >
          Há mais de 22 anos, a Faculdade Única transforma vidas por meio da
          educação. Com base na ética e na responsabilidade social, com um preço
          justo e acessível, utilizamos a tecnologia e a inovação para ampliar
          as possibilidades de ensino de milhares de alunos espalhados por todo
          o país.
        </p>
      </div>
      <div
        className={`flex flex-col items-center xl:flex-row xl:justify-center gap-9 pt-12 pb-[45px] ${poppins.className}`}
      >
        {statisticsCards.map((infoItem, index) => (
          <StatisticCard key={+index} {...infoItem} />
        ))}
      </div>
    </div>
  );
};
