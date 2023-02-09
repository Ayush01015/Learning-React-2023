import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Card from "./components/Card";
import {restaurants} from "./constants";

const SwiGker = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const Body = () => {
  return (
    <div className="body">  
      {restaurants.map((restaurant) => {
        return <Card {...restaurant.data} key={restaurant.data.uuid} />;
      })}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SwiGker />);
