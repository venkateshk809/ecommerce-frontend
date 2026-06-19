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
  // const [totalApiDetails, setTotalApiDetails] = useState<ApiResponse | null>(
  //   null,
  // );

  useEffect(() => {
    const fetchProductDetails = async () => {
      const fetchingDetailsFromApi = await api.get("/products?page=1&imit=12");
      // const convertedProductDetails = await fetchingDetailsFromApi.json();

      // setTotalApiDetails(convertedProductDetails);

      setProductDetails(fetchingDetailsFromApi.products);
    };
    fetchProductDetails();
  }, []);

  return (
    <>
      <AppHeader />
      <ProductsBanner />
      <ProductsSort />
      <FilterContext.Provider value={{ productDetails }}>
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
