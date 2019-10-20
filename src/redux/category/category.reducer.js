import categoryTypes from "./category.types";

const INITIAL_STATE = {
  categories: null,
  categoriesHeadlines: [],
  selectedCategories: null,
  isFetching: false,
  isFetchingHeadlines: false,
  error: undefined
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isFetching: true
      };
    case categoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        categories: action.payload.categories,
        selectedCategories: action.payload.selectedCategories,
        isFetching: false,
        error: null
      };

    case categoryTypes.FETCH_CATEGORY_HEADLINES_START:
      return {
        ...state,
        isFetchingHeadlines: true
      };

    case categoryTypes.FETCH_CATEGORY_HEADLINES_SUCCESS:
      return {
        ...state,
        categoriesHeadlines: action.payload,
        isFetchingHeadlines: false,
        error: null
      };
    case categoryTypes.FETCH_CATEGORY_HEADLINES_FAILURE:
    case categoryTypes.FETCH_CATEGORIES_FAILURE:
      return {
        error: action.payload,
        isFetching: false,
        isFetchingHeadlines: false
      };

    default:
      return state;
  }
};

export default categoryReducer;
