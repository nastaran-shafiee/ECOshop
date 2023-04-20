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
      state.category = action.payload;
    },
  },
});

export const {
  addProducts,
  createDataSuccess,
  changeModal,
  singleProductFunction,
  addcategory,
} = FetchSlice.actions;
export default FetchSlice.reducer;
