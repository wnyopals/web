import {configureStore} from "@reduxjs/toolkit"
import { listingsApi } from "./features/apiSlice"
import { authSlice } from "./auth"

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [listingsApi.reducerPath]: listingsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listingsApi.middleware)
})