import { createContext, useReducer } from "react";
import { CreateAction } from "../reducer/reducer.utils";
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

export const CART_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_ITEMS_OPEN: "SET_CART_ITEMS_OPEN",
};

export const INITIAL_TYPE = {
  cartdropDown: false,
  cartItems: [],
  itemCount: 0,
  totalPrice: 0,
};

export const CartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_TYPES.SET_CART_ITEMS_OPEN:
      return {
        ...state,
        cartdropDown: payload,
      };
    default:
      throw new Error(`Unhandled error ${type} in cart Reducer`);
  }
};
export const CartProvider = ({ children }) => {
  const [{ cartdropDown, cartItems, itemCount, totalPrice }, dispatch] =
    useReducer(CartReducer, INITIAL_TYPE);
  // const [cartdropDown, setCartdropDown] = useState();
  // const [cartItems, setCartItems] = useState([]);
  // const [itemCount, setItemCount] = useState(0);
  // const [totalPrice, setTotal] = useState(0);

  // useEffect(() => {
  //   const TotalPrice = cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );

  //   setTotal(TotalPrice);
  // }, [cartItems]);

  // useEffect(() => {
  //   const cartCount = cartItems.reduce(
  //     (total, item) => total + item.quantity,
  //     0
  //   );
  //   setItemCount(cartCount);
  // }, [cartItems]);

  const UpdateCartItems = (newCartItems) => {
    const TotalPrice = newCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const cartCount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    dispatch(
      CreateAction(CART_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        itemCount: cartCount,
        totalPrice: TotalPrice,
      })
    );
  };

  const addCartItem = (ProductToAdd) => {
    const newCartItems = addItem(cartItems, ProductToAdd);
    UpdateCartItems(newCartItems);
  };

  const removeCartItem = (ProductToremove) => {
    const newCartItems = removeItem(cartItems, ProductToremove);
    UpdateCartItems(newCartItems);
  };
  const deleteCartItem = (ProductTodelete) => {
    const newCartItems = deleteProduct(cartItems, ProductTodelete);
    UpdateCartItems(newCartItems);
  };

  const setCartdropDown = (bool) => {
    dispatch(CreateAction(CART_TYPES.SET_CART_ITEMS_OPEN, bool));
  };

  const value = {
    setCartdropDown,
    cartdropDown,
    addCartItem,
    cartItems,
    itemCount,
    removeCartItem,
    deleteCartItem,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
