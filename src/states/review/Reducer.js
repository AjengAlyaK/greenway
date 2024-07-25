import { ActionType } from "./Action";

function reviewsReducer(reviews=[], action={}) {
    switch (action.type) {
        case ActionType.RECEIVE_REVIEWS:
            return [...action.payload.reviews];
        default:
            return reviews;
    }
}

export default reviewsReducer;

