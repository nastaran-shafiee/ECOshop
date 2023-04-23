import { ChangeEvent } from "react";

import {
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
export interface inputInterface {
  type?: string;
  className?: string;
  classname2?: string;
  placeholder?: string;
  clasname3?: string;
  text?: string;
  error?: string | any;
  validation?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface buttonInterface {
  title?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}
export interface authInterface {
  username: string;
  password: string;
}
export interface fetchDataInterface {
  url: string;
  category?: string | undefined;
  sort?: string | undefined;
}
export interface ProductInterface {
  id?: string;
  title?: any;
  price?: number;
  description?: any;
  category?: string;
  image?: string;

  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  rating?: {
    rate?: string | undefined;
    count?: string | undefined;
  };
}

export interface BascketCartProductInterface {
  image?: string;
  title?: string;
  price?: string;
  totalPrice?: string;
  quantity?: string;
}
export interface CartItem {
  image: string;
  title: string;
  price: string;
  quantity: string;
}
export interface InitialStateInterface {
  data: ProductInterface[];
  modalMode: boolean;
  productId: number;
  singleProduct: ProductInterface;
  category: undefined | string;
  loading: boolean;
}

export interface FetchSliceInterface {
  name: string;
  initialState: InitialStateInterface;
  reducers: {
    addProducts(
      state: InitialStateInterface,
      action: PayloadAction<ProductInterface[]>
    ): void;

    createDataSuccess(
      state: InitialStateInterface,
      action: PayloadAction<ProductInterface>
    ): void;

    changeModal(
      state: InitialStateInterface,
      action: PayloadAction<boolean>
    ): void;

    singleProductFunction(
      state: InitialStateInterface,
      action: PayloadAction<ProductInterface>
    ): void;

    addcategory(
      state: InitialStateInterface,
      action: PayloadAction<string>
    ): void;

    isloding(
      state: InitialStateInterface,
      action: PayloadAction<boolean>
    ): void;
  };
}
