import "./form-input.styles.scss";
const FormInput = ({ label, ...formInputs }) => {
  return (
    <div className="group">
      <input className="form-input" {...formInputs} />
      <label
        className={`${
          formInputs.value.length ? "shrink" : ""
        } form-input-label `}
      >
        {label}
      </label>
    </div>
  );
};
export default FormInput;
