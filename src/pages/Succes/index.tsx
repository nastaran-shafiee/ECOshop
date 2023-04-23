import ButtonComponent from "../../component/button";
import { Icon } from "@iconify/react";
function Success({ price }: any) {
  return (
    <div className="w-full h-[1000px] bg-whiteC absolute top-0 bottom-0 ">
      <div className="left-4 w-[90%] h-[30rem] top-20 lg:w-[545px] lg:h-[403px] bg-success absolute lg:left-[30%] lg:top-[10%] rounded-[10px] !z-100">
        <div className="flex justify-center items-center !min-h-[12.5rme] flex-col gap-4 mt-8 mb-8">
          <p>
            <Icon
              icon="clarity:success-standard-solid"
              width="30"
              height="30"
              className="text-greenC"
            />
          </p>
          <p> your payment is succes</p>
        </div>
        <hr className="w-full h-[2px]" />
        <div className="flex flex-col gap-4 mt-8">
          <div className="flex justify-around">
            <p>Total Amount:</p> <p>$ {price}</p>
          </div>

          <div className="flex justify-around">
            <p>card number:</p>
            <p>1234.5687</p>
          </div>
          <div className="flex justify-around">
            <p>Tracking Code:</p>
            <p>123456</p>
          </div>
          <div className="self-center">
            <ButtonComponent
              title="Complete transaction"
              className="bg-greenC mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Success;
