import { all, call, put, takeLatest } from "redux-saga/effects";

import CATEGORIES from "./CATEGORIES";
import categoryTypes from "./category.types";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from "./category.actions";

export function* fetchCategories() {
  if (CATEGORIES) {
    yield put(fetchCategoriesSuccess(CATEGORIES));
    return;
  } else {
    yield put(fetchCategoriesFailure("There are no categories"));
    return;
  }
}

export function* onFetchCategories() {
  yield takeLatest(categoryTypes.FETCH_CATEGORIES_START, fetchCategories);
}

export function* categorySagas() {
  yield all([call(onFetchCategories)]);
}
