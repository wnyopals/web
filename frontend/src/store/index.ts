import {configureStore} from "@reduxjs/toolkit"
import { listingsApi } from "./features/apiSlice"
import { authSlice } from "./auth"
import { cartSlice } from "./cart"

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        [listingsApi.reducerPath]: listingsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listingsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
