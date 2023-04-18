import shoe from "../../../public/image/shoe.png";

function BascketCartProduct() {
  return (
    <div className="w-full bg-table2 h-[12rem] flex flex-col justify-center items-center">
      <div className="w-full flex justify-around items-center">
        <img
          src={shoe}
          alt=""
          className="w-[7rem] h-[4rem] lg:w-[8.25rem] lg:h-[6rem]"
        />
        <p className="text-[0.7rem] lg:text-[0.8rem]">Nike Triple Black </p>
        <p className="text-[0.7rem] lg:text-[0.9rem]">$ 16.5</p>
        <p className="text-[0.7rem] lg:text-[0.9rem]">$ 16.5</p>
      </div>
      <div className="ml-4 self-start flex items-center gap-2 lg:ml-14 mt-2 ">
        <div className="w-[1.5rem] h-[1.5rem] bg-orange-600 rounded-[50%] flex justify-center items-center text-white">
          +
        </div>
        <div className="w-[3rem] h-[2rem] rounded-[0.62rem] flex justify-center items-center border">
          1
        </div>
        <div className="w-[1.5rem] h-[1.5rem] bg-orange-600 rounded-[50%] flex justify-center items-center text-white">
          -
        </div>
      </div>
    </div>
  );
}
export default BascketCartProduct;
