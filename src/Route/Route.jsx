import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import AddProduct from "../components/AddProduct";
import Register from "../components/form/Register";
import Login from "../components/form/Login";


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
        path:"/register",
        element:<Register></Register>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },

    ]
  },
]);