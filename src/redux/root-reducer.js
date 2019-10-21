import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

import categoryReducer from "./category/category.reducer";
import headlineReducer from "./headline/headline.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["headline", "category"]
};

const rootReducer = combineReducers({
  category: categoryReducer,
  headline: headlineReducer
});

export default persistReducer(persistConfig, rootReducer);
