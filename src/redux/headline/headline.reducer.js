import headlineTypes from "./headline.types";

const INITIAL_STATE = {
  topHeadlines: null,
  error: null
};

const headlineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headlineTypes.FETCH_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        topHeadlines: action.payload,
        error: null
      };

    case headlineTypes.FETCH_TOP_HEADLINES_FAILURE:
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

export default headlineReducer;
