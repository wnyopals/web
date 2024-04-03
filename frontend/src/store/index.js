import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

//import your features here

export const store = configureStore({
    reducer: {
        //[yourFeature.reducerPath] = yourFeature.reducer,
    },
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware().concat(/*youFeature.middleware*/),
    // }
})