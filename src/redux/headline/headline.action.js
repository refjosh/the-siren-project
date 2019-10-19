import headlineTypes from "./headline.types";

export const fetchTopHeadlinesStart = () => ({
  type: headlineTypes.FETCH_TOP_HEADLINES_START
});

export const fetchTopHeadlinesSuccess = news => ({
  type: headlineTypes.FETCH_TOP_HEADLINES_SUCCESS,
  payload: news
});

export const fetchTopHeadlinesFailure = error => ({
  type: headlineTypes.FETCH_TOP_HEADLINES_FAILURE,
  payload: error
});
