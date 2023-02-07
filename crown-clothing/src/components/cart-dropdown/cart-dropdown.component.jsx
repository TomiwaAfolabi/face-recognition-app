import { useContext } from "react";
import CartItems from "../cart-items/cart-items.component";
import Button from "../form/custom-button/button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItems={item} />
        ))}
      </div>

      <Button>Go to Checkout</Button>
    </div>
  );
};
export default CartDropdown;
