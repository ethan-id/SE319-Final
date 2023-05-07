import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from '../reducers/dataSlice';
import cartSliceReducer from "../reducers/cartSlice";

export const store = configureStore({
    reducer: {
        data: dataSliceReducer,
        cart: cartSliceReducer
    },
});
