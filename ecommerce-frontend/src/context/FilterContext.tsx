import { createContext } from "react";
import type { Product } from "../features/products/types/products";

interface FilterContextType {
  productDetails: Product[];
  selectedBrands: string[];
  selectedCategory: string[];
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilterContext = createContext<FilterContextType>({
  productDetails: [],
  selectedBrands: [],
  selectedCategory: [],
  priceRange: [],
  setSelectedCategory: () => [],
  setSelectedBrands: () => [],
  setPriceRange: () => [],
});
