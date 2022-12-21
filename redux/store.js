import { configureStore } from "@reduxjs/toolkit";
import medicanSlice from "./medicanSlice";
export const store = configureStore({
    reducer: {
        medicanSlice
    }
});