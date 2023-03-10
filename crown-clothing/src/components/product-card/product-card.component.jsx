import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";
import Button from "../form/custom-button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(addCartItem(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <img src={`${imageUrl}`} alt={`${name}`} />
      <div className="footer">
        <span className="name"> {name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type="button" buttonType="inverted" onClick={addProduct}>
        ADD TO CART
      </Button>
    </div>
  );
};
export default ProductCard;
