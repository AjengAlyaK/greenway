import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DESTINATION_DETAIL: 'RECEIVE_DESTINATION_DETAIL',
    CLEAR_DESTINATION_DETAIL: 'CLEAR_DESTINATION_DETAIL',
    ADD_COMMENT: 'ADD_COMMENT',
    DELETE_COMMENT: 'DELETE_COMMENT'
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

export const addCommentOnDestinationActionCreator = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        comment
    }
});

export const deleteCommentOnDestinationActionCreator = (destinationId, commentId) => ({
    type: ActionType.DELETE_COMMENT,
    payload: {
        destinationId,
        commentId
    }
})

export const asyncReceiveDestinationDetail = (destinationId) => {
    return async (dispatch) => {
        dispatch(clearDestinationDetailActionCreator());
        try {
            const destination = await api.getDestinationDetail(destinationId);
            dispatch(receiveDestinationDetailActionCreator(destination));
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
};

export const asyncAddCommentOnDestination = ({ text, id }) => {
    return async (dispatch) => {
        try {
            const newComment = await api.commentOnDestination({ text, id });
            dispatch(addCommentOnDestinationActionCreator(newComment));
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const asyncDeleteCommentOnDestination = ({ destinationId, commentId }) => {
    return async (dispatch) => {
        try {
            const result = await api.deleteCommentOnDestination({destinationId, commentId});
            dispatch(deleteCommentOnDestinationActionCreator(result.destinationId, result.commentId))
        } catch (error) {
            alert(error.message)
        }
    }
};