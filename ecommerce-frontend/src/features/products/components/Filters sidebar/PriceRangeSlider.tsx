import React, { useContext } from "react";
import { Slider } from "@mui/material";
import { FilterContext } from "../../../../context/FilterContext";

function PriceRangeSlider() {
  const { priceRange, setPriceRange } = useContext(FilterContext);
  return (
    <div className="p-2">
      <h1 className="font-bold">Price Range</h1>
      <div>
        <Slider
          value={priceRange}
          onChange={(_, newValue) => setPriceRange(newValue as number[])}
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          marks={[
            { value: 0, label: "₹0" },
            { value: 5000, label: "₹5000+" },
          ]}
          sx={{
            color: "#ff4081",
            "& .MuiSlider-thumb": {
              backgroundColor: "#fff",
              border: "2px solid #ff4081",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#ff4081",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#f8bbd0",
            },
          }}
        />
      </div>
    </div>
  );
}

export default PriceRangeSlider;
