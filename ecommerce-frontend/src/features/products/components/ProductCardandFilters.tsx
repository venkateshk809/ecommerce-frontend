import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import Filters from "./Filters sidebar/Filters";
import type { Product } from "../types/products";

// interface ProductCardandFiltersProp {
//   productDetails: Product[];
// }
function ProductCardandFilters() {
  return (
    <div className="flex justify-between px-2">
      <Filters />

      <ProductCard />
    </div>
  );
}

export default ProductCardandFilters;
