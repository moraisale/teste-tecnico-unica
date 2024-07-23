import React from "react";

const missionVisionValuesCard = [
  "/images/mission.svg",
  "/images/vision.svg",
  "/images/values.svg",
];

export const MissionVisionSession = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center text-center px-6">
      <p className="text-xl text-white pt-[84px] pb-[53px]">
        Mais que educação, uma transformação
      </p>
      <div className="flex xl:flex-row xl:justify-center xl:gap-5 flex-col gap-12 pb-[45px]">
        {missionVisionValuesCard.map((card, index) => (
          <div key={index}>
            <img src={card} className="h-full w-full" alt={`${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
