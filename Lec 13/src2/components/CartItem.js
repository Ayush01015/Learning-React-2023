import React from "react";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../Utils/cartSlice";
const CartItem = ({ name, price, cloudinaryImageId, category, id}) => {
    const dispatch = useDispatch();

    const removeCartItem = (id)=>{
        dispatch(removeItem(id));
    }

  return (
    <div className="border border-black h-30 p-4 w-[30rem] mt-2 mb-2">
      <div className="flex space-x-32 h-30 justify-center items-center">
        <span>
          <img
            className="w-40"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="img"
          />
          <button onClick={()=>removeCartItem(id)} className="relative left-3 bottom-1 w-20 h-6 bg-[#f6b566] border border-black rounded-sm hover:bg-[#fba844]">Remove</button>
        </span>
        <div className="w-80">
          <p>{name}</p>
          <p>{category}</p>
          <p>₹ {price/100}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
