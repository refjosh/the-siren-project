import categoryTypes from "./category.types";

const INITIAL_STATE = {
  categories: null,
  error: null
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        error: null
      };

    case categoryTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return {
        state
      };
  }
};

export default categoryReducer;
