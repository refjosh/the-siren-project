import headlineTypes from "./headline.types";

const INITIAL_STATE = {
  topHeadlines: null,
  error: null
};

const headlineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headlineTypes.FETCH_TOP_HEADLINES_START:
      return {
        state
      };
    case headlineTypes.FETCH_TOP_HEADLINES_SUCCESS:
      return {
        topHeadlines: action.payload,
        error: null
      };

    case headlineTypes.FETCH_TOP_HEADLINES_FAILURE:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};

export default headlineReducer;
