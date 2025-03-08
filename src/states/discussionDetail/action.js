import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION_DETAIL: 'RECEIVE_DISCUSSION_DETAIL',
    CLEAR_DISCUSSION_DETAIL: 'CLEAR_DISCUSSION_DETAIL',
    ADD_COMMENT_ON_DISCUSSION: 'ADD_COMMENT_ON_DISCUSSION',
    UP_VOTE: 'UP_VOTE',
    DOWN_VOTE: 'DOWN_VOTE',
    NETRAL_VOTE: 'NETRAL_VOTE',
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

export const UpVoteActionCreator = (upVote) => ({
    type: ActionType.UP_VOTE,
    payload: {
        upVote
    }
});

export const DownVoteActionCreator = (downVote) => ({
    type: ActionType.DOWN_VOTE,
    payload: {
        downVote
    }
});

export const NetralVoteActionCreator = (netralVote) => ({
    type: ActionType.NETRAL_VOTE,
    payload: {
        netralVote
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
};

export function asyncUpVote({ discussionId, commentId }) {
    return async (dispatch) => {
        try {
            const upVote = await api.upVoteCommentOnDiscussion({ discussionId, commentId });
            dispatch(UpVoteActionCreator(upVote))
        } catch (error) {
            console.log('Error fetching:', error)
        };
    };
};

export function asyncDownVote({ discussionId, commentId }) {
    return async (dispatch) => {
        try {
            const downVote = await api.downVoteCommentOnDiscussion({ discussionId, commentId });
            dispatch(DownVoteActionCreator({ downVote }));
        } catch (error) {
            console.log('Error fetching:', error);
        }
    }
};

export function asyncNetralVote({ discussionId, commentId }) {
    return async (dispatch) => {
        try {
            const netralVote = await api.netralVoteCommentOnDiscussion({ discussionId, commentId });
            dispatch(NetralVoteActionCreator(netralVote));
        } catch (error) {
            console.log('Error fetching:', error);
        };
    };
};