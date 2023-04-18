import ButtonComponent from "../../component/button";
import Input from "../../component/input";

function PaymentPage() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[35rem] bg-white flex-col items-center mb-8">
        <div className="bg-white mt-8 mb-4 border w-full flex  items-center pl-24 h-[5.1rem] rounded-[0.7rem]">
          <p>Total Amount: </p>
          <p>$ 1.620</p>
        </div>
        <div className="bg-table h-[3.8rem] w-full flex  items-center pl-24">
          Payments
        </div>
        <div className="bg-table2  w-full flex items-center pt-6 flex-col gap-8">
          <Input
            text="Card Number"
            className="bg-table2"
            classname2="bg-table2 w-[150px]"
          />

          <Input text="CVV2" className="bg-table2" classname2="bg-table2" />
          <div className="flex gap-4">
            <Input
              text="Year"
              className="bg-table2 "
              classname2="bg-table2"
              clasname3="w-[10.6rem]"
            />
            <Input
              text="Month"
              className="bg-table2"
              classname2="bg-table2"
              clasname3="w-[10.6rem]"
            />
          </div>
          <Input text="E-pass" className="bg-table2" classname2="bg-table2" />
        </div>
        <div className=" w-full pt-8 flex gap-4 bg-table2 justify-center">
          <ButtonComponent
            title="Cancel"
            className="w-[10.6rem] border !border-orange-600 !text-orange-600 bg-white"
          />
          <ButtonComponent
            title="Add Product"
            className="bg-orange-600 w-[10.6rem]"
          />
        </div>
      </div>
    </div>
  );
}
export default PaymentPage;
