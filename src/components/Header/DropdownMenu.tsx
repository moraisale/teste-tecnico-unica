import { IMenuItem } from '@/types/IDropdownMenu';
import React from 'react';

export interface DropdownMenuProps {
  menuItems: IMenuItem[];
  onClose: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuItems, onClose }) => {
  return (
    <div className="absolute w-full mt-4 bg-white shadow-lg z-10">
      <div className="flex justify-start">
        <button
          className="py-1 text-sm text-black dark:text-white hover:bg-black-100 bg-white dark:bg-black w-full"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div>
        {menuItems.map((item: IMenuItem, index: number) => (
          <a
            key={index}
            href={item.url}
            className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-black-100 bg-white dark:bg-black"
            onClick={onClose} // Fechar o menu ao clicar em um item
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
