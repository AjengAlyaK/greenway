import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION_DETAIL: 'RECEIVE_DISCUSSION_DETAIL',
    CLEAR_DISCUSSION_DETAIL: 'CLEAR_DISCUSSION_DETAIL',
    ADD_COMMENT_ON_DISCUSSION: 'ADD_COMMENT_ON_DISCUSSION',
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

export const addCommentOnDiscussionActionCreator = (comment) => ({
    type: ActionType.ADD_COMMENT_ON_DISCUSSION,
    payload: {
        comment
    }
});

export const asyncReceiveDiscussionDetail = (discussionId) => {
    return async (dispatch) => {
        dispatch(clearDiscussionDetailActionCreator());
        try {
            const discussion = await api.getDiscussionDetail(discussionId);
            dispatch(receiveDiscussionDetailActionCreator(discussion));
        } catch (error) {
            alert(error.message);
        };
    };
};

export const asyncAddCommentOnDiscussion = ({ text, id }) => {
    return async (dispatch) => {
        try {
            const comment = await api.addCommentOnDiscussion({ comment: text, discussionId: id });
            dispatch(addCommentOnDiscussionActionCreator(comment));
        } catch (error) {
            alert(error.message);
        }
    }
}