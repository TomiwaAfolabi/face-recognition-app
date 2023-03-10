import { CART_TYPES } from "./cart-types";

export const CART_INITIAL_STATES = {
  cartdropDown: false,
  cartItems: [],
};

export const CartReducer = (state = CART_INITIAL_STATES, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_TYPES.SET_CART_DROPDOWN:
      return {
        ...state,
        cartdropDown: payload,
      };

    default:
      return state;
  }
};
