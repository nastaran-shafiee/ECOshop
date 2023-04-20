import image from "../../../public/image/shoe.png";
import ButtonComponent from "../../component/button";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { changeModal } from "../../redux/fetchSlice";
function SinglePage() {
  const modalMode = useSelector((state) => state.fetchSlice.modalMode);
  const dispatch = useDispatch();

  function closeNodal() {
    dispatch(changeModal({ mode: false }));
  }
  return (
    <div className="w-full h-full bg-whiteC absolute top-0 bottom-0">
      <div className=" w-[90%] top-20 left-[10%] lg:w-[70%] h-[29rem] bg-white sticky lg:left-[15%] lg:top-[5%] rounded-[10px]">
        <div className="w-full bg-table h-[3.87rem] flex">
          <Icon
            icon="mdi:close-circle"
            width="20"
            height="20"
            onClick={closeNodal}
          />
          <p className="mt-[22px] ml-[5.87rem] ">Product details</p>
        </div>
        <div className="w-full h-[24.3rem] flex justify-center items-center ">
          <div className="w-[40%]">
            <img src={image} alt="" className="w-[356px] h-[257px]" />
          </div>
          <div className="flex flex-col w-[40%] gap-8">
            <p>Nike Triple Black Air Force 1 '07 sneakers</p>
            <p className="text-sm text-grayC">
              Width 308px Height 51px Top 334px Left 691px A Lorem Ipsum text
              generator is specifically designed to generate a dummy text or
              placeholder text.
            </p>
            <div className="flex justify-between">
              <p>1.620</p>
              <ButtonComponent title="Add to Cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SinglePage;
