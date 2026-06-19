import React, { useContext } from "react";

import ProductCardImage from "./ProductCardImage";
import ProductCardDetails from "./ProductCardDetails";
import { FilterContext } from "../../../../context/FilterContext";
// import ReactPaginate from "react-paginate";

function ProductCard() {
  const { productDetails, selectedBrands, selectedCategory, priceRange } =
    useContext(FilterContext);
  const filteredProducts = productDetails.filter((prod) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(prod.brand);
    const categoryMatch =
      selectedCategory.length === 0 || selectedCategory.includes(prod.category);
    const priceMatch =
      prod.price >= priceRange[0] && prod.price <= priceRange[1];
    return brandMatch && categoryMatch && priceMatch;
  });
  // const categoryFilterProducts =
  //   selectedCategory.length === 0
  //     ? productDetails
  //     : productDetails.filter((prod) =>
  //         selectedCategory.includes(prod.category),
  //       );
  // const brandFilteredproducts =
  //   selectedBrands.length === 0
  //     ? productDetails
  //     : productDetails.filter((prod) => selectedBrands.includes(prod.brand));
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {filteredProducts.map((productDetail) => (
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
