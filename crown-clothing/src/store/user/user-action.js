import { CreateAction } from "../../reducer/reducer.utils";
import { USER_TYPES } from "./user-types";

export const checkUserSession = () =>
  CreateAction(USER_TYPES.CHECK_USER_SESSION);
export const emailSignInStart = (email, password) =>
  CreateAction(USER_TYPES.EMAIL_SIGN_IN_START, { email, password });
export const googleSignInStart = () =>
  CreateAction(USER_TYPES.GOOGLE_SIGN_IN_START);
export const signInSuccess = (user) =>
  CreateAction(USER_TYPES.SIGN_IN_SUCCESS, user);
export const signInFailed = (error) =>
  CreateAction(USER_TYPES.SIGN_IN_FAILED, error);
export const signUserOut = (user) =>
  CreateAction(USER_TYPES.SIGN_USER_OUT, user);
export const signUpStart = (email, password, displayName) =>
  CreateAction(USER_TYPES.SIGN_UP_START, { email, password, displayName });
export const signUpSuccess = (user) =>
  CreateAction(USER_TYPES.SIGN_UP_SUCCESS, { user });
export const signUpFailed = (error) =>
  CreateAction(USER_TYPES.SIGN_UP_FAILED, error);
