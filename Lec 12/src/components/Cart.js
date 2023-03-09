import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  }

  const totalPrice = cartItems.reduce((price, currentValue) => {
    return price + currentValue.price;
  }, 0);

  if (cartItems.length === 0)
    //early return
    return (
      <>
        <div className="mt-10 flex justify-center items-center text-4xl font-medium text-[#F99417] ">
          Cart is Empty
        </div>
        <div className="flex justify-center items-center">
          <img
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
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <span className="mt-4 text-2xl font-semibold text-[#f942b0]">Amount to pay: ₹ {totalPrice / 100}</span>
      <div className="flex mt-4">
        <button className="w-32 h-8 bg-[#F99417] pl-2 pr-2 m-2 border border-black rounded-sm hover:bg-[#fba844]">Pay</button>
        <button onClick={()=>clearCartItems()} className="w-32 h-8 bg-[#F99417] pl-2 pr-2 m-2 border border-black rounded-sm hover:bg-[#fba844]">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
