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
  const navigate = useNavigate();
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
    const SendProduct = {
      ...product,
      quantity: 1,
    };
    let cart = localStorage.getItem("Cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.push(SendProduct);
      localStorage.setItem("Cart", JSON.stringify(cart));
      localStorage.setItem("price", JSON.stringify(product.price));
    } else {
      localStorage.setItem("Cart", JSON.stringify([SendProduct]));
      localStorage.setItem("price", JSON.stringify(product.price));
    }
    navigate("/Cart");
  }
  // return----------------------------------------------------------
  return (
    <div className="w-full h-full bg-whiteC absolute top-0 bottom-0">
      <div className="left-4 w-[90%] h-[35rem] top-20 lg:w-[70%] lg:h-[29rem] bg-white sticky lg:left-[15%] lg:top-[5%] rounded-[10px]">
        <div className="w-full bg-table h-[3.87rem] flex ">
          <Icon
            icon="mdi:close-circle"
            width="20"
            height="20"
            onClick={closeNodal}
          />
          <div className="gap-0 flex w-full justify-around lg:gap-60 items-center">
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

        <div className="w-full  justify-start flex-col lg:flex-row h-[24.3rem] flex lg: items-center lg:justify-center ">
          {loading ? (
            "loading"
          ) : (
            <>
              <div className="mt-2 w-[80%] lg:w-[40%]">
                <img
                  src={product.image}
                  alt=""
                  className="w-[270px] h-[198px] lg:w-[356px] lg:h-[257px]"
                />
              </div>
              <div className="w-[80%] flex flex-col lg:w-[40%] gap-8">
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
