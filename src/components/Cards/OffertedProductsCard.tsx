import Image from "next/image";
import React from "react";
import { IOffertedProductCard } from "../../types/IOffertedProducts";

export const OffertedProductsCard = ({
  imageURL,
  text,
}: IOffertedProductCard) => {
  return (
    <div className="flex flex-col relative w-full text-white dark:text-white items-center">
      <Image
        alt="info-card"
        src={imageURL}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="absolute flex flex-col w-full max-w-[140px] gap-9 bottom-[46px] items-center">
        <p className="text-base text-center leading-5">{text}</p>
        <button className="text-[10px] px-[22px] leading-3 py-1.5 border h-max w-max border-white rounded-[3px]">
          SAIBA MAIS
        </button>
      </div>
    </div>
  );
};
