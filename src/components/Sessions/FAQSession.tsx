import { askedQuestionsList } from "@/helpers/askedQuestionsList";
import React from "react";

export const FAQSession = () => {
  return (
    <div className="hidden xl:flex flex-col w-full h-full px-[124px] pt-12 bg-white dark:bg-black">
      <div className="text-center flex flex-col gap-[26px] ">
        <p className="text-[32px] text-black dark:text-white font-normal leading-[26px]">
          Perguntas frequentes
        </p>
      </div>
      <div className="flex flex-col gap-9 pt-12 pb-[45px]">
        {askedQuestionsList.map((question, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <p className="text-black dark:text-white font-normal text-lg leading-[24.55px]">
                {question.title}
              </p>
              <button className="border-black dark:border-white text-xl px-1 font-normal w-min text-black dark:text-white">
                X
              </button>
            </div>
            <div className="h-px w-full bg-black dark:bg-white" />
          </div>
        ))}
      </div>
    </div>
  );
};
