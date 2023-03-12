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
        removeItem:(state,action)=>{
            state.items.splice(action.payload,1); 
        },
        clearCart:(state)=>{
            state.items = [];
        }
    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;


/**
    note every jargons there is high chances of making mistake.
    reducers
    actions
    reducer
    action
 */
