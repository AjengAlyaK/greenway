import { ActionType } from "./Action"

export const destinationDetailReducer = (destination = null, action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DESTINATION_DETAIL:
            return action.payload?.destination || destination;
        case ActionType.CLEAR_DESTINATION_DETAIL:
            return null;
        default:
            return destination;
    }
}