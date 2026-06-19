import React from "react";
import { BsCart, BsHeart, BsPerson } from "react-icons/bs";

function Navbar() {
  return (
    <>
      {/*  */}
      {/* className="grid h-56 grid-cols-3 content-between gap-4" */}
      <ul className="flex justify-end  gap-10 px-2 font-medium font-sans">
        <li className="flex items-center gap-2 cursor-pointer ">
          <BsPerson className="text-2xl" />
          Account
        </li>
        <li className="flex items-center gap-2 cursor-pointer ">
          <BsHeart className="text-xl" /> Wishlist
        </li>
        <li className=" relative flex items-center gap-2 cursor-pointer">
          <BsCart className="text-xl" /> <span>Cart</span>
          <span className="absolute -top-0.5 -right-2.5 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full  ">
            1
          </span>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
