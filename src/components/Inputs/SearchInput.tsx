import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
interface ISearchInput {
  placeholder: string;
}
export const SearchInput: React.FC<ISearchInput> = ({ placeholder }) => {
  return (
    <div className="relative w-full xl:max-w-[355px]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <VscSearch color="gray" className="h-10 w-3" />
      </span>
      <input
        type="text"
        className="border border-gray-300 rounded-sm w-full pl-[32px] pr-2 h-[22px] placeholder:text-[10px] placeholder:text-[#666464] pb-1"
        placeholder={placeholder}
      />
    </div>
  );
};
