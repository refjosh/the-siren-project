import categoryTypes from "./category.types";

const INITIAL_STATE = {
  categories: null,
  error: undefined
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES_START:
      return state;
    case categoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        categories: action.payload,
        error: null
      };

    case categoryTypes.FETCH_CATEGORIES_FAILURE:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};

export default categoryReducer;
