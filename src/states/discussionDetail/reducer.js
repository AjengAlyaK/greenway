import { ActionType } from '../destinationDetail/Action';

// const initialState = {
//     discussion: null,
// };

export const discussionDetailReducer = (state = null, action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DISCUSSION_DETAIL:
            return {
                ...state,
                discussion: action.payload.discussion,
            };
        case ActionType.CLEAR_DESTINATION_DETAIL:
            return {
                ...state,
                discussion: null
            };
        default:
            return state
    }
}

export default discussionDetailReducer;
