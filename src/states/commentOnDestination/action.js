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
