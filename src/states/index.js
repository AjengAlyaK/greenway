import { configureStore } from "@reduxjs/toolkit";
import campaignsReducer from "./campaign/Reducer";
import reviewsReducer from "./review/Reducer";
import campaignDetailReducer from "./campaignDetail/reducer";
import articlesReducer from "./article/reducer";
import destinationsReducer from "./destination/reducer";
import authReducer from "./authUser/reducer";
import registerReducer from "./register/reducer";
import { destinationDetailReducer } from "./destinationDetail/Reducer";
import { discussionReducer } from "./discussion/reducer";
import { getOwnProfileReducer } from "./getOwnProfile/reducer";
import { discussionDetailReducer } from "./discussionDetail/reducer";

const store = configureStore({
    reducer: {
        authUser: authReducer,
        register: registerReducer,
        profile: getOwnProfileReducer,
        campaigns: campaignsReducer,
        campaign: campaignDetailReducer,
        reviews: reviewsReducer,
        articles: articlesReducer,
        destinations: destinationsReducer,
        destination: destinationDetailReducer,
        discussions: discussionReducer,
        discussion: discussionDetailReducer,
    }
});

export default store;