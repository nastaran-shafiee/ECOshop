import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BascketCartProduct from "../../component/bascketProduct";
import ButtonComponent from "../../component/button";

import { CartItem } from "../../types/interface";
// bascket cart-----------------------------------------------------
function BascketCart() {
  const [Carts, SetCarts] = useState<CartItem[]>([]);
  const [cash, setCash] = useState(false);
  const [color, setColor] = useState(false);
  const [price, setPrice] = useState<any>(0);
  const [interst, setInterest] = useState(false);
  const [interestRate, setInterestRate] = useState(0);
  const [fristLoan, setFristLoan] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const productCart = localStorage.getItem("Cart");
    const parsedProducts = JSON.parse(productCart!) || [];
    SetCarts(parsedProducts);
  }, [localStorage.getItem("Cart")]);
  useEffect(() => {
    const number = localStorage.getItem("price");
    setPrice(number);
  }, [localStorage.getItem("total")]);

  // function Cash----------------------------------------------------
  function Cash() {
    if (price) {
      localStorage.setItem("total", price.toString());
      localStorage.removeItem("Cart");
      navigate("/payment");
    }
  }
  function handleRadioChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    if (value === 3) {
      setInterestRate(0.2);
    } else if (value === 6) {
      setInterestRate(0.1);
    } else if (value === 12) {
      setInterestRate(0.05);
    }
    setInterest(true);
  }
  //function loan---------------------------------------------------------
  function loan() {
    if (interestRate === 0.2) {
      const loanPrice = price
        ? (Number(price) - Number(price * interestRate)) / Number(3)
        : 0;
      localStorage.setItem("total", loanPrice.toFixed(2));
    } else if (interestRate === 0.1) {
      const loanPrice = price
        ? (Number(price) - Number(price * interestRate)) / Number(6)
        : 0;
      localStorage.setItem("total", loanPrice.toFixed(2));
    } else if (interestRate === 0.05) {
      const loanPrice = price
        ? (Number(price) - Number(price * interestRate)) / Number(12)
        : 0;
      localStorage.setItem("total", loanPrice.toFixed(2));
    }
    localStorage.removeItem("Cart");
    navigate("/payment");
  }
  // rteurn function------------------------------------------------------
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
                      quantity={item.quantity}
                    />
                  );
                })
              : "your cart is  empty"}
          </div>
        </div>
        {/* cash and loan-------------------------------------------------------------------------------------- */}
        <div className="col-span-1 lg:col-span-3 h-[16rem] bg-table2">
          <div className="h-[3.9rem] bg-table flex justify-around items-center rounded-t-[10px] text-center">
            <p
              onClick={() => {
                setCash(true);
                setColor(true);
              }}
              className={
                color
                  ? "bg-purpleC w-[50%] h-[2.9rem] rounded-[0.6rem] text-white flex justify-center items-center"
                  : " "
              }
            >
              <span>cash</span>
            </p>
            <p
              onClick={() => {
                setCash(false);
                setColor(false);
                setInterest(false);
              }}
              className={
                !color
                  ? "bg-purpleC w-[50%] h-[2.9rem] rounded-[0.6rem] text-white flex justify-center items-center"
                  : " "
              }
            >
              <span> loan</span>
            </p>
          </div>
          <div>
            {cash ? (
              <div className="flex justify-center items-center flex-col gap-12 mt-12">
                <p>
                  Total Amount: <span>${price}</span>
                </p>
                <ButtonComponent
                  title="Proceed to Check Out"
                  className="bg-orange-600"
                  onClick={Cash}
                />
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col gap-4 mt-4">
                <div className="flex gap-2 items-center">
                  {" "}
                  <input
                    type="radio"
                    name="loan"
                    value={3}
                    onChange={handleRadioChange}
                  />{" "}
                  3 mounth{" "}
                  <span className="text-sm text-grayC">-20% interesr</span>
                </div>
                <div className="flex gap-2 items-center">
                  {" "}
                  <input
                    type="radio"
                    name="loan"
                    value={6}
                    onChange={handleRadioChange}
                  />{" "}
                  6 mounth{" "}
                  <span className="text-sm text-grayC">-10% interesr</span>
                </div>
                <div className="flex gap-2 items-center">
                  {" "}
                  <input
                    type="radio"
                    name="loan"
                    value={12}
                    onChange={handleRadioChange}
                  />{" "}
                  12 mounth{" "}
                  <span className="text-sm text-grayC">-5% interesr</span>
                </div>
                {interst ? (
                  <>
                    <hr className="w-full h-[2px]" />
                    <div className="flex justify-center items-center flex-col gap-4 mt-4">
                      <p>
                        total : {(price - price * interestRate).toFixed(2)}{" "}
                      </p>
                      <p>interest : {(price * interestRate).toFixed(2)} </p>
                    </div>
                  </>
                ) : (
                  " "
                )}
                <ButtonComponent
                  title="Proceed to Check Out"
                  className="bg-orange-600"
                  onClick={loan}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BascketCart;
