import categoryTypes from "./category.types";

// CATEGORIES FOR MENU
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

// CATEGORY HEADLINES
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

// SINGLE CATEGORY HEADLINES
export const fetchSingleCategoryHeadlinesStart = category => ({
  type: categoryTypes.FETCH_SINGLE_CATEGORY_HEADLINES_START,
  payload: category
});

export const fetchSingleCategoryHeadlinesSuccss = headlines => ({
  type: categoryTypes.FETCH_SINGLE_CATEGORY_HEADLINES_SUCCESS,
  payload: headlines
});

export const fetchSingleCategoryHeadlinesFailure = error => ({
  type: categoryTypes.FETCH_SINGLE_CATEGORY_HEADLINES_FAILURE,
  payload: error
});
