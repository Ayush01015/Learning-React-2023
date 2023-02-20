import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Deals from "./components/Deals";
import RestaurantsMenu from "./components/RestaurantsMenu";
const SwiGker = () => {
  return (
    <>
      <Header />
      {/* {every Children Will come at the place of Outlet when the Link is clicked} */}
      <Outlet/>
      <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<SwiGker/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<AboutUs/>,
        children:[{
          path:"profile",
          element:<Profile/>
        }
        ]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/deals",
        element:<Deals/>
      },
      {
        path:"/restaurants/:id",
        element:<RestaurantsMenu/>
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
