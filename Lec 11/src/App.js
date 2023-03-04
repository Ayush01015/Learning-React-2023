import React, { lazy, Suspense,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact"; 
// import Instamart from "./components/Instamart";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Deals from "./components/Deals";
import RestaurantsMenu from "./components/RestaurantsMenu";
import ShimmerCard from "./components/ShimmerCard";
import userContext from "./Utils/userContext";
/*
Chunking
code splitting
dynamic bundling
lazy loading
on demand loading
dynamic import
(synonyms)
*/
const Instamart = lazy(() => import("./components/Instamart.js")); //it's a promise(js)

const SwiGker = () => {
  const [user,setUser] = useState({
    name:"DummyME",
    email:"dummy@gmail.com"
  });
  return (
    <userContext.Provider value={{
      user:user,
      setUser:setUser
    }}>
      <Header />
      {/* {every Children Will come at the place of Outlet when the Link is clicked} */}
      <Outlet />
      <Footer />
    </userContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SwiGker />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/deals",
        element: <Deals />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantsMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerCard/>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
