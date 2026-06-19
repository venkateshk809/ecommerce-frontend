import React, { useEffect, useState } from "react";
import "./App.css";
import ProductsBanner from "./components/common/HeroBanner/ProductsBanner";
import AppHeader from "./components/common/AppHeader/AppHeader";
import ProductsSort from "./features/products/components/ProductsSort";
import type { Product } from "./features/products/types/products";
import ProductCardandFilters from "./features/products/components/ProductCardandFilters";
import api from "./services/axios";
import Pagination from "./components/common/Pagination/Pagination";
import { FilterContext } from "./context/FilterContext";
// import { Pagination } from "./components/common/Pagination/Pagination";

function App() {
  const [productDetails, setProductDetails] = useState<Product[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const fetchingDetailsFromApi = await api.get("/products?page=1&imit=12");
      setProductDetails(fetchingDetailsFromApi.products);
    };
    fetchProductDetails();
  }, []);

  return (
    <>
      <AppHeader />
      <ProductsBanner />
      <ProductsSort />
      <FilterContext.Provider
        value={{
          productDetails,
          selectedBrands,
          setSelectedBrands,
          selectedCategory,
          setSelectedCategory,
          priceRange,
          setPriceRange,
        }}
      >
        <ProductCardandFilters />
      </FilterContext.Provider>
      <Pagination
        pageCount={0}
        onPageChange={function (selectedItem: { selected: number }): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
}
export default App;
