import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories-selector";
import CategoriesPreview from "../../components/category-preview/categories-preview.component";
import "./categories.component.styles.scss";
const Categories = () => {
  const categoriesMap = useSelector(selectCategories);

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
