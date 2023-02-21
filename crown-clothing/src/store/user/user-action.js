import { CreateAction } from "../../reducer/reducer.utils";
import { USER_TYPES } from "./user-types";
export const setCurrentUser = (user) =>
  CreateAction(USER_TYPES.SET_CURRENT_USER, user);
