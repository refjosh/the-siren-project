import headlineTypes from "./headline.types";

const INITIAL_STATE = {
  topHeadlines: [],
  shuffledHeadlines: [],
  headlineIndex: 0,
  singleHeadline: null,
  headlinesArray: [],
  isFetchingTopHeadlines: false,
  isFetchingShuffledHeadlines: false,
  isFetchingSingle: false,
  error: null
};

const headlineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // FETCH TOP HEADLINES FOR HOME PAGE
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

    // FETCH SINGLE HEADLINE FOR SINGLE NEWS COMPONENT
    case headlineTypes.FETCH_SINGLE_HEADLINE_START:
      return {
        ...state,
        isFetchingSingle: true
      };

    case headlineTypes.FETCH_SINGLE_HEADLINE_SUCCESS:
      return {
        ...state,
        singleHeadline: action.payload.singleHeadline,
        headlineIndex: action.payload.headlineIndex,
        headlinesArray: action.payload.headlinesArray,
        isFetchingSingle: false
      };

    // ASSIGN ALL ERRORS HERE
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
