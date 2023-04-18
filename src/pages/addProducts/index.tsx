import ButtonComponent from "../../component/button";
import Input from "../../component/input";

function AddProductsPage() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[35rem] bg-white flex-col items-center mb-8">
        <div className="bg-white mt-8 mb-4 text-grayC">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          alias eaque voluptatum consequatur saepe, architecto sint eligendi,
        </div>
        <div className="bg-table h-[3.8rem] w-full flex  items-center pl-24">
          Add products
        </div>
        <div className="bg-table2  w-full flex items-center pt-6 flex-col gap-8">
          <Input text="title" className=" bg-table2" classname2="bg-table2" />
          <Input
            text="Description"
            className="bg-table2"
            classname2="bg-table2"
          />
          <Input text="category" className="bg-table2" classname2="bg-table2" />
          <Input
            text="Image URL"
            className="bg-table2"
            classname2="bg-table2"
          />
          <Input text="price" className="bg-table2" classname2="bg-table2" />
        </div>
        <div className=" w-full pt-8 flex gap-4 bg-table2 justify-center">
          <ButtonComponent title="Cancel" className="w-[10.6rem]" />
          <ButtonComponent
            title="Add Product"
            className="bg-orange-600 w-[10.6rem]"
          />
        </div>
      </div>
    </div>
  );
}
export default AddProductsPage;
