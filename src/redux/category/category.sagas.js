import { all, call, put, takeLatest } from "redux-saga/effects";

import CATEGORIES from "../../localStore/CATEGORIES";
import SELECTEDCATEGORIES from "./SELECTEDCATEGORIES";
import categoryTypes from "./category.types";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchCategoryHeadlinesSuccess,
  fetchCategoryHeadlinesFailure,
  fetchSingleCategoryHeadlinesSuccss,
  fetchSingleCategoryHeadlinesFailure
} from "./category.actions";
const API_KEY = "5871814cd94a40fa9bca75cce204c2cd";

export function* fetchCategories() {
  const categories = yield CATEGORIES;
  const selectedCategories = yield SELECTEDCATEGORIES;
  if ((categories & selectedCategories) !== null) {
    yield put(fetchCategoriesSuccess({ categories, selectedCategories }));
  } else {
    yield put(fetchCategoriesFailure("There are no categories"));
  }
}

export function* runThrough(categories) {
  const newHeadlines = yield [];
  try {
    for (let i = 0; i < categories.length; i++) {
      const response = yield fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${categories[i]}&apiKey=${API_KEY}`
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
  const selectedCategories = yield SELECTEDCATEGORIES;
  try {
    yield runThrough(selectedCategories);
  } catch (error) {
    yield put(fetchCategoryHeadlinesFailure(error));
  }
}

export function* fetchSingleCategoryHeadlines({ payload: { category } }) {
  try {
    let response = null;
    if (category === "top-headlines") {
      response = yield fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );
    } else {
      response = yield fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
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
}

// ON START
export function* onFetchCategories() {
  yield takeLatest(categoryTypes.FETCH_CATEGORIES_START, fetchCategories);
}

export function* onFetchCategoriesHeadlines() {
  yield takeLatest(
    categoryTypes.FETCH_CATEGORY_HEADLINES_START,
    fetchCategoriesHeadlines
  );
}

export function* onFetchSingleCategoryHeadlines() {
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
