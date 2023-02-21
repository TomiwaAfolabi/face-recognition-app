import { Route, Routes } from "react-router-dom";

import Categories from "../category-preview/categories.comoponent";
import Category from "../category/category.component";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Categories />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  );
};
export default Shop;
