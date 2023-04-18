import { Outlet } from "react-router-dom";
import HeaderPage from "../layout/header";
function SiteLayout() {
  return (
    <>
      <HeaderPage />
      <Outlet></Outlet>
    </>
  );
}
export default SiteLayout;
