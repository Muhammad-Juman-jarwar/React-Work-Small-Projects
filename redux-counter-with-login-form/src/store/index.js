import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialCounterState = { counter: 0, showCounter: true, showError: false };

const counterSlice = createSlice({
    name:"counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
            if(action.payload === 0){
                state.showError = true;
            }
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const initialAuthState = { isAuthenticated : false, };

const authSlice = createSlice({
    name:'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        },
    },
});

const store = configureStore({
    reducer: {counter: counterSlice.reducer , auth: authSlice.reducer },
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;