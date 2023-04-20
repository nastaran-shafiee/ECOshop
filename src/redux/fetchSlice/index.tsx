import {
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { InitialStateInterface } from "../../types/interface";

interface FetchSliceInterface2
  extends Slice<
    InitialStateInterface,
    SliceCaseReducers<InitialStateInterface>,
    "fetchProducts"
  > {}
// inintial interface-----------------------------------------------
const initialState: InitialStateInterface = {
  data: [],
  modalMode: false,
  productId: 0,
  singleProduct: {},
  category: undefined,
  loading: true,
};
// redusers-------------------------------------------------
const FetchSlice: FetchSliceInterface2 = createSlice({
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
    singleProductFunction(state, action) {
      state.loading = true;
      state.singleProduct = action.payload;
    },
    addcategory(state, action) {
      state.loading = true;
      state.category = action.payload;
    },
    isloding(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {
  addProducts,
  createDataSuccess,
  changeModal,
  singleProductFunction,
  addcategory,
  isloding,
} = FetchSlice.actions;
export default FetchSlice.reducer;
