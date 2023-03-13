import { CATEGORIES_TYPES } from "./categories-types";

const INITIAL_CATEGORIES_TYPE = {
  categories: [],
  isLoading: false,
  error: null,
};
export const CategoriesReducer = (
  state = INITIAL_CATEGORIES_TYPE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    case CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
