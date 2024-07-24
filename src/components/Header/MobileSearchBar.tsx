import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { SearchInput } from '../Inputs/SearchInput';
import { IMenuItem } from '@/types/IDropdownMenu';
import { DropdownMenu } from './DropdownMenu';

const menuHeader: IMenuItem[] = [
  { url: '/', name: 'Graduação' },
  { url: '/', name: 'Segunda Graduação' },
  { url: '/', name: 'Pós-graduação' },
  { url: '/', name: 'Disciplinas Isoladas' },
  { url: '/', name: 'Cursos Grátis' },
  { url: '/', name: 'Bolsas de Estudo' },
];

export const MobileSearchBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative px-6 py-2 flex gap-4 items-center">
      <IoMdMenu
        width={22}
        height={10}
        className="cursor-pointer"
        onClick={toggleMenu}
      />
      <SearchInput placeholder="Pesquise por um curso" />
      {isMenuOpen && (
        <div className="absolute w-full left-0 mt-2">
          <DropdownMenu
            menuItems={menuHeader}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
};
