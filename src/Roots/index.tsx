import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import AddProductsPage from "../pages/addProducts";
import BascketCart from "../pages/bascketCart";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import PaymentPage from "../pages/paymeentPage";
import SiteLayout from "../rootLayout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { path: "/", element: <LandingPage /> },

      { path: "Add", element: <AddProductsPage /> },
      { path: "Cart", element: <BascketCart /> },
      { path: "payment", element: <PaymentPage /> },
    ],
  },
  { path: "login", element: <LoginPage /> },
];
