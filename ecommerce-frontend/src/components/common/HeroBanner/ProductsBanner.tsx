import React from "react";
import ProductBanner from "../../../assets/images/ProductBanner.png";

function ProductsBanner() {
  return (
    <>
      <div className="relative h-[400px]  p-7 rounded-full ">
        <img
          src={ProductBanner}
          alt="Banner"
          className="absolute inset-0 w-full h-full p-7 object-cover rounded-b-lg"
        />
        <div className="relative z-10 pl-20 pt-20">
          <h1 className="text-5xl font-bold text-blue-900">Fun. Learn. Grow</h1>
          <p className="mt-4 text-xl text-grey-700">
            Everything your kids need, <br />
            all in one place!
          </p>
          <button className="mt-6 bg-pink-500 px-6 py-3 rounded-lg text-white font-medium">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductsBanner;
