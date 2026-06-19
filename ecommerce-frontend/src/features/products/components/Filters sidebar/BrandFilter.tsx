import React, { useContext, useState } from "react";
import { FilterContext } from "../../../../context/FilterContext";

function BrandFilter() {
  const { productDetails } = useContext(FilterContext);
  const [brandInput, setbrandInput] = useState("");
  const brand = [...new Set(productDetails.map((prod) => prod.brand))];
  const brandFiltered = brand.filter((item) =>
    item.toLowerCase().includes(brandInput.toLowerCase()),
  );
  console.log("brandFiltered", brandFiltered);

  return (
    <div>
      <h1 className="font-bold py-2">Brand</h1>
      <input
        type="text"
        value={brandInput}
        onChange={(e) => setbrandInput(e.target.value)}
        placeholder="Search brand"
        className="grow focus:outline-none px-2 placeholder-gray-500 text-xs font-bold rounded px-3 py-1 opacity-80  border-gray-200 border-2"
      />
      <ul>
        {brandFiltered.map((br) => (
          <li className="text-xs font-bold py-1 text-gray-600">
            <input type="checkbox" /> {br}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandFilter;
