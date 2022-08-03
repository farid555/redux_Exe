import { configureStore } from "@reduxjs/toolkit";
import countrReducer from "../features/counter/counterSlice";

export default configureStore({
    reducer: {
        counter: countrReducer,
    },
});
