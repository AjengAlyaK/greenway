import api from "../../utils/api";

export const ActionType = {
    ADD_COMMENT: 'ADD_COMMENT',
};

export const addCommentOnDestination = (comment) => ({
    type: ActionType.ADD_COMMENT,
    payload: {
        comment
    }
});

export const asyncAddCommentOnDestination = ({ comment }) => {
    return async (dispatch) => {
        try {
            const response = await api.commentOnDestination({ comment });
            dispatch(addCommentOnDestination(response));
        } catch (error) {
            alert(error.message);
        }
    };
};
