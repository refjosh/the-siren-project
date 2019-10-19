import { all, call } from "redux-saga/effects";

import { categorySagas } from "./category/category.sagas";

export default function* rootSagas() {
  yield all([call(categorySagas)]);
}
