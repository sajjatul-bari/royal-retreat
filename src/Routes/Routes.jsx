import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import About from "../Pages/About/About";

import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoute/PrivateRoute";
import CategoryDetails from "../Pages/Home/CategoryDetails/CategoryDetails";
import Testimonial from "../Pages/Home/Testimonial/Testimonial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoutes>
            <CategoryDetails></CategoryDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/residential.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
