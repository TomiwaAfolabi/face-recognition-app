import "./button.styles.scss";
const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPES = {
    google: "google-sign-in",
    inverted: "inverted",
  };
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
