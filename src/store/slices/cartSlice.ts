import { createSlice } from "@reduxjs/toolkit";
import {IProductInCart} from "../../utils/interfaces";

interface CartState {
    itemList: IProductInCart[]
    totalCartPrice: number
    showCart: boolean
}

const initialState: CartState = {
    itemList: [], 
    totalCartPrice: 0,
    showCart: false 
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find(
                (item) => item.id === newItem.id
            );
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
                state.totalCartPrice += existingItem.price;
            } else {
                    state.itemList.push({
                    title: action.payload.title,
                    price: action.payload.price,
                    totalPrice: action.payload.totalPrice,
                    id: action.payload.id,
                    quantity: 1,
                });
                state.totalCartPrice += action.payload.totalPrice;
            }
            console.log(state.totalCartPrice)
        },
        removeFromCart(state, action) {
            const findItem = state.itemList.find(
                (item) => item.id === action.payload.id
            );
            if (findItem!.quantity === 1) {
                state.itemList = state.itemList.filter(
                    (item) => item.id != action.payload.id
                );
                state.totalCartPrice -= action.payload.price;
            } else {
                findItem!.quantity--;
                findItem!.totalPrice -= findItem!.price;
                state.totalCartPrice -= findItem!.price;
            }
            console.log(state.totalCartPrice)
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
            console.log('cart' + state)
        },
        clearCart(state){
            state.itemList = []
            state.totalCartPrice = 0
        }
    },
});

export const { addToCart, removeFromCart, setShowCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;