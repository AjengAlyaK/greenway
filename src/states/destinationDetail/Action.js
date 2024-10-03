import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DESTINATION_DETAIL: 'RECEIVE_DESTINATION_DETAIL',
    CLEAR_DESTINATION_DETAIL: 'CLEAR_DESTINATION_DETAIL',
    ADD_COMMENT: 'ADD_COMMENT',
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

export const addCommentOnDestination = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        comment
    }
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

export const asyncAddCommentOnDestination = ({ text, id }) => {
    return async (dispatch) => {
        try {
            const newComment = await api.commentOnDestination({ text, id });
            dispatch(addCommentOnDestination(newComment));
        } catch (error) {
            alert(error.message);
        }
    };
};