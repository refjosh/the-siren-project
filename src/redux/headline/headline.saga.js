import { all, call, put, takeLatest, select } from "redux-saga/effects";
// SELECTORS
import {
  selectTopHeadlines,
  selectHeadlinesArray,
  selectHeadlineIndex
} from "./headline.selector";
import {
  selectCategoriesHeadlines,
  selectSingleCategoryHeadlines
} from "../category/category.selector";
// TYPES
import headlineTypes from "./headline.types";
import UserTypes from "../user/user.types";
// ACTIONS
import {
  fetchTopHeadlinesSuccess,
  fetchTopHeadlinesFailure,
  fetchSingleHeadlineSuccess,
  fetchSingleHeadlineFailure
} from "./headline.action";

const API_KEY = "5871814cd94a40fa9bca75cce204c2cd";

// FETCH TOP HEADLINES FOR HOME PAGE
export function* fetchTopHeadlines() {
  const user = state => state.user;
  const selectUserCountry = yield select(user);
  const country = yield selectUserCountry.userCountry.shortName.toLowerCase();
  try {
    const response = yield fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    );
    const result = yield response.json();
    if (result.status === "ok") {
      const articles = yield result.articles;
      yield put(fetchTopHeadlinesSuccess(articles));
    }
  } catch (error) {
    yield put(fetchTopHeadlinesFailure(error));
    return;
  }
}

// FETCH SINGLE NEWS
export function* fetchSingle({ payload: { index, category } }) {
  try {
    let headlinesArray = yield null;
    // Check if the category is top headlines
    if (category === "top-headlines") {
      headlinesArray = yield select(selectTopHeadlines);
    } else {
      // Check if the category is among preferred category
      const preferredCategories = yield select(selectCategoriesHeadlines);
      const headlines = yield preferredCategories.filter(
        categories =>
          categories.category.toLowerCase() === category.toLowerCase()
      );
      if (headlines.length === 0) {
        headlinesArray = yield select(selectSingleCategoryHeadlines);
      } else {
        headlinesArray = yield headlines[0].headlines;
      }
    }
    const headlineResult = yield headlinesArray.filter(
      (headline, headlineIndex) => headlineIndex === index
    );
    const headlineIndex = index;
    const singleHeadline = headlineResult[0];
    yield put(
      fetchSingleHeadlineSuccess({
        singleHeadline,
        headlineIndex,
        headlinesArray
      })
    );
  } catch (error) {
    yield put(fetchSingleHeadlineFailure(error));
  }
}

export function* fetchNextHeadline() {
  // Get the headline index and headlines array
  const singleHeadlineIndex = yield select(selectHeadlineIndex);
  const headlinesArray = yield select(selectHeadlinesArray);
  const headlineIndex = yield singleHeadlineIndex + 1;
  const singleHeadline = headlinesArray[headlineIndex];
  yield put(
    fetchSingleHeadlineSuccess({
      singleHeadline,
      headlineIndex,
      headlinesArray
    })
  );
  return;
}

export function* fetchPreviousHeadline() {
  // Get the headline index and headlines array
  const singleHeadlineIndex = yield select(selectHeadlineIndex);
  const headlinesArray = yield select(selectHeadlinesArray);
  const headlineIndex = yield singleHeadlineIndex - 1;
  const singleHeadline = headlinesArray[headlineIndex];
  yield put(
    fetchSingleHeadlineSuccess({
      singleHeadline,
      headlineIndex,
      headlinesArray
    })
  );
  return;
}

export function* onFetchTopHeadlinesStart() {
  yield takeLatest(UserTypes.SET_COUNTRY, fetchTopHeadlines);
  yield takeLatest(headlineTypes.FETCH_TOP_HEADLINES_START, fetchTopHeadlines);
}

export function* onFetchSingleHeadlineStart() {
  yield takeLatest(headlineTypes.FETCH_SINGLE_HEADLINE_START, fetchSingle);
}

export function* onNextHeadline() {
  yield takeLatest(headlineTypes.NEXT_HEADLINE, fetchNextHeadline);
}
export function* onPreviousHeadline() {
  yield takeLatest(headlineTypes.PREVIOUS_HEADLINE, fetchPreviousHeadline);
}

export function* headlineSagas() {
  yield all([
    call(onFetchTopHeadlinesStart),
    call(onFetchSingleHeadlineStart),
    call(onNextHeadline),
    call(onPreviousHeadline)
  ]);
}
