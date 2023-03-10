import { CreateAction } from "../../reducer/reducer.utils";
import { CART_TYPES } from "./cart-types";

const addItem = (cartItems, ProductToAdd) => {
  const { id } = ProductToAdd;
  const existingItem = cartItems.find((cartItem) => cartItem.id === id);
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: ++cartItem.quantity }
        : cartItem
    );
  }
  return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

const removeItem = (cartItems, ProductToremove) => {
  const { id } = ProductToremove;
  const existingItem = cartItems.find((cartItem) => cartItem.id === id);

  if (existingItem.quantity === 1) {
    const newCart = cartItems.filter((ele, i) => ele.id !== id);
    return newCart;
  }

  return cartItems.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteProduct = (cartItems, ProductTodelete) => {
  const { id } = ProductTodelete;
  const newCart = cartItems.filter((ele, i) => ele.id !== id);
  return newCart;
};

export const setCartItems = (cartItems) =>
  CreateAction(CART_TYPES.SET_CART_ITEMS, cartItems);

export const setCartdropDown = (bool) =>
  CreateAction(CART_TYPES.SET_CART_DROPDOWN, bool);

export const addCartItem = (cartItems, ProductToAdd) => {
  const newCartItems = addItem(cartItems, ProductToAdd);
  return CreateAction(CART_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (cartItems, ProductToremove) => {
  const newCartItems = removeItem(cartItems, ProductToremove);
  return CreateAction(CART_TYPES.SET_CART_ITEMS, newCartItems);
};
export const deleteCartItem = (cartItems, ProductTodelete) => {
  const newCartItems = deleteProduct(cartItems, ProductTodelete);
  return CreateAction(CART_TYPES.SET_CART_ITEMS, newCartItems);
};
