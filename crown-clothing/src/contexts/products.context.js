import { createContext, useState, useEffect } from "react";

import { getCategoriesandDocuments } from "../utils/firebase/firebase.utils";

export const productsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products] = useState([]);
  const value = { products };

  useEffect(() => {
    const getcategoryMapData = async () => {
      const categoryMap = await getCategoriesandDocuments();
      console.log(categoryMap);
    };
    getcategoryMapData();
  }, []);

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
