import { createContext, useEffect, useReducer } from "react";
import {
  onAuthStateChangeListener,
  createUserDocument,
} from "../utils/firebase/firebase.utils";
import { CreateAction } from "../reducer/reducer.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
export const UserReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`UnHandled error ${type} `);
  }
};

export const INITIAL_TYPE = {
  currentUser: null,
};
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(UserReducer, INITIAL_TYPE);
  const setCurrentUser = (user) => {
    dispatch(CreateAction(USER_TYPES.SET_CURRENT_USER, user));
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    onAuthStateChangeListener(async (user) => {
      if (user) {
        await createUserDocument(user);
      }

      setCurrentUser(user);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
