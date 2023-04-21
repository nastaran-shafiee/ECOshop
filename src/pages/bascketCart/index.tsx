import { useEffect, useState } from "react";
import BascketCartProduct from "../../component/bascketProduct";

function BascketCart() {
  const [Carts, SetCarts] = useState([]);
  useEffect(() => {
    const productCart = localStorage.getItem("Cart");
    const parsedProducts = JSON.parse(productCart!) || [];
    SetCarts(parsedProducts);
  }, []);
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-[90%] grid grid-cols-1 lg:grid-cols-12 lg:w-[60rem]  gap-4">
        <div className="col-span-1 lg:col-span-9 h-[20rem] lg:auto mb-10">
          <div className="justify-start h-[3.9rem] bg-table flex lg:justify-around items-center rounded-t-[10px]">
            <p className="ml-2 lg:ml-0">Product details</p>
            <p className="hidden lg:block">Name</p>
            <p className="hidden lg:block">price</p>
            <p className="hidden lg:block">Total</p>
          </div>
          <div>
            {Carts.length > 0
              ? Carts.map((item) => {
                  return (
                    <BascketCartProduct
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      quantity={item.rating.count}
                    />
                  );
                })
              : "your cart is  empty"}
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
