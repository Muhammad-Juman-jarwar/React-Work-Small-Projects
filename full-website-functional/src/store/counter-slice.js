import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counterValue: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        incrementHandler(state){
            state.counterValue++;
        },
        decrementHandler(state){
            state.counterValue--;
        },
        increaseHandler(state, action){
            state.counterValue = state.counterValue + action.payload;
        },
        toggleHandler(state){
            state.showCounter = !state.showCounter;
        },
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice;