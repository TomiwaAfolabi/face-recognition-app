import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories-selector";
import CategoriesPreview from "../../components/category-preview/categories-preview.component";
import "./categories.component.styles.scss";
import Spinner from "../../components/spinner/spinner";
const Categories = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoriesPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};
export default Categories;
