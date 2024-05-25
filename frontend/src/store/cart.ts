import { createSlice } from "@reduxjs/toolkit";
import { listing } from "../../types/Listing";
import { loadCartState, saveCartState } from "../utils/localStorage";

export type cartState = {
  cart: listing[];
};

const initialState: cartState = {
  cart: loadCartState(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const foundListing: boolean = state.cart.some((item) => {
        return item.id === action.payload.id;
      });
      if (foundListing) {
        alert("Item is already in cart");
        return;
      }

      state.cart.push(action.payload);
      saveCartState(state);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      saveCartState(state);
    },
    setItems: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { addItem, removeItem, setItems } = cartSlice.actions;

export default cartSlice.reducer;
