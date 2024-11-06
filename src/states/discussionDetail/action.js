import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION_DETAIL: 'RECEIVE_DISCUSSION_DETAIL',
    CLEAR_DISCUSSION_DETAIL: 'CLEAR_DISCUSSION_DETAIL',
};

export const receiveDiscussionDetailActionCreator = (discussion) => ({
    type: ActionType.RECEIVE_DISCUSSION_DETAIL,
    payload: {
        discussion
    }
});

export const clearDiscussionDetailActionCreator = () => ({
    type: ActionType.CLEAR_DISCUSSION_DETAIL,
});

export const asyncReceiveDiscussionDetail = (discussionId) => {
    return async (dispatch) => {
        dispatch(clearDiscussionDetailActionCreator());
        try {
            const discussion = await api.getDiscussionDetail(discussionId);
            dispatch(receiveDiscussionDetailActionCreator(discussion));
        } catch (error) {
            alert(error.message)
        };
    };
};