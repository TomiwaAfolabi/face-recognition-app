import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form/form-input/form-input.component";
import Button from "../form/custom-button/button.component";
import "./sign-in.styles.scss";

import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user-action";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const Login = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
  };

  const onHandle = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async (event) => {
    event.preventDefault();
    dispatch(googleSignInStart());
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
