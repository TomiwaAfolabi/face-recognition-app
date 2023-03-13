import { CreateAction } from "../../reducer/reducer.utils";
import { CATEGORIES_TYPES } from "./categories-types";
import { getCategoriesandDocuments } from "../../utils/firebase/firebase.utils";

const fetchCategoriesStart = () =>
  CreateAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categoriesArray) =>
  CreateAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoryMap = await getCategoriesandDocuments();
    dispatch(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
