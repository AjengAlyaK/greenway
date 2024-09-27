import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DESTINATION_DETAIL: 'RECEIVE_DESTINATION_DETAIL',
    CLEAR_DESTINATION_DETAIL: 'CLEAR_DESTINATION_DETAIL'
};

export const receiveDestinationDetailActionCreator = (destination) => ({
    type: ActionType.RECEIVE_DESTINATION_DETAIL,
    payload: {
        destination
    }
});

export const clearDestinationDetailActionCreator = () => ({
    type: ActionType.CLEAR_DESTINATION_DETAIL
});

export const asyncReceiveDestinationDetail = (destinationId) => {
    return async (dispatch) => {
        dispatch(clearDestinationDetailActionCreator());
        try {
            const destination = await api.getDestinationDetail(destinationId);
            dispatch(receiveDestinationDetailActionCreator(destination));
        } catch (error) {
            alert(error.message);
        }
    }
};