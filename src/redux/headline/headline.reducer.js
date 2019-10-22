import headlineTypes from "./headline.types";

const INITIAL_STATE = {
  topHeadlines: [],
  shuffledHeadlines: [],
  singleHeadlineIndex: 0,
  singleHeadline: null,
  isFetchingTopHeadlines: false,
  isFetchingShuffledHeadlines: false,
  isFetchingSingle: false,
  error: null
};

const headlineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headlineTypes.FETCH_TOP_HEADLINES_START:
      return {
        ...state,
        isFetchingTopHeadlines: true,
        isFetchingShuffledHeadlines: true
      };
    case headlineTypes.FETCH_TOP_HEADLINES_SUCCESS:
      return {
        ...state,
        topHeadlines: action.payload,
        isFetchingTopHeadlines: false,
        error: null
      };
    case headlineTypes.FETCH_SHUFFLED_HEADLINES_SUCCESS:
      return {
        ...state,
        shuffledHeadlines: action.payload,
        isFetchingShuffledHeadlines: false,
        error: null
      };

    case headlineTypes.FETCH_SINGLE_HEADLINE_START:
      return {
        ...state,
        isFetchingSingle: true
      };

    case headlineTypes.FETCH_SINGLE_HEADLINE_SUCCESS:
      return {
        ...state,
        singleHeadline: action.payload.newHeadlineResult,
        singleHeadlineIndex: action.payload.headlineIndex,
        isFetchingSingle: false
      };

    case headlineTypes.FETCH_SINGLE_HEADLINE_FAILURE:
    case headlineTypes.FETCH_TOP_HEADLINES_FAILURE:
      return {
        ...state,
        isFetchingShuffledHeadlines: false,
        isFetchingTopHeadlines: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default headlineReducer;
