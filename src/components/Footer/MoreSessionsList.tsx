import Link from "next/link";
import React from "react";

const moreSessionsList = [
  {
    title: "Teste vocacional",
    url: "/",
  },
  {
    title: "Seja um embaixador",
    url: "/",
  },
  {
    title: "Fale com a gente",
    url: "/",
  },
  {
    title: "Quem somos",
    url: "/",
  },
  {
    title: "Privacidade",
    url: "/",
  },
  {
    title: "Termos de Uso",
    url: "/",
  },
  {
    title: "Trabalhe Conosco",
    url: "/",
  },
];

export const MoreSessionsList = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-start lg:gap-[58px] text-[10px] font-medium leading-[22.32px] px-6 py-[19px] text-black dark:text-white bg-white dark:bg-black border-t-2 border-black dark:border-white pb-[60px] lg:px-[124px] whitespace-nowrap">
      {moreSessionsList.map((item, index) => (
        <Link key={index} href={item.url} className="lg:text-sm">
          {item.title}
        </Link>
      ))}
    </div>
  );
};
