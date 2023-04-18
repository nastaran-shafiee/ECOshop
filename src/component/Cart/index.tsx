import shoe from "../../../public/image/shoe.png";
import { Icon } from "@iconify/react";
function Cart() {
  return (
    <div className="w-[15rem] h-[25rem] flex flex-col items-center border shadow rounded-[0.7rem] pt-2">
      <img
        src={shoe}
        alt=""
        className="w-[14rem] h-[11.2rem] rounded-[0.7rem]"
      />
      <div className="flex gap-14">
        <div className="w-[4.37rem] h-[1.5rem] bg-orange-600 text-white rounded-[1.25rem] flex justify-center">
          {" "}
          clothes
        </div>
        <div className="flex">
          <Icon
            icon="ic:round-star-rate"
            width="20"
            height="20"
            className="text-yellow-500"
          />
          <Icon
            icon="ic:round-star-rate"
            width="20"
            height="20"
            className="text-yellow-500"
          />
          <Icon
            icon="ic:round-star-rate"
            width="20"
            height="20"
            className="text-yellow-500"
          />
          <Icon
            icon="ic:round-star-rate"
            width="20"
            height="20"
            className="text-yellow-500"
          />
          <Icon
            icon="ic:round-star-rate"
            width="20"
            height="20"
            className="text-white border-yellow-500"
          />
        </div>
      </div>
      <p className="ml-2 mt-2 text-lg font-medium">
        {" "}
        Nike Triple Black Air Force 1 '07 sneakers
      </p>
      <p className="ml-2 mt-2 text-[0.7rem] text-grayC">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis rem
        voluptate porro, corporis consequuntur commodi mollitia suscipit
      </p>
      <div className="flex gap-20 mt-2">
        <p>$ 1620</p>
        <div className="w-[2.7rem] h-[2.7rem] bg-button flex justify-center items-center rounded-[0.4rem]">
          <Icon
            icon="solar:cart-3-bold"
            width="30"
            height="30"
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
}
export default Cart;
