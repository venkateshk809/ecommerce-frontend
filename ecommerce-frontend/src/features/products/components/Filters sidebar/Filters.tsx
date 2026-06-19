import React, { useContext } from "react";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import { FilterContext } from "../../../../context/FilterContext";

function Filters() {
  const { setSelectedBrands, setPriceRange, setSelectedCategory } =
    useContext(FilterContext);
  const handleClearAllFilters = () => {
    setSelectedBrands([]);
    setPriceRange([]);
    setSelectedCategory([0, 5000]);
  };
  return (
    <div>
      <div className="flex justify-between px-2">
        <h1>Filters</h1>
        <button className="border" onClick={handleClearAllFilters}>
          Clear All
        </button>
      </div>
      <CategoryFilter />
      <PriceRangeSlider />

      <BrandFilter />
    </div>
  );
}

export default Filters;
