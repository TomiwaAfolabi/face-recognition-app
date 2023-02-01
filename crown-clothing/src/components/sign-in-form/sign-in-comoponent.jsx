import { useState } from "react";
import FormInput from "../form/form-input/form-input.component";
import Button from "../form/custom-button/button.component";
import "./sign-in.styles.scss";
import { SignInUser } from "../../utils/firebase/firebase.utils";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const Login = async (event) => {
    event.preventDefault();
    await SignInUser(email, password);
  };
  const onHandle = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>Sign In </h2>
      <form>
        <FormInput
          label="EMAIL: "
          name="email"
          type="email"
          onChange={onHandle}
          value={email}
          required
        />
        <FormInput
          label="Password: "
          name="password"
          type="password"
          onChange={onHandle}
          value={password}
          required
        />
        <Button onClick={Login}>Sign In</Button>
      </form>
    </div>
  );
};
export default SignIn;
