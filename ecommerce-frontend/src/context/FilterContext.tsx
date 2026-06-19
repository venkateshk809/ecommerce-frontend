import { createContext } from "react";
import type { Product } from "../features/products/types/products";

interface FilterContextType {
  productDetails: Product[];
}

export const FilterContext = createContext<FilterContextType>({
  productDetails: [],
});
