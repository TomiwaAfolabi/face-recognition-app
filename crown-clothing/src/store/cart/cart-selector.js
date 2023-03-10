import { createSelector } from "reselect";
const selectCartReducer = (state) => state.cart;

export const selectCartdropdown = createSelector(
  [selectCartReducer],
  (cart) => cart.cartdropDown
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
);
