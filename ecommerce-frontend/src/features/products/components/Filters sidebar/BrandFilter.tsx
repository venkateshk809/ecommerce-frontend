import React, { useContext, useState } from "react";
import { FilterContext } from "../../../../context/FilterContext";

function BrandFilter() {
  const { productDetails, selectedBrands, setSelectedBrands } =
    useContext(FilterContext);
  const [brandSearchInput, setBrandSearchInput] = useState("");
  const brand = [...new Set(productDetails.map((prod) => prod.brand))];
  const brandFiltered = brand.filter((item) =>
    item.toLowerCase().includes(brandSearchInput.toLowerCase()),
  );

  const handleBrandCheckbox = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((item) => item !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div>
      <h1 className="font-bold py-2">Brand</h1>
      <input
        type="text"
        value={brandSearchInput}
        onChange={(e) => setBrandSearchInput(e.target.value)}
        placeholder="Search brand"
        className="grow focus:outline-none  placeholder-gray-500 text-xs font-bold rounded px-3 py-1 opacity-80  border-gray-200 border-2"
      />
      <ul>
        {brandFiltered.map((br) => (
          <li className="text-xs font-bold py-1 text-gray-600">
            <input
              type="checkbox"
              checked={selectedBrands.includes(br)}
              onChange={() => handleBrandCheckbox(br)}
            />{" "}
            {br}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandFilter;
