import { all, call, put, takeLatest } from "redux-saga/effects";

import UserTypes from "./user.types";

import { setUserCountry, setUserPreferredCategories } from "./user.action";

// SET USER SELECTED COUNTRY HERE
export function* setCountry({ payload }) {
  //   yield put(setUserCountry(payload));
  yield console.log(payload);
}
export function* onSetUserCountry() {
  yield takeLatest(UserTypes.SET_COUNTRY, setCountry);
}

export function* setCategories({ payload }) {
  // yield put(setUserPreferredCategories(payload))
  yield console.log(payload);
}
export function* onSetUserPreferredCategories() {
  yield takeLatest(UserTypes.SET_PREFERRED_CATEGORIES, setCategories);
}

// ALL SAGAS HERE
export function* userSagas() {
  yield all([call(onSetUserCountry), call(onSetUserPreferredCategories)]);
}
