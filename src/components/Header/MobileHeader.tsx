"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MobileSearchBar } from "./MobileSearchBar";
import useSwitchTeme from "@/hooks/useSwitchTheme";

export const MobileHeader = () => {
  const [theme, toggleTheme] = useSwitchTeme();
  return (
    <div className="lg:hidden flex-col w-full">
      <div className="bg-black flex w-full h-[35px] justify-between items-center px-6 py-1.5">
        <IoIosArrowDown
          color="white"
          className="w-[9.13px] h-[14px] text-white"
        />
        <Image
          alt="Logo Única"
          src="/images/logo-unica.svg"
          width={71.58}
          height={22}
        />
        <button onClick={toggleTheme}>
          <Image
            alt="Change theme"
            src="/images/change-theme-toggle.svg"
            width={22}
            height={22}
          />
        </button>
      </div>
      <MobileSearchBar />
    </div>
  );
};
