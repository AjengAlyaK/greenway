import { ActionType } from "./Action";

function campaignsReducer(campaigns = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_CAMPAIGNS:
            return [...action.payload.campaigns];
        default:
            return campaigns;
    }
}

export default campaignsReducer;