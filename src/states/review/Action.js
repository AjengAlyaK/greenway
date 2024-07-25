import api from "../../utils/api";

const ActionType = {
    RECEIVE_REVIEWS: 'RECEIVE_REVIEWS'
};

function receiveReviewsActionCreator(reviews) {
    return {
        type: ActionType.RECEIVE_REVIEWS,
        payload: {
            reviews
        }
    }
};

function asyncReceiveReviews() {
    return async (dispatch) => {
        try {
            const reviews = await api.reviews();
            // console.log(reviews)
            dispatch(receiveReviewsActionCreator(reviews));
        } catch (error) {
            console.log('Error fetching:', error);
        }
    }
}

export {
    ActionType,
    receiveReviewsActionCreator,
    asyncReceiveReviews
}