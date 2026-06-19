import React, { useContext, useState } from "react";
import { FilterContext } from "../../../../context/FilterContext";

function CategoryFilter() {
  const { productDetails, selectedCategory, setSelectedCategory } =
    useContext(FilterContext);

  const catogories = [
    ...new Set(productDetails.map((product) => product.category)),
  ];
  const handleSelectedCategory = (category: string) => {
    if (selectedCategory.includes(category)) {
      setSelectedCategory(selectedCategory.filter((item) => item !== category));
    } else {
      setSelectedCategory([...selectedCategory, category]);
    }
  };
  console.log("selectedCategory", selectedCategory);

  return (
    <div className="py-3">
      <h1 className="font-bold py-2">Category</h1>
      <ul>
        {catogories.map((cat) => (
          <li className="text-xs font-bold py-1 text-gray-600">
            <input
              type="checkbox"
              checked={selectedCategory.includes(cat)}
              onChange={() => handleSelectedCategory(cat)}
            />{" "}
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
