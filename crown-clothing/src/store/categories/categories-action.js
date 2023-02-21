import { CreateAction } from "../../reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./categories-types";
export const setcategoriesMap = (categoriesMap) =>
  CreateAction(CATEGORIES_TYPES.SET_CATEGORIES_TYPE, categoriesMap);
