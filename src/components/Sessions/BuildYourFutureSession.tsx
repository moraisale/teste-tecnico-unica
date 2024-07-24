import { poppins } from "@/app/layout";
import Image from "next/image";
import React from "react";
import { Carousel } from "../Carousels/Carousel";

export const BuildYourFutureSession = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center text-center px-6 xl:px-[124px]">
      <div className="flex flex-col xl:flex-row xl:text-start items-center xl:items-end">
        <div className="flex flex-col ">
          <p className="text-xl lg:text-[32px] text-white pt-[84px] pb-8 ">
            Construa seu amanhã conosco
          </p>
          <p
            className={`text-white font-medium text-[15px] pb-[34px] xl:pb-0 xl:text-[22px] text-center xl:text-start leading-[19.5px] xl:leading-[28.6px] ${poppins.className}`}
          >
            Com foco em inovação e qualidade, seja nos cursos presenciais ou
            online, utilizamos as mais modernas tecnologias para uma comunicação
            mais eficiente e eficaz entre professor e aluno, destinados à
            formação de profissionais qualificados, capazes de transformar a
            realidade socioeconômica do país.
          </p>
        </div>
        <Image
          alt="video"
          width={347.94}
          height={197}
          src="/images/video.svg"
        />
      </div>
      <p className="text-xl leading-[26px] lg:text-[32px] pt-24">
        Abra novas portas para o seu futuro
      </p>
      <Carousel />
    </div>
  );
};
