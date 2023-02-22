import { CreateAction } from "../../reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./categories-types";
export const setcategories = (categories) =>
  CreateAction(CATEGORIES_TYPES.SET_CATEGORIES, categories);
