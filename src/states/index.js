import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./campaign/Reducer";
import reviewsReducer from "./review/Reducer";
import campaignDetailReducer from "./campaignDetail/reducer";
import articlesReducer from "./article/reducer";

const store = configureStore({
    reducer: {
        campaigns: campaignsReducer,
        campaign: campaignDetailReducer,
        reviews: reviewsReducer,
        articles: articlesReducer
    }
});

export default store;