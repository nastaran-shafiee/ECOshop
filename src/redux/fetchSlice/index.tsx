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
  modalMode: false,
  productId: 0,
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
    changeModal(state, action) {
      state.modalMode = action.payload.mode;
      state.productId = action.payload.productId;
    },
  },
});

export const { addProducts, createDataSuccess, changeModal } =
  FetchSlice.actions;
export default FetchSlice.reducer;
