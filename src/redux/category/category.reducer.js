import categoryTypes from "./category.types";

const INITIAL_STATE = {
  categories: null,
  categoriesHeadlines: [],
  singleCategoryHeadlines: null,
  selectedCategories: null,
  isFetching: false,
  isFetchingSingleCategoryHeadlines: false,
  isFetchingHeadlines: false,
  error: undefined
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // FETCH CATEGORIES FOR MENU
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

    // FETCH HOME PAGE CATEGORY HEADLINES
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

    // FETCH SINGLE CATEGORY HEADLINES
    case categoryTypes.FETCH_SINGLE_CATEGORY_HEADLINES_START:
      return {
        ...state,
        isFetchingSingleCategoryHeadlines: true
      };

    case categoryTypes.FETCH_SINGLE_CATEGORY_HEADLINES_SUCCESS:
      return {
        ...state,
        singleCategoryHeadlines: action.payload,
        isFetchingSingleCategoryHeadlines: false
      };

    // FETCH ANY ERROR
    case categoryTypes.FETCH_CATEGORY_HEADLINES_FAILURE:
    case categoryTypes.FETCH_CATEGORIES_FAILURE:
      return {
        error: action.payload,
        isFetching: false,
        isFetchingHeadlines: false,
        isFetchingSingleHeadline: false,
        isFetchingSingleCategoryHeadlines: false
      };

    default:
      return state;
  }
};

export default categoryReducer;
