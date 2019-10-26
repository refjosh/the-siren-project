import { all, call } from "redux-saga/effects";

import { categorySagas } from "./category/category.sagas";
import { headlineSagas } from "./headline/headline.saga";
import { userSagas } from "./user/user.saga";

export default function* rootSagas() {
  yield all([call(categorySagas), call(headlineSagas), call(userSagas)]);
}
