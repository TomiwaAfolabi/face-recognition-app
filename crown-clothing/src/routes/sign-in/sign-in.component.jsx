import {
  signInwithGooglePopup,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInwithGooglePopup();

    await createUserDocument(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
