import React from "react";
import { BsCart, BsHeart, BsPerson } from "react-icons/bs";

function Navbar() {
  return (
    <>
      {/* className="grid h-56 grid-cols-3 content-between gap-4" */}
      <ul className="flex justify-end  gap-2 px-5">
        <li className="flex items-center gap-2">
          <BsPerson />
          Account
        </li>
        <li className="flex items-center gap-2">
          <BsHeart /> Wishlist
        </li>
        <li className=" relative flex items-center gap-2 ">
          <BsCart /> <span>Cart</span>
          <span className="absolute -top-2 -right-2.5 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full  ">
            1
          </span>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
