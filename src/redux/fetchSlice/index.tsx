import {
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import axios from "axios";

// inintial interface-----------------------------------------------
const initialState = {
  data: [],
};
// redusers-------------------------------------------------
const FetchSlice = createSlice({
  name: "fetchProducts",
  initialState: initialState,
  reducers: {
    addProducts(state, action) {
      state.data = action.payload;
    },

    createDataSuccess: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addProducts, createDataSuccess } = FetchSlice.actions;
export default FetchSlice.reducer;
