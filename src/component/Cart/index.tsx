import shoe from "../../../public/image/shoe.png";
import { Icon } from "@iconify/react";
import { ProductInterface } from "../../types/interface";
// function cart--------------------------------------------------
function Cart({
  id,
  title,
  price,
  description,
  category,
  image,
  count,
  onClick,
}: ProductInterface) {
  // return function------------------------------------------------------
  return (
    <div
      className="w-[15rem] h-[25rem] flex flex-col items-center border shadow rounded-[0.7rem] pt-2"
      onClick={onClick}
    >
      <img
        src={image}
        alt=""
        className="w-[14rem] h-[11.2rem] rounded-[0.7rem]"
      />
      <div className="flex gap-10 mt-2">
        <div className="w-[5.3rem] h-[1.5rem] bg-orange-600 text-white rounded-[1.25rem] flex justify-center text-[10px] items-center">
          {" "}
          <p> {category}</p>
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
      <p className="ml-2 mt-2 text-lg font-medium min-h-[50px]">
        {" "}
        {title.split(" ").slice(0, 5).join(" ")}
      </p>
      <p className="ml-2 mt-2 text-[0.7rem] text-grayC min-h-[50px]">
        {" "}
        {description.split(" ").slice(0, 15).join(" ")}...
      </p>
      <div className="flex gap-20 mt-2">
        <p>$ {price}</p>
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
