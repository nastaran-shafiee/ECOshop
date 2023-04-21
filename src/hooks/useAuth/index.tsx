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
// function loginuser-------------------------------------------------------------------------------
const loginUserSrvice = (data: authInterface) =>
  instance.post("/auth/login", data);
// yup objecct------------------------------------------------------------------
const loginSchema = yup.object({
  username: yup.string().required("required").min(5, "more than 4 ch"),
  password: yup.string().required("required1").min(5, "more than 4 ch"),
});
// function useath------------------------------------------------------
const useAuth = () => {
  const navigate = useNavigate();
  // useeffect--------------------------------------------------------------------
  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/");
    }
  }, [Cookies.get("token")]);
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
      const res = await loginUserSrvice(data);

      if (res.data?.token) {
        Cookies.set("token", res.data?.token);

        navigate("/");
      } else {
      }
      console.log("hi");
    } catch (ex) {
      toast.error("you can enter the site");
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

export default useAuth;
