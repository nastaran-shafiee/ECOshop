import bag from "../../../public/image/bag.png";
import ButtonComponent from "../../component/button";
import { Icon } from "@iconify/react";
function HeaderPage() {
  return (
    <header className="w-full justify-center gap-3 lg:w-full h-[6.375rem] flex lg:justify-around items-center lg:border">
      <div className="flex gap-2 items-center">
        <img src={bag} alt="" />
        <p className="hidden lg:block text-orange-600 text-lg">ECOshop</p>
      </div>
      <div className="flex gap-2 lg:gap-8 lg:mr-40">
        <p>electronic</p>
        <p>women</p>
        <p>men</p>
        <p>jewelry</p>
      </div>
      <div className="flex gap-4">
        <div className="w-[2.7rem] h-[2.7rem] bg-button flex justify-center items-center rounded-[0.4rem]">
          <Icon
            icon="solar:cart-3-bold"
            width="30"
            height="30"
            className="text-white"
          />
        </div>
        <div className="w-[2.7rem] h-[2.7rem] bg-button flex justify-center items-center rounded-[0.4rem] lg:hidden">
          <Icon
            icon="material-symbols:add-circle-outline"
            width="30"
            height="30"
            className="text-white"
          />
        </div>
        <ButtonComponent title="AddProduct" className="hidden lg:block" />
      </div>
    </header>
  );
}
export default HeaderPage;
