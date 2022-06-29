import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCartFromLS} from "../../utils/getCartFromLS";
import {calcTotalPrice} from "../../utils/calcTotalPrice";
import {CartItem, CartSliceState} from "./types";



const {items, totalPrice} = getCartFromLS();

const initialState: CartSliceState = {
    totalPrice,
    items,
    count: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemInCart(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items)
        },
        plusItem(state, action: PayloadAction<string> ) {
            const findItem = state.items.find((item) => item.id === action.payload);
            if(findItem){
                findItem.count++;
            }
        },
        minusItem(state, action : PayloadAction<CartItem>) {
            const findItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if(findItem){
                if (findItem.count >= 2) {
                    findItem.count >= 2 && findItem.count--;
                    state.totalPrice = state.totalPrice - action.payload.price;
                }
            }
        },
        removeItem(state, action: PayloadAction<CartItem>) {
            const allPriceOneProduct = action.payload.count * action.payload.price;
            state.items = state.items.filter(
                (pizza) => pizza.id !== action.payload.id
            );
            state.totalPrice = state.totalPrice - allPriceOneProduct;
        },
        clearItemsFromCart(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItemInCart, minusItem, removeItem, clearItemsFromCart } =
    cartSlice.actions;

export default cartSlice.reducer;
