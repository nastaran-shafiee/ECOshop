import bag from "../../../public/image/bag.png";
import ButtonComponent from "../../component/button";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../api/contannt";
import { addcategory, isloding } from "../../redux/fetchSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
// headerpage-------------------------------------------
function HeaderPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<[] | null>(null);
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.fetchSlice.loading);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // useefect------------------------------------------------------
  useEffect(() => {
    instance.get("/products/categories").then((response) => {
      setData(response.data);
    });
  }, []);
  // go to cart------------------------------------------------------
  function gotoCart() {
    navigate("/Cart");
  }
  // return---------------------------------------------------------
  return (
    <header className="w-full justify-center md:justify-around gap-3 lg:w-full h-[6.375rem] flex lg:justify-around items-center lg:border">
      <div className="flex gap-2 items-center">
        <img src={bag} alt="" />
        <p
          className="hidden lg:block text-orange-600 text-lg cursor-pointer"
          onClick={() => {
            return dispatch(addcategory(undefined));
          }}
        >
          ECOshop
        </p>
      </div>
      <div className="flex gap-2 lg:gap-8 lg:mr-40">
        {data &&
          data.map((item: string) => (
            <>
              <div className="text-[7px] lg:text-[18px] flex flex-col gap-2">
                <p
                  key={item}
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedCategory(item);
                    dispatch(isloding(true));
                    return dispatch(addcategory(item));
                  }}
                >
                  {item}
                </p>
                {selectedCategory === item && (
                  <hr className="w-full h-[4px] bg-purpleC rounded-t-[10px]" />
                )}
              </div>
            </>
          ))}
      </div>

      <div className="flex gap-4">
        <div className="w-[2.7rem] h-[2.7rem] bg-button flex justify-center items-center rounded-[0.4rem]">
          <Icon
            icon="solar:cart-3-bold"
            width="30"
            height="30"
            className="text-white"
            onClick={gotoCart}
          />
        </div>
        <div className="w-[2.7rem] h-[2.7rem] bg-button flex justify-center items-center rounded-[0.4rem] lg:hidden">
          <Icon
            icon="material-symbols:add-circle-outline"
            width="30"
            height="30"
            className="text-white"
          />
        </div>
        <ButtonComponent
          title="AddProduct"
          className="hidden lg:block"
          onClick={() => {
            navigate("/add");
          }}
        />
      </div>
    </header>
  );
}
export default HeaderPage;
