import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../store/cart/cart-selector";
import CheckoutItem from "../../components/chekout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div className="checkout-container">
      <div className="checkout-header ">
        <div className="header-block">
          <span>PRODUCT</span>
        </div>
        <div className="header-block">
          <span>DESCRIPTION</span>
        </div>
        <div className="header-block">
          <span>QUANTITY</span>
        </div>
        <div className="header-block">
          <span>PRICE</span>
        </div>
        <div className="header-block">
          <span>REMOVE</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItems={item} />
      ))}
      <div>
        <span className="total">Total: ${totalPrice}</span>
      </div>
    </div>
  );
};
export default Checkout;
