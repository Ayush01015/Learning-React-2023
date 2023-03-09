import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        //these function did not return anything they take the state and directly modify it.
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items = [];
        }
    },
})