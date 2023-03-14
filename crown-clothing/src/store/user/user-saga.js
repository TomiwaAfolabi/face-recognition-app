import { all, call, takeLatest, put } from "redux-saga/effects";

import { USER_TYPES } from "./user-types";
import {
  signInSuccess,
  signInFailed,
  signUserOut,
  signUpSuccess,
  signUpFailed,
} from "./user-action";
import {
  getCurrentUser,
  createUserDocument,
  SignUserOut,
  SignInUser,
  signInwithGooglePopup,
  createUserwithemailandpassword,
} from "../../utils/firebase/firebase.utils";

export function* getUserSnapshot(userAuth) {
  try {
    const userSnapshot = yield call(createUserDocument, userAuth);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* isAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    console.log(userAuth);
    if (!userAuth) return;
    yield call(getUserSnapshot, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* signuserUp({ payload: { email, password, displayName } }) {
  try {
    const userAuth = yield createUserwithemailandpassword(email, password);
    const user = { ...userAuth.user, displayName: displayName };
    if (user) {
      yield put(signUpSuccess(user));
    }
  } catch (error) {
    yield put(signUpFailed(error));
  }
}
export function* signInaftersignUp({ payload: { user } }) {
  console.log(user);
  yield call(getUserSnapshot, user);
}
export function* signuserOut() {
  try {
    const userAuth = yield call(SignUserOut);
    yield put(signUserOut, userAuth);
  } catch (error) {}
}
export function* signuserIn({ payload: { email, password } }) {
  try {
    const userAuth = yield call(SignInUser, email, password);
    if (userAuth) {
      yield call(getUserSnapshot, userAuth);
    }
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* ongoogleSignIn() {
  try {
    const { user } = yield signInwithGooglePopup();
    if (user) {
      yield call(getUserSnapshot, user);
    }
  } catch (error) {
    yield put(signInFailed(error));
  }
}
export function* onSignOut() {
  yield takeLatest(USER_TYPES.SIGN_USER_OUT, signuserOut);
}
export function* onEmailSignIn() {
  yield takeLatest(USER_TYPES.EMAIL_SIGN_IN_START, signuserIn);
}
export function* onGoogleSignIn() {
  yield takeLatest(USER_TYPES.GOOGLE_SIGN_IN_START, ongoogleSignIn);
}
export function* onCheckUserSession() {
  yield takeLatest(USER_TYPES.CHECK_USER_SESSION, isAuthenticated);
}
export function* onSignUp() {
  yield takeLatest(USER_TYPES.SIGN_UP_START, signuserUp);
}
export function* onsignupSucess() {
  yield takeLatest(USER_TYPES.SIGN_UP_SUCCESS, signInaftersignUp);
}
export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onSignOut),
    call(onEmailSignIn),
    call(onGoogleSignIn),
    call(onSignUp),
    call(onsignupSucess),
  ]);
}
