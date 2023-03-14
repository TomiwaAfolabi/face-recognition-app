import { all, call, put, takeLatest } from "redux-saga/effects";
import { CATEGORIES_TYPES } from "./categories-types";
import { getCategoriesandDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories-action";

export function* fetchCategoriesAsync() {
  try {
    const categoryMap = yield call(getCategoriesandDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}
export function* fetchCategories() {
  yield takeLatest(
    CATEGORIES_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}
export function* categoriesSaga() {
  yield all([call(fetchCategories)]);
}
