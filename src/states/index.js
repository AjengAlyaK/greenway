import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./campaign/Reducer";
import reviewsReducer from "./review/Reducer";
import campaignDetailReducer from "./campaignDetail/reducer";
import articlesReducer from "./article/reducer";
import destinationsReducer from "./destination/reducer";
import authReducer from "./authUser/reducer";
import registerReducer from "./register/reducer";

const store = configureStore({
    reducer: {
        authUser: authReducer,
        register: registerReducer,
        campaigns: campaignsReducer,
        campaign: campaignDetailReducer,
        reviews: reviewsReducer,
        articles: articlesReducer,
        destinations: destinationsReducer,
    }
});

export default store;