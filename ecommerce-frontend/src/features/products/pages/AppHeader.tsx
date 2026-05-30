import React from "react";
import Navbar from "../../../components/common/Navbar/Navbar";
import NavGlobalSearch from "../../../components/common/Navbar/NavGlobalSearch";
import CategoriesNav from "../../../components/common/Navbar/CategoriesNav";
import KidsStoreLogo from "../../../assets/images/KidsStoreLogo.png";

function AppHeader() {
  return (
    <>
      <div className="flex justify-between py-5 px-2">
        <img
          src={KidsStoreLogo}
          alt="KidsStore"
          className="h-10 w-auto object-contain"
        />
        <NavGlobalSearch />
        <Navbar />
      </div>
      <CategoriesNav />
    </>
  );
}

export default AppHeader;
