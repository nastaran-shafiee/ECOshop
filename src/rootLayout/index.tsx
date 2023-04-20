import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderPage from "../layout/header";
import Cookies from "js-cookie";

function SiteLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/login");
    }
  }, [Cookies.get("token")]);
  return (
    <>
      <HeaderPage />
      <Outlet></Outlet>
    </>
  );
}
export default SiteLayout;
