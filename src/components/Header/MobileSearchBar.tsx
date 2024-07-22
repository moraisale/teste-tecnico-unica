import { IoMdMenu } from "react-icons/io";
import { SearchInput } from "../Inputs/SearchInput";

export const MobileSearchBar = () => {
  return (
    <div className="px-6 flex gap-4 bg-[#49494966] py-[13px] items-center">
      <IoMdMenu width={22} height={10} />
      <SearchInput placeholder="Pesquise por um curso" />
    </div>
  );
};
