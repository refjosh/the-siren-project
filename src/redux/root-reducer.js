import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoryReducer from "./category/category.reducer";
import headlineReducer from "./headline/headline.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user", "headline"]
};

const rootReducer = combineReducers({
  category: categoryReducer,
  headline: headlineReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
