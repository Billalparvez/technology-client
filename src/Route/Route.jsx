import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import Login from "../components/Login";
import ErrorPage from "../components/ErrorPage";
import AddProduct from "../components/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },

    ]
  },
]);