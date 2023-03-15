import { CardElement } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES } from "../form/custom-button/button.component";
import "./payment-form.styles.scss";
const PaymentForm = () => {
  return (
    <div className="payment-container">
      <form className="payment-form">
        <CardElement />
        <Button buttonType={BUTTON_TYPES.inverted}>Pay Now</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
