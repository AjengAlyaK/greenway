import { ActionType } from "./action";

function destinationsReducer(destinations = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_DESTINATIONS:
            return [...action.payload.destinations]
        default:
            return destinations;
    }
}

export default destinationsReducer;