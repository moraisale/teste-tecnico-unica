import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MobileSearchBar } from "./MobileSearchBar";

export const MobileHeader = () => {
  return (
    <div className="xl:hidden flex-col  w-full">
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
        <button>
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
