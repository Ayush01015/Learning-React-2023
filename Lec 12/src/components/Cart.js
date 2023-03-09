import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const price = cartItems.reduce((totalPrice, currentValue) => {
    return totalPrice + currentValue.price;
  }, 0);

  if (cartItems.length === 0) //early return
    return (
      <>
        <div className="mt-10 flex justify-center items-center text-4xl font-medium text-[#F99417] ">
          Cart is Empty
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-50%"
            src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1060&t=st=1678374576~exp=1678375176~hmac=d4cf47f4875531d41abd21e0ce978a7b5ee2f34b44e10195d53126c899412afb"
            alt="cart-img"
          />
        </div>
      </>
    );
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
      <span className="mt-2">Amount to pay: {price / 100}</span>
    </div>
  );
};

export default Cart;
