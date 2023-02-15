import { createContext, useState, useEffect } from "react";

import { getCategoriesandDocuments } from "../utils/firebase/firebase.utils";

export const categoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    const getcategoryMapData = async () => {
      const categoryMap = await getCategoriesandDocuments();
      setcategoriesMap(categoryMap);
    };
    getcategoryMapData();
  }, []);
  const value = { categoriesMap };

  return (
    <categoriesContext.Provider value={value}>
      {children}
    </categoriesContext.Provider>
  );
};
