import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import AddProduct from "../components/AddProduct";
import Register from "../components/form/Register";
import Login from "../components/form/Login";
import Cards from "../components/Cards";
import EditProduct from "../components/EditProduct";
// import CardDetails from "../components/CardDetails";
import MyCart from "../components/MyCart";
import PrivateRouter from "../Provider/PrivateRoute";
import Brand from "../components/Brand";
import CardDetails from "../components/CardDetails";


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
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/cards/:brand",
        element: <Cards></Cards>,
        loader: ({params}) => fetch(`http://localhost:5000/technology/brand/${params.brand}`),
      },
      {
        path: "/editProduct/:id",
        element: <EditProduct></EditProduct>,
        loader: ({ params }) => fetch(`http://localhost:5000/technology/${params.id}`)
      },
      {
        path: "/cardDetails/:id",
        element: <PrivateRouter><CardDetails></CardDetails></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/technology/${params.id}`)
      },
      {
        path: "/myCart",
        element: <PrivateRouter><MyCart></MyCart></PrivateRouter>,
        loader:()=>fetch('http://localhost:5000/brand')
      },
      {
        path: "/brand",
        element: <Brand></Brand>,
          // loader:()=>fetch('http://localhost:5000/brand')
      }

    ]
  },
]);