import "./button.styles.scss";
import Spinner from "../../spinner/spinner";
export const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
  payment: "payment",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  return (
    <div>
      <button
        className={`button-container  ${BUTTON_TYPES[buttonType]} `}
        disabled={isLoading}
        {...otherProps}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    </div>
  );
};
export default Button;
