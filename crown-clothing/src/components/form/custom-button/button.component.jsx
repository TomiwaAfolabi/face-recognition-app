import "./button.styles.scss";
export const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPES[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
