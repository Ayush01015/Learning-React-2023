import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Deals from "./components/Deals";
const SwiGker = () => {
  return (
    <>
      <Header />
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
        element:<AboutUs/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/deals",
        element:<Deals/>
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
