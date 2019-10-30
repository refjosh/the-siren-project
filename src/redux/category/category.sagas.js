import { all, call, put, takeLatest, select } from "redux-saga/effects";

import CATEGORIES from "../../localStore/CATEGORIES";
import categoryTypes from "./category.types";
import UserTypes from "../user/user.types";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchCategoryHeadlinesSuccess,
  fetchCategoryHeadlinesFailure,
  fetchSingleCategoryHeadlinesSuccss,
  fetchSingleCategoryHeadlinesFailure
} from "./category.actions";

import { selectUserPreferredCategories } from "../user/user.selector";
const API_KEY = "5871814cd94a40fa9bca75cce204c2cd";

export function* fetchCategories() {
  const categories = yield CATEGORIES;
  const selectedCategories = yield select(selectUserPreferredCategories);
  if ((categories & selectedCategories) !== null) {
    yield put(fetchCategoriesSuccess({ categories, selectedCategories }));
  } else {
    yield put(fetchCategoriesFailure("There are no categories"));
  }
}

export function* runThrough(categories) {
  const user = state => state.user;
  const selectUserCountry = yield select(user);
  const country = yield selectUserCountry.userCountry.shortName.toLowerCase();
  const newHeadlines = yield [];
  try {
    for (let i = 0; i < categories.length; i++) {
      const response = yield fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${categories[i]}&apiKey=${API_KEY}`
      );
      const result = yield response.json();
      yield newHeadlines.push({
        id: i + 1,
        category: categories[i],
        headlines: result.articles
      });
    }
    yield put(fetchCategoryHeadlinesSuccess(newHeadlines));
  } catch (error) {
    yield put(fetchCategoryHeadlinesFailure(error));
  }
}

export function* fetchCategoriesHeadlines() {
  const preferredCategories = yield select(selectUserPreferredCategories);
  try {
    yield runThrough(preferredCategories);
  } catch (error) {
    yield put(fetchCategoryHeadlinesFailure(error));
  }
}

export function* fetchSingleCategoryHeadlines({ payload }) {
  const user = state => state.user;
  const selectUserCountry = yield select(user);
  const country = yield selectUserCountry.userCountry.shortName.toLowerCase();
  const category = yield payload;
  try {
    let response = null;
    if (category === "top-headlines") {
      response = yield fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
      );
    } else {
      response = yield fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
      );
    }
    const result = yield response.json();
    if (result.status === "ok") {
      yield put(fetchSingleCategoryHeadlinesSuccss(result.articles));
    } else {
      yield put(
        fetchSingleCategoryHeadlinesFailure(
          "There was an error fetching headlines"
        )
      );
    }
  } catch (error) {
    yield put(fetchCategoryHeadlinesFailure(error));
  }
  return;
}

// ON START
export function* onFetchCategories() {
  yield takeLatest(categoryTypes.FETCH_CATEGORIES_START, fetchCategories);
}
// FETCH HEADLINES FOR PERFERRED CATEGORIES FOR HOME PAGE
export function* onFetchCategoriesHeadlines() {
  yield takeLatest(UserTypes.SET_COUNTRY, fetchCategoriesHeadlines);
  yield takeLatest(
    UserTypes.SET_PREFERRED_CATEGORIES,
    fetchCategoriesHeadlines
  );
  yield takeLatest(
    categoryTypes.FETCH_CATEGORY_HEADLINES_START,
    fetchCategoriesHeadlines
  );
}
// FETCH HEADLINES FOR SINGLE CATEGORY FOR CATEGORY PAGE
export function* onFetchSingleCategoryHeadlines() {
  yield takeLatest(UserTypes.SET_COUNTRY, fetchSingleCategoryHeadlines);
  yield takeLatest(
    categoryTypes.FETCH_SINGLE_CATEGORY_HEADLINES_START,
    fetchSingleCategoryHeadlines
  );
}

// SAGAS
export function* categorySagas() {
  yield all([
    call(onFetchCategories),
    call(onFetchCategoriesHeadlines),
    call(onFetchSingleCategoryHeadlines)
  ]);
}
