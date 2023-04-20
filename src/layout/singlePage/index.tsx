import image from "../../../public/image/shoe.png";
import ButtonComponent from "../../component/button";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../redux/fetchSlice";
import { useEffect } from "react";
import { fetchSingleProduct } from "../../redux/fetchMidlware";
import { PRODUCT_URL } from "../../api/endPoints";
import { RootState } from "../../redux/store";
// singlepage-------------------------------------------------
function SinglePage() {
  const modalMode = useSelector(
    (state: RootState) => state.fetchSlice.modalMode
  );
  const product = useSelector(
    (state: RootState) => state.fetchSlice.singleProduct
  );
  const productId = useSelector(
    (state: RootState) => state.fetchSlice.productId
  );
  const loading = useSelector((state: RootState) => state.fetchSlice.loading);

  const dispatch = useDispatch();
  // closeModal-------------------------------------------------------------
  function closeNodal() {
    dispatch(changeModal({ mode: false }));
  }
  // useefect---------------------------------------------------------------
  useEffect(() => {
    dispatch(fetchSingleProduct(productId, PRODUCT_URL));
  }, [dispatch]);
  // adtocart----------------------------------------------------
  function addToCart() {
    let cart = localStorage.getItem("Cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.push(product);
      localStorage.setItem("Cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("Cart", JSON.stringify([product]));
    }
  }
  // return----------------------------------------------------------
  return (
    <div className="w-full h-full bg-whiteC absolute top-0 bottom-0">
      <div className=" w-full top-20 left-[10%] lg:w-[70%] h-[29rem] bg-white sticky lg:left-[15%] lg:top-[5%] rounded-[10px]">
        <div className="w-full bg-table h-[3.87rem] flex ">
          <Icon
            icon="mdi:close-circle"
            width="20"
            height="20"
            onClick={closeNodal}
          />
          <div className="flex w-full justify-around gap-60 items-center">
            <p>Product details</p>

            <div className="flex">
              <p>{product.rating?.rate}</p>
              <Icon
                icon="ic:round-star-rate"
                width="20"
                height="20"
                className="text-yellow-500"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[24.3rem] flex justify-center items-center ">
          {loading ? (
            "loading"
          ) : (
            <>
              <div className="w-[40%]">
                <img
                  src={product.image}
                  alt=""
                  className="w-[356px] h-[257px]"
                />
              </div>
              <div className="flex flex-col w-[40%] gap-8">
                <p>{product.title}</p>
                <p className="text-[10px] text-grayC">{product.description}</p>
                <div className="flex justify-between">
                  <p>$ {product.price}</p>
                  <ButtonComponent title="Add to Cart" onClick={addToCart} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default SinglePage;
