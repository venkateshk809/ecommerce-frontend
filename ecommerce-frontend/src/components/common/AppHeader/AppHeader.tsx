import React from "react";
import Navbar from "../Navbar/Navbar";
import NavGlobalSearch from "../Navbar/NavGlobalSearch";
import CategoriesNav from "../Navbar/CategoriesNav";
import KidsStoreLogo from "../../../assets/images/KidsStoreLogo.png";

function AppHeader() {
  return (
    <>
      <div className="flex justify-between py-5 px-10">
        <img
          src={KidsStoreLogo}
          alt="KidsStore"
          className="h-12 w-auto object-contain"
        />
        <NavGlobalSearch />
        <Navbar />
      </div>
      <CategoriesNav />
    </>
  );
}

export default AppHeader;
