import React from "react";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceRangeSlider from "./PriceRangeSlider";

function Filters() {
  return (
    <div>
      <div className="flex justify-between px-2">
        <h1>Filters</h1>
        <button className="border">Clear All</button>
      </div>
      <CategoryFilter />
      <PriceRangeSlider />

      <BrandFilter />
    </div>
  );
}

export default Filters;
