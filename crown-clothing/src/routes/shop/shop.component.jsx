import { useContext } from "react";
import { productsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(productsContext);
  return (
    <div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
