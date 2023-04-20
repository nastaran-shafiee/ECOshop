import { combineReducers } from "redux";
import fetchProductsReducer from "../fetchSlice";

const rootReducer = combineReducers({
  fetchSlice: fetchProductsReducer,
  // add more reducers here as needed
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
