import { instance } from "../../api/contannt";
import { Dispatch } from "redux";
import { addProducts, singleProductFunction } from "../fetchSlice";
import { fetchDataInterface, ProductInterface } from "../../types/interface";
import { createDataSuccess } from "../fetchSlice";

// page url---------------------------------------------------------------------------------------------------------

export const fetchData =
  ({
    url,
    category,

    sort, // new parameter for sorting
  }: fetchDataInterface) =>
  async (dispatch: Dispatch) => {
    try {
      let queryUrl = `${url}`;
      if (category) {
        queryUrl += `/category/${category}`;
      }

      if (sort) {
        // add sorting parameter to the query URL
        queryUrl += `&_sort=createdAt&_order=desc`;
      }
      const res = await instance.get(queryUrl);

      dispatch(addProducts(res.data));
    } catch (error) {
      console.log("error");
    }
  };

// create method-----------------------------------------------------------------------------
export const createData =
  (data: any, url: string) => async (dispatch: Dispatch) => {
    try {
      const response = await instance.post(url, data);

      dispatch(createDataSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
// singleproduct--------------------------------------------------------------------------------------
export const fetchSingleProduct = (productId: number, url: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await instance.get<ProductInterface>(
        `${url}/${productId}`
      );
      dispatch(singleProductFunction(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
// fetch category-----------------------------------------------------
