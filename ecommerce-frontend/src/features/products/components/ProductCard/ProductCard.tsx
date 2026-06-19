import React, { useContext } from "react";

import ProductCardImage from "./ProductCardImage";
import ProductCardDetails from "./ProductCardDetails";
import { FilterContext } from "../../../../context/FilterContext";
// import ReactPaginate from "react-paginate";

function ProductCard() {
  const { productDetails } = useContext(FilterContext); // console.log(ReactPaginate);
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {productDetails.map((productDetail) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <ProductCardImage productDetail={productDetail} />
          <ProductCardDetails productDetail={productDetail} />
        </div>
      ))}
      {/* <ReactPaginate pageCount={0} /> */}
    </div>
  );
}

export default ProductCard;
