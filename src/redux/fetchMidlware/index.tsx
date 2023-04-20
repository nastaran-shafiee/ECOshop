import { instance } from "../../api/contannt";
import { Dispatch } from "redux";
import { addProducts } from "../fetchSlice";
import { fetchDataInterface } from "../../types/interface";
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
        queryUrl += `&category=${category}`;
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
