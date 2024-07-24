"use client";
import Image from "next/image";
import { IDepoimentCard } from "../../types/IDepoimentCard";

export const DepoimentCard = ({ depoiment }: IDepoimentCard) => {
  return (
    <div className="flex flex-col justify-center items-center xl:w-[384px] w-[300px] rounded-md shadow-[10px_10px_#000000]/20 bg-[#A68BFF66]/40 h-full min-h-[416.41px] gap-[51.66px] px-[38.65px]">
      <p className="text-[9px] font-light text-center h-[160px] leading-[13.5px]">
        {depoiment.text}
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5">
          <Image
            className="rounded-full"
            alt="user-image"
            src={depoiment.imageURL}
            width={54}
            height={54}
          />
          <div className="flex flex-col pt-2 gap-[9.13px]">
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
