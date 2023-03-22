import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    totalAmount:0,
    totalQuantity:0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    image: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =  Number(existingItem.totalPrice) + Number(newItem.price);
            }
           state.totalAmount = state.cartItems.reduce((total, item)=>total+ Number(item.price)* Number(item.quantity));
           console.log(state.totalQuantity);
           console.log(state.cartItems)
           console.log(newItem)
        }, 
        
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
            }
        }
    },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
