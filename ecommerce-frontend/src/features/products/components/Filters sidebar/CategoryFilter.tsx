import React, { useContext } from "react";
import { FilterContext } from "../../../../context/FilterContext";

function CategoryFilter() {
  const { productDetails } = useContext(FilterContext);

  const catogories = [
    ...new Set(productDetails.map((product) => product.category)),
  ];
  // const categoryCounts = productDetails.reduce((acc, product) => {
  //   acc[product.category] = (acc[product.category] || 0) + 1;
  // }, {});
  // console.log("categoryCounts", categoryCounts.length);
  return (
    <div className="py-3">
      <h1 className="font-bold py-2">Category</h1>
      <ul>
        {catogories.map((cat) => (
          <li className="text-xs font-bold py-1 text-gray-600">
            <input type="checkbox" /> {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilter;
