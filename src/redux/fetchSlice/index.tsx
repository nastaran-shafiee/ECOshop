import {
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

// inintial interface-----------------------------------------------
const initialState = {
  data: [],
  modalMode: false,
  productId: 0,
  singleProduct: {},
  category: undefined,
  loading: true,
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
    singleProductFunction(state, action) {
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
