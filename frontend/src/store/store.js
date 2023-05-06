import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from '../reducers/dataSlice';

export const store = configureStore({
    reducer: {
        data: dataSliceReducer
    },
});
