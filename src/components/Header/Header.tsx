"use client";
import useSwitchTeme from "@/hooks/useSwitchTheme";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

const menuHeader = [
  { url: " /", name: "Gradução" },
  { url: "/", name: "Segunda Graduação" },
  { url: "/", name: "Pós-graduação" },
  { url: "/", name: "Disciplinas Isoladas" },
  { url: "/", name: "Cursos Grátis" },
  { url: "/", name: "Bolsas de Estudo" },
];

export const Header = () => {
  const [theme, toggleTheme] = useSwitchTeme();

  return (
    <div className="hidden lg:flex flex-col">
      <div className=" bg-black flex opacity-70 justify-between py-10 px-[123px] items-center h-[35px]">
        {menuHeader.map((item, index) => (
          <Link
            className="text-white font-normal lg:text-xs xl:text-[17px] leading-5 max-w-min"
            key={index}
            href={item.url}
          >
            {item.name}
          </Link>
        ))}
        <button onClick={toggleTheme}>
          <Image
            alt="dark-mode"
            src="/images/change-theme-toggle.svg"
            width={22}
            height={22}
          />
        </button>
      </div>
      <SearchBar />
    </div>
  );
};
