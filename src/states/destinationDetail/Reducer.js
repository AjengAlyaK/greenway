import { ActionType } from "./Action"

const initialState = {
    id: null,
    name: "",
    location: "",
    photo: "",
    description: "",
    comments: [],
};

export const destinationDetailReducer = (destination = initialState, action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DESTINATION_DETAIL:
            return action.payload?.destination || destination;
        case ActionType.CLEAR_DESTINATION_DETAIL:
            return initialState;
        case ActionType.ADD_COMMENT: 
            return {
                ...destination,
                comments: [...(destination?.comments || []), action.payload.comment],
            };
        case ActionType.DELETE_COMMENT:
            return {
                ...destination,
                comments: destination.comments.filter(comment => comment.id !== action.payload.commentId && comment.IdDestination !== action.payload.destinationId)
            }
        default:
            return destination;
    }
}