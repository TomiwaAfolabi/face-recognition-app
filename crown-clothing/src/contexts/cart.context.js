import { createContext, useState } from "react";

export const CartContext = createContext({
  cartdropDown: false,
  setCartdropDown: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartdropDown, setCartdropDown] = useState();
  const value = { cartdropDown, setCartdropDown };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
