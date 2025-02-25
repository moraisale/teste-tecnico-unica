import { poppins } from "@/app/layout";
import Image from "next/image";
import React from "react";
import { DepoimentCarousel } from "../Carousels/DepoimentCarousel";

export const DepoimentsSession = () => {
  return (
    <div
      className={`flex flex-col w-full h-full min-h-[616px] text-white relative  ${poppins.className}`}
    >
      <div className="absolute bg-[#7500FF] w-full h-full min-h-[616px]" />
      <p className="font-normal text-xl lg:text-[32px] text-center pb-12 leading-[22px] px-8 pt-[51px] z-[99] lg:hidden">
        Quem faz a escolha certa, não se arrepende
      </p>
      <p className="font-normal text-xl lg:text-[32px] lg:text-center lg:pb-12 lg:leading-[22px] lg:px-8 lg:pt-[51px] lg:z-[99] hidden lg:flex justify-center">
        Lado a lado com a sua evolução
      </p>
      <Image
        src="/images/bg-purple-arrow.svg"
        alt="purple-shape"
        width={0}
        height={0}
        style={{
          maxWidth: "482px",
          width: "100%",
          height: "auto",
        }}
        className="absolute right-0 bottom-0 "
      />
      <Image
        src="/images/bg-blue-arrow.svg"
        alt="blue-shape"
        width={0}
        height={0}
        style={{
          maxWidth: "482px",
          width: "100%",
          height: "auto",
        }}
        className="absolute right-0 top-0"
      />
      <div className="w-full justify-center">
        <DepoimentCarousel />
      </div>
    </div>
  );
};
