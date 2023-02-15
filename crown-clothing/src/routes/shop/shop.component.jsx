import { Route, Routes } from "react-router-dom";
import Categories from "../category-preview/categories.comoponent";
import Category from "../category/category.component";
import "./shop.styles.scss";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
