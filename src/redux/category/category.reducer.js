import categoryTypes from "./category.types";

const INITIAL_STATE = {
  categories: null,
  isFetching: false,
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
        categories: action.payload,
        isFetching: false,
        error: null
      };

    case categoryTypes.FETCH_CATEGORIES_FAILURE:
      return {
        error: action.payload,
        isFetching: false
      };

    default:
      return state;
  }
};

export default categoryReducer;
