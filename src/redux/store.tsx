import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./features/addToCart";
import filteringReducer from './features/filtering'
export const store = configureStore({
    reducer: {
        cart: addToCartReducer,
        filtering: filteringReducer,
    },
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;