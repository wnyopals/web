import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listing } from "../../types/Listing";
import { loadCartState, saveCartState } from "../utils/localStorage";
import { PurchaseInfo, PurchaseLookup, StartPurchaseResponse, UpdatePurchase} from "../../types/Purchases";
import { PaymentIntent } from "@stripe/stripe-js";

export type cartState = {
  cart: listing[];
  clientSecret: string;
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

const apiUrl: string = "http://localhost:8080/api/payments"

export const startPurchase = createAsyncThunk<StartPurchaseResponse, PurchaseInfo, {rejectValue: string}>(
  "cart/startPurchase",
  async (purchaseInfo) => {
    if (!purchaseInfo) throw new Error("no purchase info provided");
    const response = await fetch(apiUrl + "/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchaseInfo),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  }
);

export const getPurchase = createAsyncThunk<PaymentIntent, PurchaseLookup, {rejectValue: string}>(
  "cart/getPurchase", 
  async (purchaseInfo) => {
    if (!purchaseInfo) throw new Error("no purchase info provided");
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(purchaseInfo)
    });
    if (response.ok) {
      const data = await response.json();
      return data
    }
  }
)

export const updatePurchase = createAsyncThunk<PaymentIntent, UpdatePurchase, {rejectValue: string}>(
  "cart/updatePurchase",
  async (purchaseInfo) => {
    if (!purchaseInfo) throw new Error("no purchase info provided");
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(purchaseInfo)
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  }
)

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
  extraReducers(builder) {
    builder
      .addCase(startPurchase.pending, (state) => {
        state.status = "pending";
        state.error= "";
      })
      .addCase(startPurchase.fulfilled, (state, action) => {
        state.status = "fulfilled"
        state.clientSecret = action.payload.client_secret
      })
      .addCase(startPurchase.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(getPurchase.pending, (state) => {
        state.status = "pending";
        state.error= "";
      })
      .addCase(getPurchase.fulfilled, (state, action) => {
        state.status = "fulfilled"
        state.clientSecret = action.payload.client_secret ?? ""
        state.amount = action.payload.amount
      })
      .addCase(getPurchase.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(updatePurchase.pending, (state) => {
        state.status = "pending";
        state.error= "";
      })
      .addCase(updatePurchase.fulfilled, (state, action) => {
        state.status = "fulfilled"
        state.clientSecret = action.payload.client_secret ?? ""
        state.amount = action.payload.amount
      })
      .addCase(updatePurchase.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });

  },
});

export const { addItem, removeItem, setItems } = cartSlice.actions;

export default cartSlice.reducer;
