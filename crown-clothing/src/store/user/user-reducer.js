import { USER_TYPES } from "./user-types";

const INITIAL_TYPE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const UserReducer = (state = INITIAL_TYPE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_TYPES.CHECK_USER_SESSION:
      return {
        ...state,
      };
    case USER_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };
    case USER_TYPES.SIGN_USER_OUT:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_TYPES.SIGN_UP_START:
      return {
        ...state,
      };
    case USER_TYPES.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
