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
export const CartContext = createContext({
  cartdropDown: false,
  setCartdropDown: () => {},
  cartItems: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  removeItem: () => {},
  itemCount: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cartdropDown, setCartdropDown] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotal] = useState(0);

  useEffect(() => {
    const TotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setTotal(TotalPrice);
  }, [cartItems]);

  useEffect(() => {
    const cartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setItemCount(cartCount);
  }, [cartItems]);

  const addCartItem = (ProductToAdd) => {
    setCartItems(addItem(cartItems, ProductToAdd));
  };

  const removeCartItem = (ProductToremove) => {
    setCartItems(removeItem(cartItems, ProductToremove));
  };
  const deleteCartItem = (ProductTodelete) => {
    setCartItems(deleteProduct(cartItems, ProductTodelete));
  };

  const value = {
    cartdropDown,
    setCartdropDown,
    addCartItem,
    cartItems,
    itemCount,
    setItemCount,
    removeCartItem,
    deleteCartItem,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
