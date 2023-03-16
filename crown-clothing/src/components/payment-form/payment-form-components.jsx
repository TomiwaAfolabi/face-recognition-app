import { useStripe, useElements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/cart/cart-selector";
import { selectCurrentUser } from "../../store/user/user-selector";
import Button, { BUTTON_TYPES } from "../form/custom-button/button.component";
import "./payment-form.styles.scss";
const PaymentForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const amount = useSelector(selectTotalPrice);
  const currentUser = useSelector(selectCurrentUser);
  const [paymentProcessing, setPayProcessing] = useState(false);

  if (!stripe || !element) {
    return;
  }

  const paymentHandler = async (e) => {
    e.preventDefault();

    setPayProcessing(true);

    const response = await fetch("/.netlify/functions/payment-intent", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: amount }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName,
        },
      },
    });

    if (paymentResult.error) {
      return alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        setPayProcessing(false);
        return alert("Payment Successful");
      }
    }
  };
  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={paymentHandler}>
        <CardElement />
        <div className="payment-button">
          {" "}
          <Button
            isLoading={paymentProcessing}
            buttonType={BUTTON_TYPES.payment}
          >
            Pay Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
