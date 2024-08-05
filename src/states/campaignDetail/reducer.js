import { ActionType } from "./action";

function campaignDetailReducer(campaign = null, action = {}){
    switch (action.type) {
        case ActionType.RECEIVE_CAMPAIGN_DETAIL:
            return action.payload.campaign;
        case ActionType.CLEAR_CAMPAIGN_DETAIL:
            return null;
        default:
            return campaign;
    }
}

export default campaignDetailReducer;