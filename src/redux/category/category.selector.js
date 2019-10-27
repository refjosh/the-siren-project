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

export const selectSingleCategoryHeadlines = createSelector(
  selectCategories,
  headlines => headlines.singleCategoryHeadlines
);

export const selectIsFetchingSingleCategoryHeadlines = createSelector(
  selectCategories,
  isFetching => isFetching.isFetchingSingleCategoryHeadlines
);

export const selectCategoriesList = createSelector(
  selectCategories,
  category => category.categories
);
