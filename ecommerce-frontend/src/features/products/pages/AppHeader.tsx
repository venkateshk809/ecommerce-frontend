import React from "react";
import Navbar from "../../../components/common/Navbar/Navbar";
import NavGlobalSearch from "../../../components/common/Navbar/NavGlobalSearch";
import CategoriesNav from "../../../components/common/Navbar/CategoriesNav";

function AppHeader() {
  return (
    <>
      <div className="flex justify-between py-5 px-2">
        <h1>ICON</h1>
        <NavGlobalSearch />
        <Navbar />
      </div>
      <CategoriesNav />
    </>
  );
}

export default AppHeader;
