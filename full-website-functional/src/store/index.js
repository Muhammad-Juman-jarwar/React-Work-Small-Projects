import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";
import overlaySlice from "./overlay-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    overlay: overlaySlice.reducer,
  },
});

export default store;
