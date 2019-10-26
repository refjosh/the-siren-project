import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectUserCountry = createSelector(
  selectUser,
  user => user.userCountry
);

export const selectUserPreferredCategories = createSelector(
  selectUser,
  user => user.userPreferredCategories
);
