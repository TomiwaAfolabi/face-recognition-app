import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user-selector";

import Categories from "../category-preview/categories.comoponent";
import Category from "../category/category.component";
import NouserError from "../../components/error/user-error";
import "./shop.styles.scss";

const Shop = () => {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <Fragment>
      {currentUser == null ? (
        <NouserError />
      ) : (
        <div>
          <Routes>
            <Route index element={<Categories />} />
            <Route path=":category" element={<Category />} />
          </Routes>
        </div>
      )}
    </Fragment>
  );
};
export default Shop;
