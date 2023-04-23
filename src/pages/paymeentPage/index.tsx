import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../component/button";
import Input from "../../component/input";
import { changeModal } from "../../redux/fetchSlice";
import { RootState } from "../../redux/store";
import Success from "../Succes";

function PaymentPage() {
  const modalMode = useSelector(
    (state: RootState) => state.fetchSlice.modalMode
  );
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const number = localStorage.getItem("total");
    setPrice(Number(number));
  }, [localStorage.getItem("total")]);
  function check() {
    dispatch(changeModal({ mode: true }));
  }
  return (
    <>
      <div className="!relative">{modalMode ? <Success /> : " "}</div>

      <div className="flex justify-center">
        <div className="flex w-[90%] lg:w-[35rem] bg-white flex-col items-center mb-8">
          <div className="bg-white mt-8 mb-4 border w-full flex  items-center pl-24 h-[5.1rem] rounded-[0.7rem]">
            <p>Total Amount: </p>
            <p>$ {price}</p>
          </div>
          <div className="bg-table h-[3.8rem] w-full flex  items-center lg:pl-24 justify-start pl-8">
            Payments
          </div>
          <div className="bg-table2  w-full flex items-center pt-16 flex-col gap-8 ">
            <Input
              text="Card Number"
              className="bg-table2"
              classname2="!bg-table2 w-[150px]"
              clasname3={
                modalMode ? "!hidden" : "w-[266px] h-[42px] lg:w-[22.4rem]"
              }
            />

            <Input
              text="CVV2"
              className="bg-table2"
              classname2=" !bg-table2 "
              clasname3={
                modalMode ? "!hidden" : "w-[266px] h-[42px] lg:w-[22.4rem]"
              }
            />
            <div className={modalMode ? "hidden" : "flex gap-4"}>
              <Input
                text="Year"
                className="bg-table2 !w-[8rem]"
                classname2="!bg-table2 !w-[4rem]"
                clasname3={modalMode ? "!hidden" : "w-[8rem] lg:w-[10.5rem]"}
              />
              <Input
                text="Month"
                className="bg-table2 !w-[8rem]"
                classname2="!bg-table2 !w-[4rem]"
                clasname3={modalMode ? "!hidden" : "w-[8rem] lg:w-[10.5rem]"}
              />
            </div>
            <Input
              text="E-pass"
              className="bg-table2"
              classname2="!bg-table2"
              clasname3={
                modalMode ? "!hidden" : "w-[266px] h-[42px] lg:w-[22.4rem]"
              }
            />
          </div>
          <div className=" w-full pt-8 flex gap-4 bg-table2 justify-center">
            <ButtonComponent
              title="Cancel"
              className="w-[8rem] lg:w-[10.6rem] border !border-orange-600 !text-orange-600 bg-white"
            />
            <ButtonComponent
              title="Checkout"
              className="bg-orange-600 w-[8rem] lg:w-[10.6rem] "
              onClick={check}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default PaymentPage;
