import categories from "../categories.json";
import "../categories.styles.scss";
import CategoryItem from "../category-item/category-body.component";
function Category() {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
export default Category;
