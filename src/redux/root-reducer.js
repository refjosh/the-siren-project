import { combineReducers } from "redux";
import categoryReducer from "./category/category.reducer";
import headlineReducer from "./headline/headline.reducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  headline: headlineReducer
});

export default rootReducer;
