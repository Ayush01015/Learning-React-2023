import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:["Banana","Apples"]
    },
    reducers:{
        //these function did not return anything they take the state and directly modify it.
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop(); //write proper logic which remove by index
        },
        clearCart:(state)=>{
            state.items = [];
        }
    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
 