import React from "react";

function ProductsSort() {
  return (
    <div className="flex items-center gap-2">
      <p className="font-medium">Sort by:</p>
      <select className="px-2 py-1 ">
        <option> Popularity</option>
      </select>
    </div>
  );
}

export default ProductsSort;
