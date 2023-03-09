import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    console.log("-->",cartItems);
  return (
    <div
    className='h-[80vh]'
    >
    <div className="border border-black">
        {cartItems[0].name}
    </div>
    </div>
  )
}

export default Cart;
