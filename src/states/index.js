import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./campaign/Reducer";

const store = configureStore({
    reducer: {
        campaigns: campaignsReducer,
    }
});

export default store;