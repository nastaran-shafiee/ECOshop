import shoe from "../../../public/image/shoe.png";
import { BascketCartProductInterface } from "../../types/interface";

function BascketCartProduct({
  image,
  title,
  price,
  totalPrice,
  quantity,
}: BascketCartProductInterface) {
  return (
    <div className="w-full bg-table2 h-[12rem] flex flex-col justify-center items-center">
      <div className="w-full flex gap-20 items-center">
        <img
          src={image}
          alt=""
          className="w-[7rem] h-[4rem] lg:w-[8.25rem] lg:h-[6rem] ml-8"
        />
        <p className="text-[0.7rem] lg:text-[0.8rem] w-[8.7rem]">{title} </p>
        <p className="text-[0.7rem] lg:text-[0.9rem]">$ {price}</p>
        <p className="text-[0.7rem] lg:text-[0.9rem]">$ {price}</p>
      </div>
      <div className="ml-4 self-start flex items-center gap-2 lg:ml-14 mt-2 ">
        <div className="w-[1.5rem] h-[1.5rem] bg-orange-600 rounded-[50%] flex justify-center items-center text-white">
          +
        </div>
        <div className="w-[3rem] h-[2rem] rounded-[0.62rem] flex justify-center items-center border">
          {quantity}
        </div>
        <div className="w-[1.5rem] h-[1.5rem] bg-orange-600 rounded-[50%] flex justify-center items-center text-white">
          -
        </div>
      </div>
    </div>
  );
}
export default BascketCartProduct;
