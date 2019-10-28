import { createSelector } from "reselect";

const selectHeadline = state => state.headline;

export const selectIsFetchingSingle = createSelector(
  selectHeadline,
  headline => headline.isFetchingSingle
);

export const selectisFetchingTopHeadlines = createSelector(
  selectHeadline,
  headline => headline.isFetchingTopHeadlines
);

export const selectHeadlinesArray = createSelector(
  selectHeadline,
  headline => headline.headlinesArray
);

export const selectTopHeadlines = createSelector(
  selectHeadline,
  headline => headline.topHeadlines
);

export const selectSingleHeadline = createSelector(
  selectHeadline,
  headline => headline.singleHeadline
);

export const selectHeadlineIndex = createSelector(
  selectHeadline,
  headline => headline.headlineIndex
);
