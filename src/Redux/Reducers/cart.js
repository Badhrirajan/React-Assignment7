import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',    
    initialState: {
        items:[]
    },
    reducers:{
        addItem:(state,{payload}) => {
            const itemsCopy = [...state.items];
            const productCopy = itemsCopy.filter((d) => d.id !== payload.id)
                state.items = [...productCopy, payload];
        },
        removeItem:(state,{payload}) => {
            const index = state.items.findIndex(
                (data) => data.id !== payload.id
            );
            console.log(index)
            state.items = [
                ...state.items.slice(0,index),
                ...state.items.slice(index + 1)
            ]
        },
        modifyItem:(state,{payload}) => {
            const index = state.items.findIndex(
                (data) => data.id === payload.id
            );
            state.items = [
                ...state.items.slice(0,index),
                {...state.items[index], quantity: payload.quantity},
                ...state.items.slice(index + 1),
            ]
        }
}
});

export const {addItem, removeItem,modifyItem} = cartSlice.actions;
export default cartSlice.reducer;