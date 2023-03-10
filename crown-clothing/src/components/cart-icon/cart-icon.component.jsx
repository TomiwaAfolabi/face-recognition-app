import { useSelector } from "react-redux";
import { selectCartCount } from "../../store/cart/cart-selector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
const CartIcon = ({ onPress }) => {
  const itemCount = useSelector(selectCartCount);
  return (
    <div className="cart-icon-container" onClick={onPress}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
export default CartIcon;
