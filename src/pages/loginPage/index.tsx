import bg from "../../../public/image/bg 2.png";
import vector from "../../../public/image/vector.png";
import bag from "../../../public/image/bag.png";
import Input from "../../component/input";
import ButtonComponent from "../../component/button";
import useAuth from "../../hooks/useAuth";
import { ToastContainer } from "react-toastify";
// login page----------------------------------------------------
function LoginPage() {
  const { register, handleSubmit, errors, handleLoginUser } = useAuth();
  // return ----------------------------------------
  return (
    <>
      {" "}
      <ToastContainer />
      <div className="w-full h-[926px] lg:w-[1366px] lg:h-screen bg-bgLogin relative">
        <img src={bg} alt="" className=" w-[1366px] h-screen" />
        <div className="w-[90%] absolute top-[20%] left-5 lg:w-[1131px] h-[500px] bg-white lg:top-[71px] lg:left-[117px] rounded-[10px] flex justify-around">
          <div className="hidden lg:block">
            <img src={vector} alt="" className="h-[500px] ml-2" />
          </div>
          <form
            className="flex flex-col gap-4 items-center mt-10 pr-8"
            onSubmit={handleSubmit(handleLoginUser)}
          >
            <div className="flex gap-2 items-center">
              <img src={bag} alt="" />
              <p className="text-orange-600 text-lg">ECOshop</p>
            </div>
            <p className="text-purpleC text-2xl font-bold">Welcome Back</p>
            <p className="hidden md:block text-[12px] w-[380px] text-grayC  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, nesciunt saepe assumenda officiis cum modi eum
            </p>
            <div className="mb-8 flex flex-col gap-6 mt-4">
              <Input
                text="Username"
                error={errors.username?.message}
                validation={{ ...register("username") }}
              />
              <Input
                text="Paasword"
                error={errors.password?.message}
                validation={{ ...register("password") }}
              />
            </div>
            <ButtonComponent title="Login" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
