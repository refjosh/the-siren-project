import categoryTypes from "./category.types";

export const fetchCategoriesStart = () => ({
  type: categoryTypes.FETCH_CATEGORIES_START
});

export const fetchCategoriesSuccess = categories => ({
  type: categoryTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesFailure = error => ({
  type: categoryTypes.FETCH_CATEGORIES_FAILURE,
  payload: error
});
