import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const SwiGker = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<SwiGker/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
