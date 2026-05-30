import React from "react";
import { BsSearch } from "react-icons/bs";

function NavGlobalSearch() {
  return (
    <div className="flex items-center border rounded w-80">
      <input
        placeholder="Search for toys, cloths, shoes..."
        className="grow focus:outline-none px-2 placeholder-gray-500"
      />
      <button className="rounded-r px-2">
        <BsSearch />
      </button>
    </div>
  );
}

export default NavGlobalSearch;
