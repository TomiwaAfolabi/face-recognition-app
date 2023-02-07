import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  cartdropDown: false,
  setCartdropDown: () => {},
  cartItems: [],
  addCartItem: () => {},
  itemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [cartdropDown, setCartdropDown] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setItemCount(cartCount);
  }, [cartItems]);

  const addCartItem = (ProductToAdd) => {
    setCartItems(addItem(cartItems, ProductToAdd));
    if (cartItems.length > 0) {
    }
  };

  const value = {
    cartdropDown,
    setCartdropDown,
    addCartItem,
    cartItems,
    itemCount,
    setItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
