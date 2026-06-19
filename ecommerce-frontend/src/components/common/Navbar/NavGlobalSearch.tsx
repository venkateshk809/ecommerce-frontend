import React from "react";
import { BsSearch } from "react-icons/bs";

function NavGlobalSearch() {
  return (
    <div className="flex items-center rounded-xl w-150 px-3 opacity-80 bg-gray-50 border-gray-200 border-2">
      <input
        placeholder="Search for toys, cloths, shoes..."
        className="grow focus:outline-none px-2 placeholder-gray-500 "
      />
      <span>
        <BsSearch />
      </span>
    </div>
  );
}

export default NavGlobalSearch;
