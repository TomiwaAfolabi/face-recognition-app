import { CreateAction } from "../../reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./categories-types";

export const fetchCategoriesStart = () =>
  CreateAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  CreateAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error);
