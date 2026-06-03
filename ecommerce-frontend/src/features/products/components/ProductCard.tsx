import React, { useEffect, useState } from "react";

import ProductCardImage from "./ProductCardImage";
import ProductCardDetails from "./ProductCardDetails";
import type { Product } from "../types/products";

function ProductCard() {
  const [productDetails, setProductDetails] = useState<Product[]>([]);
  console.log("productDetails", productDetails);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const fetchingDetailsFromApi = await fetch(
        "https://kids-store-api-dev.onrender.com/products?page=1&limit=12",
      );
      const convertedProductDetails = await fetchingDetailsFromApi.json();
      setProductDetails(convertedProductDetails.products);
    };
    fetchProductDetails();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {productDetails.map((productDetail) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <ProductCardImage productDetail={productDetail} />
          <ProductCardDetails productDetail={productDetail} />
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
