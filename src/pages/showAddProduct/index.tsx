import image from "../../../public/image/shoe.png";
import ButtonComponent from "../../component/button";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../redux/fetchSlice";
import { useEffect } from "react";
import { fetchSingleProduct } from "../../redux/fetchMidlware";
import { PRODUCT_URL } from "../../api/endPoints";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
// singlepage-------------------------------------------------
function ShowAdd() {
  const modalMode = useSelector(
    (state: RootState) => state.fetchSlice.modalMode
  );
  const product = useSelector((state: RootState) => state.fetchSlice.add);
  const productId = useSelector(
    (state: RootState) => state.fetchSlice.productId
  );
  const loading = useSelector((state: RootState) => state.fetchSlice.loading);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // closeModal-------------------------------------------------------------
  function closeNodal() {
    dispatch(changeModal({ mode: false }));
  }
  // useefect---------------------------------------------------------------

  // adtocart----------------------------------------------------

  // return----------------------------------------------------------
  return (
    <div className="w-full h-full bg-whiteC absolute top-0 bottom-0">
      <div className="left-4 w-[90%] h-[35rem] top-20 lg:w-[545px] lg:h-[348px] bg-success sticky lg:left-[30%] lg:top-[20%] rounded-[10px]">
        <div className="w-full h-[7rem] flex ">
          <Icon
            icon="mdi:close-circle"
            width="20"
            height="20"
            onClick={closeNodal}
          />
          <div className="gap-8 flex w-full justify-center items-center flex-col mb-4 ">
            <div>
              {" "}
              <Icon
                icon="clarity:success-standard-solid"
                width="30"
                height="30"
                className="text-greenC text-center w-full mb-4"
              />
              <p className="text-center">
                Your product has been successfully registered
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full h-[2px]" />
        <div className="w-full  justify-start flex-col lg:flex-row h-[24.3rem] flex lg:  lg:justify-center pl-8 lg:pl-0 ">
          <>
            <div className="mt-2 w-[80%] lg:w-[40%]">
              <img
                src={product.image}
                alt=""
                className="w-[270px] h-[198px] lg:w-[132px] lg:h-[95px]"
              />
            </div>
            <div className="w-[80%] flex flex-col lg:w-[40%] gap-2">
              <p>{product.title}</p>
              <p className="text-grayC">{product.Description}</p>
              <p>category: {product.category}</p>
              <p className="text-[10px] text-grayC">{product.description}</p>
              <div className="flex justify-between">
                <p>price: ${product.price}</p>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
export default ShowAdd;
