import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION_DETAIL: 'RECEIVE_DISCUSSION_DETAIL',
    CLEAR_DETAIL_DESTIATION: 'CLEAR_DETAIL_DESTIATION',
};

export const receiveDiscussionDetailActionCreator = (discussion) => ({
    type: ActionType.RECEIVE_DISCUSSION_DETAIL,
    payload: {
        discussion
    }
});

export const clearDiscussionDetailActionCreator = () => ({
    type: ActionType.CLEAR_DETAIL_DESTIATION,
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