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
    <div className="w-full bg-table2 h-[17rem] lg:h-[12rem] flex flex-col lg:justify-center justify-start items-center pt-2 rounded-[0.6rem]">
      <div className="w-full flex flex-col lg:flex-row gap-0 lg:gap-20 items-start lg:items-center ">
        <div className="flex lg:block">
          <img
            src={image}
            alt=""
            className=" w-[9rem] h-[6rem] lg:w-[8.25rem] lg:h-[6rem] ml-8"
          />
          <div className="self-center flex ml-4 lg:self-start lg:flex items-center gap-2 lg:ml-14 mt-2 ">
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
        <hr className="h-[2px] w-full lg:hidden mt-2 mb-2" />

        <div className="text-[0.7rem] lg:text-[0.8rem] lg:w-[8.7rem] w-full flex mt-2">
          <p className="mr-20 lg:hidden ml-2">name </p>
          <p> {title}</p>{" "}
        </div>
        <hr className="h-[2px] w-full lg:hidden mt-2 mb-2" />
        <p className="text-[0.7rem] lg:text-[0.9rem]">
          <span className="mr-20 lg:hidden ml-2">price </span>$ {price}
        </p>
        <hr className="h-[2px] w-full lg:hidden mt-2 mb-2" />

        <p className="text-[0.7rem] lg:text-[0.9rem]">
          <span className="mr-20 lg:hidden ml-2">total</span>${price}
        </p>
      </div>
    </div>
  );
}
export default BascketCartProduct;
