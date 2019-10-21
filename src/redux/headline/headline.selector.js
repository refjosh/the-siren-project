import { createSelector } from "reselect";

const selectHeadline = state => state.headline;

export const selectIsFetchingSingle = createSelector(
  selectHeadline,
  headline => headline.isFetchingSingle
);

export const selectSingleHeadline = createSelector(
  selectHeadline,
  headline => headline.singleHeadline
);

export const selectTopHeadlines = createSelector(
  selectHeadline,
  headline => headline.topHeadlines
);
