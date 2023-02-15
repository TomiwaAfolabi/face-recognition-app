import ProductCard from "../product-card/product-card.component";
import "../category-preview/category-preview.styles.scss";
import { Link } from "react-router-dom";
const CategoriesPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container ">
      <h2 className="title ">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};
export default CategoriesPreview;
