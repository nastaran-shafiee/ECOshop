import {
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import {
  FetchSliceInterface,
  InitialStateInterface,
  ProductInterface,
} from "../../types/interface";

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
  add: {},
};
// redusers-------------------------------------------------
const FetchSlice: FetchSliceInterface2 = createSlice({
  name: "fetchProducts",
  initialState: initialState,
  reducers: {
    addProducts(
      state: InitialStateInterface,
      action: PayloadAction<ProductInterface[]>
    ) {
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
    changeAdd(state, action) {
      state.modalMode = action.payload.mode;
      state.add = action.payload.add;
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
  changeAdd,
} = FetchSlice.actions;
export default FetchSlice.reducer;
