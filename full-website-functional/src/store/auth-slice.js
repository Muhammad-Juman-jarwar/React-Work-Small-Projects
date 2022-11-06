import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers: {
        loginHandler(state){
            state.isAuthenticated = true;
        },
        logoutHandler(state){
            state.isAuthenticated = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice;