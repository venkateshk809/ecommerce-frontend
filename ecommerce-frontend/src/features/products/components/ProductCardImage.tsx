import React from "react";
import type { Product } from "../types/products";
import { BsHeart, BsHeartFill, BsPersonHeart } from "react-icons/bs";

interface ProductCardImageProps {
  productDetail: Product;
}

function ProductCardImage({ productDetail }: ProductCardImageProps) {
  const badgeColors: Record<string, string> = {
    Best: "bg-green-500",
    Trending: "bg-pink-500",
    Popular: "bg-purple-500",
  };
  const badgeColor = badgeColors[productDetail.badge] || "bg-green-500";
  return (
    <div className=" relative w-full h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
      {/* {productDetail.image ? ( */}
      <img
        src={productDetail.image}
        alt={productDetail.title}
        className="w-full h-full object-cover"
      />
      {/* // ) : (
      //   <span className="text-gray-500 text-sm font-semibold">
      //     {productDetail.title}
      //   </span>
      // )} */}
      <button className="absolute top-3 right-3 ">
        <BsHeartFill className="text-white hover:text-pink-500 text-xl" />
      </button>
      <span
        className={`absolute top-2 left-2 ${badgeColor} text-white text-xs font-semibold px-2 py-1 rounded-xl`}
      >
        {productDetail.badge}
      </span>
    </div>
  );
}

export default ProductCardImage;
