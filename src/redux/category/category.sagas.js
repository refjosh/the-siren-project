import { all, call, put, takeLatest } from "redux-saga/effects";

import CATEGORIES from "./CATEGORIES";
import SELECTEDCATEGORIES from "./SELECTEDCATEGORIES";
import categoryTypes from "./category.types";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchCategoryHeadlinesSuccess,
  fetchCategoryHeadlinesFailure
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

export function runThrough(categories) {
  const newHeadlines = [];
  categories.map(category => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    )
      .then(response => response.json())
      .then(result => {
        newHeadlines.push({ category: category, headlines: result.articles });
      });
  });
  return newHeadlines;
}

export function* fetchCategoriesHeadlines() {
  const selectedCategories = yield SELECTEDCATEGORIES;
  try {
    const headlines = yield runThrough(selectedCategories);
    yield put(fetchCategoryHeadlinesSuccess(headlines));
  } catch (error) {
    yield put(fetchCategoryHeadlinesFailure(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(categoryTypes.FETCH_CATEGORIES_START, fetchCategories);
}

export function* onFetchCategoriesHeadlines() {
  yield takeLatest(
    categoryTypes.FETCH_CATEGORY_HEADLINES_START,
    fetchCategoriesHeadlines
  );
}

export function* categorySagas() {
  yield all([call(onFetchCategories), call(onFetchCategoriesHeadlines)]);
}
