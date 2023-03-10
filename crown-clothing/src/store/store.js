import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);
const composedEnchancers = compose(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancers
);

export const persistor = persistStore(store);
