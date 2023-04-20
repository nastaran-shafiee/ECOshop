import banner from "../../../public/image/banner.png";
import banner2 from "../../../public/image/banner2.png";
import { Icon } from "@iconify/react";
import Cart from "../../component/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../../redux/fetchMidlware";
import { PRODUCT_URL } from "../../api/endPoints";
import { ProductInterface } from "../../types/interface";
import SinglePage from "../../layout/singlePage";
import { changeModal } from "../../redux/fetchSlice";
function LandingPage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchSlice.data);
  const modalMode = useSelector((state) => state.fetchSlice.modalMode);

  useEffect(() => {
    dispatch(
      fetchData({
        url: PRODUCT_URL,
      })
    );
  }, [dispatch, data]);

  function openModal(id: number) {
    dispatch(changeModal({ mode: true, productId: id }));
  }

  return (
    <div className="relative">
      <div className="mb-10 relative">
        {modalMode ? <SinglePage /> : " "}
        <div>
          <img
            src={banner}
            alt=""
            className="hidden lg:inline w-full h-[27.68rem]"
          />
        </div>
        <div className=" flex justify-center ">
          <div className="w-[70%] md:w-[80%] lg:w-[60rem] flex flex-col items-center ">
            <div className="flex gap-4 w-full mt-8 ">
              <div className="flex">
                <Icon icon="icons8:generic-sorting" width="30" height="30" />
                <p>sorting</p>
              </div>
              <div className="flex">
                <Icon icon="mdi:arrow-top" width="30" height="30" />
                <p>Ascending</p>
              </div>
              <div className="flex">
                <Icon icon="mdi:arrow-bottom" width="30" height="30" />
                <p>descending</p>
              </div>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-8">
              {data.map((item: ProductInterface) => (
                <Cart
                  price={item.price}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                  id={item.id}
                  category={item.category}
                  onClick={() => {
                    openModal(item.id);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
