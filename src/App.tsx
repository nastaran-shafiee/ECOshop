import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Route,
  Router,
} from "react-router-dom";
import { routes } from "./Roots";
function App() {
  const Router = createBrowserRouter(routes);
  return (
    <RouterProvider router={Router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
