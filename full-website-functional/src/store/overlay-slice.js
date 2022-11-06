import { createSlice } from "@reduxjs/toolkit";

const initialOverlayState = {showSignInForm: false , showSignUpForm: false};

const overlaySlice = createSlice({
    name: 'overlay',
    initialState: initialOverlayState,
    reducers: {
        signUp(state){
            state.showSignUpForm = !state.showSignUpForm;
            if(!state.showSignUpForm){
                state.showSignInForm = false;
            };
            
        },
        signIn(state){
            state.showSignInForm = !state.showSignInForm;
            if(!state.showSignInForm){
                state.showSignUpForm = false;
            }
        },
    },
});

export const overlayActions = overlaySlice.actions;

export default overlaySlice;