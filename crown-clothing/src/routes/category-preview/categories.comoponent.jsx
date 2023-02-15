import { Fragment, useContext } from "react";
import { categoriesContext } from "../../contexts/categories.context";
import CategoriesPreview from "../../components/category-preview/categories-preview.component";
import "./categories.component.styles.scss";
const Categories = () => {
  const { categoriesMap } = useContext(categoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoriesPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
export default Categories;
