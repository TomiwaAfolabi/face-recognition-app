import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";
import { useNavigate } from "react-router-dom";
import CartItems from "../cart-items/cart-items.component";
import Button from "../form/custom-button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const gotoCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItems={item} />
        ))}
      </div>
      <Button onClick={gotoCheckOut}>Go to Checkout</Button>
    </div>
  );
};
export default CartDropdown;
