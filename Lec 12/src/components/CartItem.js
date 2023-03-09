import React from "react";
import { IMG_CDN_URL } from "../constants";
const CartItem = ({ name, price, cloudinaryImageId, category }) => {
  return (
    <div className="border border-black h-30 p-4 w-[30rem]">
      <div className="flex space-x-32 ">
        <span>
          <img
            className="w-32"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="img"
          />
        </span>
        <div className="i">
          <p>{name}</p>
          <p>{category}</p>
          <p>₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
/**
 * 
 *         <div className="menu-sub">
          {restaurant?.menu?.items &&
            Object.values(restaurant?.menu?.items).map((item) => (
              <div className="menu-sub-2" key={item.id}>
                <div className="menu-item-con">
                  <div className="menu-item-con-data">
                    <p
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </p>
                    <p style={{ fontSize: "1rem" }}>{item.category}</p>
                    <p>₹{restaurant?.menu?.items[item.id].price / 100}</p>
                  </div>
                  <div className="menu-item-con-img">
                    <img
                      src={IMG_CDN_URL + item.cloudinaryImageId}
                      alt="img"
                    />
                    <button
                      onClick={()=>addCartItem(item)}
                      className="border border-black w-14 px-3 py-1 flex justify-center items-center cursor-pointer bg-white relative left-14 bottom-3"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
 */
