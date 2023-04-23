import { configureStore } from "@reduxjs/toolkit";
import fetchProductsReducer from "../fetchSlice";
import { useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    fetchSlice: fetchProductsReducer,
  },
});

export default store;

// In types.ts
export type RootState = ReturnType<typeof store.getState>;
