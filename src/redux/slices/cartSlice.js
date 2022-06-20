import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
  count: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemInCart(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if(findItem){
        findItem.count++
      }else{
        state.items.push({
          ...action.payload,
          count: 1
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
        }, 0);
    },
    plusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload)
      findItem.count++
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if(findItem.count >=2) {
        state.item = findItem.count >= 2 && findItem.count--;
        state.totalPrice = state.totalPrice - action.payload.price;
      }
    },
    removeItem(state, action) {
      const allPriceOneProduct = action.payload.count * action.payload.price
      state.items = state.items.filter((pizza) => pizza.id !== action.payload.id);
      state.totalPrice = state.totalPrice - allPriceOneProduct;
    },
    clearItemsFromCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.cart;
export const selectCartItemById = (id) => (state) => state.cart.items.find((obj) => obj.id === id)

export const { addItemInCart,minusItem, removeItem, clearItemsFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
