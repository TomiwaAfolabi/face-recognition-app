import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";
const CartIcon = ({ onPress }) => {
  const { itemCount } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={onPress}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
export default CartIcon;
