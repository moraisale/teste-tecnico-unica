import { poppins } from "@/app/layout";
import React from "react";
import { OffertedProductsCard } from "../Cards/OffertedProductsCard";
import { offertedProducts } from "@/helpers/offertedProducts";

export const UniqueJourneySession = () => {
  return (
    <div className="flex flex-col w-full text-center">
      <div className="flex flex-col gap-1 lg:gap-8">
        <p className="text-xl lg:text-[32px] leading-[26px] lg:leading-[px52]">
          Sua jornada é Única
        </p>
        <p
          className={`text-[15px] lg:text-[30px] leading-6 lg:leading-[px52] ${poppins.className}`}
        >
          Escolha a melhor modalidade para você!
        </p>
      </div>
      <div className="grid grid-cols-2 md:flex pt-12">
        {offertedProducts.map((offertedProduct, index) => (
          <OffertedProductsCard
            key={+index}
            imageURL={offertedProduct.imageURL}
            text={offertedProduct.text}
          />
        ))}
      </div>
    </div>
  );
};
