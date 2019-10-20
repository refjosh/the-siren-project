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

export const fetchCategoryHeadlinesStart = () => ({
  type: categoryTypes.FETCH_CATEGORY_HEADLINES_START
});

export const fetchCategoryHeadlinesSuccess = headlines => ({
  type: categoryTypes.FETCH_CATEGORY_HEADLINES_SUCCESS,
  payload: headlines
});

export const fetchCategoryHeadlinesFailure = error => ({
  type: categoryTypes.FETCH_CATEGORY_HEADLINES_FAILURE
});
