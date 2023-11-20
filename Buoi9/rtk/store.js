import { configureStore } from "@reduxjs/toolkit";
import CalculateSlice from "./CalculateSlice";


const store = configureStore({
    reducer: {
        calculator: CalculateSlice
    }
})

export default store