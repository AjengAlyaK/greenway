import api from "../../utils/api";

const ActionType = {
    RECEIVE_DESTINATIONS : 'RECEIVE_DESTINATIONS',
};

function receiveDestinationsActionCreator(destinations) {
    return {
        type: ActionType.RECEIVE_DESTINATIONS,
        payload: {
            destinations
        },
    }
}

function asyncReceiveDestinations() {
    return async (dispatch) => {
        try {
            const destinations = await api.destinations();
            dispatch(receiveDestinationsActionCreator(destinations));
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }
}

export {
    ActionType,
    receiveDestinationsActionCreator,
    asyncReceiveDestinations,
}