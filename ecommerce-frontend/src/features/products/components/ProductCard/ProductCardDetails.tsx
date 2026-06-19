import React from "react";
import type { Product } from "../../types/products";
import { BsStarFill } from "react-icons/bs";

interface ProductCardDetailsProp {
  productDetail: Product;
}

function ProductCardDetails({ productDetail }: ProductCardDetailsProp) {
  return (
    <div className="p-4">
      <h1 className="font-semibold">{productDetail.title}</h1>
      <div className="flex gap-2 items-center mb-2 mt-2">
        <BsStarFill className=" text-yellow-500" />
        <span className="font-semibold text-yellow-500">
          {" "}
          {productDetail.rating}
        </span>
        <span className="text-gray-500"> ({productDetail.reviewCount})</span>
      </div>
      <div className="flex items-baseline justify-between">
        <div>
          <span className=" font-bold mr-2">₹ {productDetail.price}</span>
          <span className="text-xs text-gray-500 font-bold line-through">
            ₹ {productDetail.originalPrice}
          </span>
        </div>
        <div>
          <span className="text-[13px] font-bold text-pink-400">
            {productDetail.discountPercentage}% OFF{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCardDetails;
