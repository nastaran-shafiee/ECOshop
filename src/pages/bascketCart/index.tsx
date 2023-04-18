import BascketCartProduct from "../../component/bascketProduct";

function BascketCart() {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-[60rem]  gap-4">
        <div className="col-span-1 lg:col-span-9 ">
          <div className=" h-[3.9rem] bg-table flex justify-around items-center rounded-t-[10px]">
            <p>Product details</p>
            <p>Name</p>
            <p>price</p>
            <p>Total</p>
          </div>
          <div>
            <BascketCartProduct />
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3 h-[3.9rem] bg-table flex justify-around items-center rounded-t-[10px]  ">
          <p>cash</p>
          <p>loan</p>
        </div>
      </div>
    </div>
  );
}
export default BascketCart;
