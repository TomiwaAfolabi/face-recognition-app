import { useState } from "react";
import FormInput from "../form/form-input/form-input.component";
import Button from "../form/custom-button/button.component";
import "./sign-in.styles.scss";
import {
  SignInUser,
  signInwithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const Login = async (event) => {
    event.preventDefault();
    try {
      await SignInUser(email, password);
    } catch {}
  };
  const onHandle = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const logGoogleUser = async (event) => {
    event.preventDefault();
    await signInwithGooglePopup();
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
        <div className="btn-container">
          <Button onClick={Login}>Sign In</Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
