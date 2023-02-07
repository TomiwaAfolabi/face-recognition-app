import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const productsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products] = useState(PRODUCTS);
  const value = { products };

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
