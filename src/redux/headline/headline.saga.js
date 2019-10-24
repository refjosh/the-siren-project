import { all, call, put, takeLatest, select } from "redux-saga/effects";

import {
  selectTopHeadlines,
  selectHeadlinesArray,
  selectHeadlineIndex
} from "./headline.selector";
import {
  selectCategoriesHeadlines,
  selectSingleCategoryHeadlines
} from "../category/category.selector";

import headlineTypes from "./headline.types";
import {
  fetchTopHeadlinesSuccess,
  fetchShuffledHeadlinesSuccess,
  fetchTopHeadlinesFailure,
  fetchSingleHeadlineSuccess,
  fetchSingleHeadlineFailure
} from "./headline.action";

const API_KEY = "5871814cd94a40fa9bca75cce204c2cd";

export function* shuffleHeadlines(headlines) {
  const filteredHeadlines = yield [];
  let randomNumbers = yield [];
  let numberOfTimes = yield 6;
  for (let i = 0; i < numberOfTimes; i++) {
    const rand1 = yield Math.floor(Math.random() * headlines.length);
    if (randomNumbers.includes(rand1)) {
      numberOfTimes += 1;
      continue;
    } else {
      randomNumbers.push(rand1);
      filteredHeadlines.push(headlines[rand1]);
    }
  }
  yield put(fetchShuffledHeadlinesSuccess(filteredHeadlines));
}

export function* fetchTopHeadlines() {
  try {
    const response = yield fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const result = yield response.json();
    if (result.status === "ok") {
      const articles = yield result.articles;
      yield shuffleHeadlines(articles);
      yield put(fetchTopHeadlinesSuccess(articles));
    }
  } catch (error) {
    yield put(fetchTopHeadlinesFailure(error));
    return;
  }
}

// FETCH SINGLE NEWS
export function* fetchSingle({ payload: { title, category } }) {
  let headlinesArray = yield null;
  // Check if the category is top headlines
  if (category === "top-headlines") {
    headlinesArray = yield select(selectTopHeadlines);
  } else {
    // Check if the category is among preferred category
    const preferredCategories = yield select(selectCategoriesHeadlines);
    const headlines = yield preferredCategories.filter(
      categories => categories.category.toLowerCase() === category.toLowerCase()
    );
    if (headlines.length === 0) {
      headlinesArray = yield select(selectSingleCategoryHeadlines);
    } else {
      headlinesArray = yield headlines[0].headlines;
    }
  }
  const headlineResult = yield headlinesArray.filter(
    headline => headline.title.toLowerCase() === title.toLowerCase()
  );
  const headlineIndex = headlinesArray.indexOf(headlineResult[0]);
  if (!headlineResult) {
    return put(fetchSingleHeadlineFailure("Headline not found"));
  }
  const singleHeadline = headlineResult[0];
  yield put(
    fetchSingleHeadlineSuccess({
      singleHeadline,
      headlineIndex,
      headlinesArray
    })
  );
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
