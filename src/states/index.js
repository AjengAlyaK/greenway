import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./campaign/Reducer";
import reviewsReducer from "./review/Reducer";

const store = configureStore({
    reducer: {
        campaigns: campaignsReducer,
        reviews: reviewsReducer,
    }
});

export default store;