import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const price = cartItems.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue.price
},0)
  if(cartItems.length===0) return<span className="flex justify-center items-center text-4xl font-medium text-[#F99417]">Cart is Empty</span>
//   console.log("-->", cartItems);
  return (
    <div className="mr-96 ml-96 mb-16 flex flex-col justify-center items-center">
      <span className="mt-5 mb-5 flex justify-center items-center text-4xl font-medium text-[#F99417] ">
        Cart Items
      </span>
      <div>
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price / 100}
              cloudinaryImageId={item.cloudinaryImageId}
              category={item.category}
            />
          );
        })}
      </div>
      <span>
        Amount to pay: {price/100}
      </span>
    </div>
  );
};

export default Cart;
