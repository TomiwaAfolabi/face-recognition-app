import { useState, useContext } from "react";
import FormInput from "../form/form-input/form-input.component";
import Button from "../form/custom-button/button.component";
import {
  createUserwithemailandpassword,
  createUserDocument,
  signInwithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-up.styles.scss";
import { UserContext } from "../../contexts/user.context";
const SignUp = () => {
  const defaultFields = {
    displayName: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, ConfirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const onHandle = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const RegisterUser = async (event) => {
    if (password !== ConfirmPassword) {
      alert("password does not match");
    }
    event.preventDefault();
    if (password === ConfirmPassword) {
      const { user } = await createUserwithemailandpassword(email, password);
      if (user) {
        await createUserDocument({ ...user, displayName: displayName });
        setCurrentUser(user);
      }
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();

    await createUserDocument(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account? Sign Up </h2>
      <form>
        <FormInput
          label="Display Name: "
          name="displayName"
          type="text"
          value={displayName}
          onChange={onHandle}
          required
        />

        <FormInput
          label="Email: "
          name="email"
          type="email"
          value={email}
          onChange={onHandle}
          required
        />

        <FormInput
          label="Password: "
          name="password"
          type="password"
          value={password}
          onChange={onHandle}
          required
        />

        <FormInput
          label="Confirm Password: "
          name="ConfirmPassword"
          type="password"
          value={ConfirmPassword}
          onChange={onHandle}
          required
        />
        <div className="btn-container">
          <Button type="submit" onClick={RegisterUser}>
            Sign Up
          </Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
