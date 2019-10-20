import { createSelector } from "reselect";

export const selectCategories = state => state.category;

export const selectCategoriesHeadlines = createSelector(
  selectCategories,
  categoriesHeadline => categoriesHeadline.categoriesHeadlines
);

export const isFetchingHeadlines = createSelector(
  selectCategories,
  categories => categories.isFetchingHeadlines
);
