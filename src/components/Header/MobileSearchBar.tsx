import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { SearchInput } from "../Inputs/SearchInput";

interface IMenuItem {
  url: string;
  name: string;
}

const menuHeader: IMenuItem[] = [
  { url: "/", name: "Graduação" },
  { url: "/", name: "Segunda Graduação" },
  { url: "/", name: "Pós-graduação" },
  { url: "/", name: "Disciplinas Isoladas" },
  { url: "/", name: "Cursos Grátis" },
  { url: "/", name: "Bolsas de Estudo" },
];

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isVisible, onClose }) => (
  <div
    className={`absolute top-[50px] left-0 w-full bg-black text-white transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "hidden"
    }`}
  >
    <div className="flex w-full justify-end">
      <button onClick={onClose} className="p-2 text-white text-end text-xs">
        X
      </button>
    </div>
    <ul>
      {menuHeader.map((item, index) => (
        <li key={index} className="px-6 py-2 border-b border-gray-700 text-xs">
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  </div>
);

export const MobileSearchBar: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="relative px-6 flex gap-4 bg-[#49494966] py-[13px] items-center">
      <button onClick={toggleMenu}>
        <IoMdMenu width={22} height={10} />
      </button>
      <SearchInput placeholder="Pesquise por um curso" />
      <Menu isVisible={isMenuVisible} onClose={closeMenu} />
    </div>
  );
};
