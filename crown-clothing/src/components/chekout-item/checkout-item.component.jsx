import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import {
  addCartItem,
  removeCartItem,
  deleteCartItem,
} from "../../store/cart/cart-action";

import "./checkout-item.styles.scss";
const CheckoutItem = ({ checkoutItems }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const { name, imageUrl, quantity, price } = checkoutItems;

  const removeItem = () => dispatch(removeCartItem(cartItems, checkoutItems));
  const addProduct = () => dispatch(addCartItem(cartItems, checkoutItems));
  const deleteProduct = () =>
    dispatch(deleteCartItem(cartItems, checkoutItems));

  return (
    <div className="checkout-item-container">
      <div className="image-container ">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <div className="name">{name}</div>

      <div className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={addProduct}>
          &#10095;
        </div>
      </div>

      <div className="price">{price}</div>
      <div className="remove-button " onClick={deleteProduct}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
