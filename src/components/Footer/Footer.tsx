import React from "react";
import { CoursesList } from "./CoursesList";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { LearnMoreSession } from "./LearnMoreSession";
import { MoreSessionsList } from "./MoreSessionsList";

const socialMediaLinks = [
  {
    icon: <FaFacebook size={18} color="black" />,
    link: "https://www.facebook.com/UnicaFaculdade",
  },
  {
    icon: <FaInstagram size={18} color="black" />,
    link: "https://www.instagram.com/faculdadeunica/",
  },
  {
    icon: <FaYoutube size={18} color="black" />,
    link: "https://www.youtube.com/c/Faculdade%C3%9Anicaoficial",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col text-black dark:text-white bg-white dark:bg-black  w-full  pt-5">
      <CoursesList />
      <div className="flex flex-col lg:flex-row lg:pt-12 lg:items-end lg:justify-between">
        <div className="flex flex-col px-6 pt-[73px] lg:pt-0 gap-5 lg:px-[124px] ">
          <p className="font-bold text-xs lg:text-xl text-black dark:text-white lg:pb-[8px]">
            Siga nossa faculdade:
          </p>
          <div className="flex gap-2 pb-10">
            {socialMediaLinks.map((socialMedia, index) => (
              <Link key={+index} href={socialMedia.link}>
                {socialMedia.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-6 gap-5 lg:px-[124px] ">
          <p className="font-bold text-xs lg:text-xl text-black dark:text-white">
            Baixe nosso App:
          </p>
          <div className="flex gap-2 pb-10">
            <Link href="https://play.google.com/store/apps/details?id=com.lyratec.prominasapp&hl=en">
              <Image
                alt="google play"
                src="/images/play-store.svg"
                width={92.44}
                height={28}
                color="black"
              />
            </Link>
            <Link href="https://apps.apple.com/br/app/app-prominas/id1523832772">
              <Image
                alt="google play"
                src="/images/apple-store-link.svg"
                width={92.44}
                height={28}
                color="white"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-6  gap-6 pb-[33px] lg:items-end  lg:pr-[124px]">
          <p className="font-bold text-xs lg:text-xl text-black dark:text-white max-w-[170px] lg:max-w-[247px] ">
            Consulte aqui o cadastro da Instituição no Sistema e-MEC
          </p>
          <Link
            href="https://play.google.com/store/apps/details?id=com.lyratec.prominasapp&hl=en"
            className="lg:hidden"
          >
            <Image
              alt="google play"
              src="/images/mec.svg"
              width={92.44}
              height={28}
              color="white"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.lyratec.prominasapp&hl=en"
            className="hidden lg:flex"
          >
            <Image
              alt="google play"
              src="/images/mec.svg"
              width={113}
              height={188}
              color="white"
            />
          </Link>
        </div>
      </div>
      <LearnMoreSession />
      <MoreSessionsList />
      <div className="flex flex-col items-center leading-[22.32px] justify-center px-[63px] lx py-[14px] lg:py-[69px] bg-[#7500FF] text-black dark:text-white font-medium text-[8px]">
        <p className="font-medium text-[8px] lg:text-lg text-center whitespace-nowrap">
          Copyright © {currentYear} – Desenvolvido por Grupo Prominas
        </p>
      </div>
    </div>
  );
};
