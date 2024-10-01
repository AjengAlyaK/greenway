import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./campaign/Reducer";
import reviewsReducer from "./review/Reducer";
import campaignDetailReducer from "./campaignDetail/reducer";
import articlesReducer from "./article/reducer";
import destinationsReducer from "./destination/reducer";
import authReducer from "./authUser/reducer";
import registerReducer from "./register/reducer";
import { destinationDetailReducer } from "./destinationDetail/Reducer";
import { commentOnDstination } from "./commentOnDestination/reducer";

const store = configureStore({
    reducer: {
        authUser: authReducer,
        register: registerReducer,
        campaigns: campaignsReducer,
        campaign: campaignDetailReducer,
        reviews: reviewsReducer,
        articles: articlesReducer,
        destinations: destinationsReducer,
        destination: destinationDetailReducer,
        commentOnDestination: commentOnDstination
    }
});

export default store;