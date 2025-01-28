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
        default:
            return destination;
    }
}