import Image from "next/image";
import React from "react";
import { SearchInput } from "../Inputs/SearchInput";
import { menuHeaderOptions } from "@/helpers/menuHeaderOptions";
import Link from "next/link";

export const AdversitingBanner = () => {
  return (
    <div
      className="relative flex flex-col h-[524px] py-[113px] items-center text-white justify-end bg-cover bg-center"
      style={{ backgroundImage: "url('/images/adversiting-banner.svg')" }}
    >
      <div className="absolute top-0 left-0 right-0 bg-[#49494966] hidden lg:flex gap-[15px] lg:px-[124px] pr-8 py-[13px] cursor-pointer w-full z-10">
        <Image
          alt="logo"
          src="/images/logo-unica.svg"
          width={71.58}
          height={22}
        />
        <SearchInput placeholder="Pesquise por um curso" />
        <div className="flex gap-[19px] items-center w-full justify-between">
          <select className="bg-transparent text-white cursor-pointer">
            <option className="text-white" value="Graduação">
              Nossas Áreas
            </option>
          </select>
          {menuHeaderOptions.map((item, index) => (
            <Link
              className="text-white text-[17px] leading-5"
              key={index}
              href={item.url}
            >
              {item.name}
            </Link>
          ))}
          <button className="text-[10px] px-[22px] text-white leading-3 py-1.5 border h-max w-max border-white rounded-[3px]">
            JÁ SOU ALUNO
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full lg:pl-[126px] max-w-[316px] lg:max-w-full z-10">
        <p className="text-2xl lg:text-[60px] lg:leading-[75px] lg:max-w-[747px]">
          CONHEÇA A FACULDADE ÚNICA
        </p>
        <p className="flex lg:hidden text-[22px]">
          Criando hoje o seu amanhã.
        </p>
      </div>
    </div>
  );
};
