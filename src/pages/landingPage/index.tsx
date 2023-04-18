import banner from "../../../public/image/banner.png";
import banner2 from "../../../public/image/banner2.png";
import { Icon } from "@iconify/react";
function LandingPage() {
  return (
    <div className="w-full">
      <div>
        <img
          src={banner}
          alt=""
          className="hidden lg:inline w-full h-[27.68rem]"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="lg:w-[60rem] flex flex-col items-center ">
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
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
