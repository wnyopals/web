import { createSlice } from "@reduxjs/toolkit";

export type authState = {
    token: string;
    user: {
        id?: number;
        email?: string;
    }
}

const initialState: authState = {
    token: "",
    user: {}
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
})

export const { setAuthToken, setUser } = authSlice.actions;

export default authSlice.reducer;