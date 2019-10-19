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
