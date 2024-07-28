import { createSlice } from "@reduxjs/toolkit";
import { listing } from "../../types/Listing";
import { loadCartState, saveCartState } from "../utils/localStorage";

export type cartState = {
  cart: listing[];
  amount: number;
};

export type statusCartState = cartState & {
  status: string;
  error: string | undefined;
};

const initialState: statusCartState = {
  status: "",
  error: "",
  ...loadCartState(),
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
      state.amount += action.payload.price
      saveCartState(state);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      state.amount -= action.payload.price
      saveCartState(state);
    },
    setItems: (state, action) => {
      state.cart = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload
    },
  },
});

export const { addItem, removeItem, setItems, setAmount } = cartSlice.actions;

export default cartSlice.reducer;
