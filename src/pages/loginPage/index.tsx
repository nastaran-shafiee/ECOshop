import bg from "../../../public/image/bg 2.png";
import vector from "../../../public/image/vector.png";
import bag from "../../../public/image/bag.png";
import Input from "../../component/input";
function LoginPage() {
  return (
    <div className="w-full h-[926px] lg:w-[1366px] lg:h-screen bg-bgLogin relative">
      <img src={bg} alt="" className=" w-[1366px] h-screen" />
      <div className="w-[90%] absolute top-[20%] left-5 lg:w-[1131px] h-[500px] bg-white lg:top-[71px] lg:left-[117px] rounded-[10px] flex gap-10">
        <div className="hidden lg:block">
          <img src={vector} alt="" className="h-[500px] ml-2" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-2 items-center">
            <img src={bag} alt="" />
            <p className="text-orange-600 text-lg">ECOshop</p>
          </div>
          <p className="text-purpleC text-2xl font-bold">Welcome Back</p>
          <p className="text-[12px] w-[360px] flex justify-center text-grayC">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, nesciunt saepe assumenda officiis cum modi eum
          </p>
          <Input text="Username" />
          <Input text="Paasword" />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
