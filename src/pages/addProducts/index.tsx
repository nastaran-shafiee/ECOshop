import { useSelector } from "react-redux";
import ButtonComponent from "../../component/button";
import Input from "../../component/input";
import useAdd from "../../hooks/useAdd";
import { RootState } from "../../redux/store";
import ShowAdd from "../showAddProduct";

function AddProductsPage() {
  const modalMode = useSelector(
    (state: RootState) => state.fetchSlice.modalMode
  );
  const { register, handleSubmit, errors, handleLoginUser } = useAdd();
  return (
    <>
      {" "}
      {modalMode ? <ShowAdd /> : " "}
      <div className="flex justify-center">
        <form
          className="flex w-[90%] lg:w-[35rem] bg-white flex-col items-center mb-8"
          onSubmit={handleSubmit(handleLoginUser)}
        >
          <div className="bg-white mt-8 mb-4 text-grayC ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            alias eaque voluptatum consequatur saepe, architecto sint eligendi,
          </div>
          <div className="bg-table h-[3.8rem] w-full flex  items-center pl-24">
            Add products
          </div>
          <div className="bg-table2  w-full flex items-center pt-16 flex-col gap-8 ">
            <Input
              text="title"
              error={errors.title?.message}
              validation={{ ...register("title") }}
              className=" bg-table2"
              classname2=" !bg-table2 "
              clasname3="w-[266px] h-[42px] lg:w-[22.4rem] "
            />
            <Input
              text="Description"
              error={errors.Description?.message}
              validation={{ ...register("Description") }}
              className="bg-table2"
              classname2=" !bg-table2 "
              clasname3="w-[266px] h-[42px] lg:w-[22.4rem] "
            />
            <Input
              text="category"
              error={errors.category?.message}
              validation={{ ...register("category") }}
              className="bg-table2"
              classname2=" !bg-table2 "
              clasname3="w-[266px] h-[42px] lg:w-[22.4rem] "
            />
            <Input
              text="Image URL"
              error={errors.ImageURL?.message}
              validation={{ ...register("ImageURL") }}
              className="bg-table2"
              classname2=" !bg-table2 "
              clasname3="w-[266px] h-[42px] lg:w-[22.4rem] "
            />
            <Input
              text="price"
              error={errors.price?.message}
              validation={{ ...register("price") }}
              className="bg-table2"
              classname2=" !bg-table2 "
              clasname3="w-[266px] h-[42px] lg:w-[22.4rem] "
            />
          </div>
          <div className=" w-full pt-8 flex gap-4 bg-table2 justify-center">
            <ButtonComponent
              title="Cancel"
              className=" w-[8rem] lg:w-[10.6rem] border !border-orange-600 !text-orange-600 bg-white"
            />
            <ButtonComponent
              title="Add Product"
              type="submit"
              className="bg-orange-600  w-[8rem] lg:w-[10.6rem]"
            />
          </div>
        </form>
      </div>
    </>
  );
}
export default AddProductsPage;
