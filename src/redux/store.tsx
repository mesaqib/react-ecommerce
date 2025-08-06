import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./features/addToCart";
export const store = configureStore({
    reducer: {
        cart: addToCartReducer,
    },
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;