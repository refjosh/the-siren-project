import headlineTypes from "./headline.types";

export const fetchTopHeadlinesStart = () => ({
  type: headlineTypes.FETCH_TOP_HEADLINES_START
});

export const fetchTopHeadlinesSuccess = allHeadines => ({
  type: headlineTypes.FETCH_TOP_HEADLINES_SUCCESS,
  payload: allHeadines
});

export const fetchShuffledHeadlinesSuccess = shuffled => ({
  type: headlineTypes.FETCH_SHUFFLED_HEADLINES_SUCCESS,
  payload: shuffled
});

export const fetchTopHeadlinesFailure = error => ({
  type: headlineTypes.FETCH_TOP_HEADLINES_FAILURE,
  payload: error
});

export const fetchSingleHeadlineStart = headline => ({
  type: headlineTypes.FETCH_SINGLE_HEADLINE_START,
  payload: headline
});

export const fetchSingleHeadlineSuccess = headline => ({
  type: headlineTypes.FETCH_SINGLE_HEADLINE_SUCCESS,
  payload: headline
});

export const fetchSingleHeadlineFailure = error => ({
  type: headlineTypes.FETCH_SINGLE_HEADLINE_FAILURE,
  payload: error
});

export const nextHeadline = () => ({
  type: headlineTypes.NEXT_HEADLINE
});

export const previousHeadline = () => ({
  type: headlineTypes.PREVIOUS_HEADLINE
});
