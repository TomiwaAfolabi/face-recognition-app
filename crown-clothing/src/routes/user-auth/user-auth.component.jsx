import SignIn from "../../components/sign-in-form/sign-in-comoponent";
import SignUp from "../../components/sign-up-form/sign-up.component";
import "./user-auth.styles.scss";
const UserAuth = () => {
  return (
    <div className="auth-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default UserAuth;
