import { USER_TYPES } from "./user-types";

const INITIAL_TYPE = {
  currentUser: null,
};

export const UserReducer = (state = INITIAL_TYPE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
