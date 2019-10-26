import UserTypes from "./user.types";

export const setUserCountry = country => ({
  type: UserTypes.SET_COUNTRY,
  payload: country
});

export const setUserPreferredCategories = categories => ({
  type: UserTypes.SET_PREFERRED_CATEGORIES,
  payload: categories
});
