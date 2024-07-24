import Image from "next/image";
import React from "react";

export const AdversitingBanner = () => {
  return (
    <div className="flex flex-col h-[524px] py-[113px] items-center  text-white justify-end ">
      <Image
        src="/images/adversiting-banner.svg"
        className="z-[-1000]"
        alt="banner-session"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col w-full xl:pl-[126px] max-w-[316px] xl:max-w-full ">
        <p className="text-2xl xl:text-[60px] xl:leading-[75px] xl:max-w-[747px]">
          CONHEÇA A FACULDADE ÚNICA
        </p>

        <p className={`flex xl:hidden text-[22px]`}>
          Criando hoje o seu amanhã.
        </p>
      </div>
    </div>
  );
};
