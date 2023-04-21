import { useEffect, useState } from "react";
import ButtonComponent from "../../component/button";
import Input from "../../component/input";

function PaymentPage() {
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const number = localStorage.getItem("total");
    setPrice(Number(number));
  }, [localStorage.getItem("total")]);
  return (
    <div className="flex justify-center">
      <div className="flex w-[90%] lg:w-[35rem] bg-white flex-col items-center mb-8">
        <div className="bg-white mt-8 mb-4 border w-full flex  items-center pl-24 h-[5.1rem] rounded-[0.7rem]">
          <p>Total Amount: </p>
          <p>$ {price}</p>
        </div>
        <div className="bg-table h-[3.8rem] w-full flex  items-center lg:pl-24 justify-start pl-8">
          Payments
        </div>
        <div className="bg-table2  w-full flex items-center pt-16 flex-col gap-8">
          <Input
            text="Card Number"
            className="bg-table2"
            classname2="!bg-table2 w-[150px]"
            clasname3="w-[266px] h-[42px] lg:w-[22.4rem] "
          />

          <Input
            text="CVV2"
            className="bg-table2"
            classname2=" !bg-table2 "
            clasname3="w-[266px] h-[42px] lg:w-[22.4rem] "
          />
          <div className="flex gap-4">
            <Input
              text="Year"
              className="bg-table2 !w-[8rem]"
              classname2="!bg-table2 !w-[4rem]"
              clasname3="w-[8rem]"
            />
            <Input
              text="Month"
              className="bg-table2 !w-[8rem]"
              classname2="!bg-table2 !w-[4rem]"
              clasname3="w-[8rem]"
            />
          </div>
          <Input
            text="E-pass"
            className="bg-table2"
            classname2="!bg-table2"
            clasname3="w-[266px] h-[42px] lg:w-[22.4rem] "
          />
        </div>
        <div className=" w-full pt-8 flex gap-4 bg-table2 justify-center">
          <ButtonComponent
            title="Cancel"
            className="w-[8rem] lg:w-[10.6rem] border !border-orange-600 !text-orange-600 bg-white"
          />
          <ButtonComponent
            title="Add Product"
            className="bg-orange-600 w-[8rem] lg:w-[10.6rem] "
          />
        </div>
      </div>
    </div>
  );
}
export default PaymentPage;
