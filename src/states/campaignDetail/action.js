import api from "../../utils/api";

const ActionType = {
    RECEIVE_CAMPAIGN_DETAIL: 'RECEIVE_CAMPAIGN_DETAIL',
    CLEAR_CAMPAIGN_DETAIL: 'CLEAR_CAMPAIGN_DETAIL'
}

function receiveCampaignDetailActionCreator(campaign) {
    return {
        type: ActionType.RECEIVE_CAMPAIGN_DETAIL,
        payload: {
            campaign
        }
    };
}

function clearCampaignDetailActionCreator() {
    return {
        type: ActionType.CLEAR_CAMPAIGN_DETAIL,
    };
}

function asyncReceiveDetailCampaign(campaignId) {
    return async (dispatch) => {
        dispatch(clearCampaignDetailActionCreator())
        try {
            const campaign = await api.getCampaignDetail(campaignId);
            dispatch(receiveCampaignDetailActionCreator(campaign));
        } catch (error) {
            alert(error.message);
        }
    }
}

export {
    ActionType,
    receiveCampaignDetailActionCreator,
    clearCampaignDetailActionCreator,
    asyncReceiveDetailCampaign
}