import { CATEGORIES_TYPES } from "./categories-types";

const INITIAL_CATEGORIES_TYPE = {
  CatgoriesMap: {},
};
export const CategoriesReducer = (
  state = INITIAL_CATEGORIES_TYPE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
