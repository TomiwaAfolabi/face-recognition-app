import { useState, useContext } from "react";
import FormInput from "../form/form-input/form-input.component";
import Button from "../form/custom-button/button.component";
import "./sign-in.styles.scss";
import { SignInUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const Login = async (event) => {
    event.preventDefault();
    try {
      const user = await SignInUser(email, password);

      setCurrentUser(user);
    } catch {}
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
