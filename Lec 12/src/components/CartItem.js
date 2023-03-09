import React from "react";
import { IMG_CDN_URL } from "../constants";
const CartItem = ({ name, price, cloudinaryImageId, category }) => {
  return (
    <div className="border border-black h-30 p-4 w-[30rem]">
      <div className="flex space-x-32 h-30 justify-center items-center">
        <span>
          <img
            className="w-40"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="img"
          />
        </span>
        <div className="w-80">
          <p>{name}</p>
          <p>{category}</p>
          <p>₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
