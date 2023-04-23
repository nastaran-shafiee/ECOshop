import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { instance } from "../../api/contannt";
import { authInterface } from "../../types/interface";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PRODUCT_URL } from "../../api/endPoints";
import { useDispatch } from "react-redux";
import { changeAdd, changeModal } from "../../redux/fetchSlice";

// function useath------------------------------------------------------
const useAdd = () => {
  const dispath = useDispatch();
  // yup objecct------------------------------------------------------------------
  const loginSchema = yup.object({
    title: yup.string().required("required").min(4, "more than 4 ch"),
    Description: yup.string().required("required1").min(4, "more than 4 ch"),
    category: yup.string().required("required1").min(4, "more than 4 ch"),
    ImageURL: yup.string().required("required1").min(4, "more than 4 ch"),
    price: yup.number().required("required1").min(4, "more than 4 Number"),
  });

  // useeffect--------------------------------------------------------------------

  //useform---------------------------------------------------------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  // handle login user=-------------------------------------------------------------

  const handleLoginUser = async (data: any) => {
    try {
      instance.post(PRODUCT_URL, data);
      dispath(changeAdd({ mode: true, add: data }));
    } catch (ex) {
      console.log("error");
    }
  };
  // return hook---------------------------------------------------------------------
  return {
    register,
    handleSubmit,
    errors,
    handleLoginUser,
  };
};

export default useAdd;
