"use client";
import Image from "next/image";
import { IDepoimentCard } from "../../types/IDepoimentCard";

export const DepoimentCard = ({ depoiment }: IDepoimentCard) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-md shadow-lg bg-[#A68BFF66]/40 h-full min-h-[416.41px] gap-6 p-6">
      <p className="text-[9px] font-light text-center h-[160px] leading-[13.5px] lg:hidden w-[254px] md:w-full">
        {depoiment.text}
      </p>
      <Image
        className="hidden lg:flex"
        alt="user-image"
        src="/images/video-depoiment.svg"
        width={253}
        height={135.41}
      />
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-5 items-center">
          <Image
            className="rounded-full"
            alt="user-image"
            src={depoiment.imageURL}
            width={54}
            height={54}
          />
          <div className="flex flex-col items-center pt-2 gap-2">
            <p className="text-10 font-semibold leading-3">{depoiment.user}</p>
            <p className="text-[7px] font-normal leading-[8.4px]">
              {depoiment.role}
            </p>
          </div>
        </div>
        <Image
          className="rounded-full"
          alt="google-rating"
          src={depoiment.googleRating}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};
