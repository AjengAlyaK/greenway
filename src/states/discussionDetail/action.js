import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION_DETAIL: 'RECEIVE_DISCUSSION_DETAIL',
    CLEAR_DISCUSSION_DETAIL: 'CLEAR_DISCUSSION_DETAIL',
    ADD_COMMENT_ON_DISCUSSION: 'ADD_COMMENT_ON_DISCUSSION',
    UP_VOTE_COMMENT_ON_DISCUSSION: 'UP_VOTE_COMMENT_ON_DISCUSSION',
    DOWN_VOTE_COMMENT_ON_DISCUSSION: 'DOWN_VOTE_COMMENT_ON_DISCUSSION',
    NETRAL_VOTE_COMMENT_ON_DISCUSSION: 'NETRAL_VOTE_COMMENT_ON_DISCUSSION',
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

export const UpVoteCommentOnDiscussionActionCreator = (upVote) => ({
    type: ActionType.UP_VOTE_COMMENT_ON_DISCUSSION,
    payload: {
        upVote
    }
});

export const DownVoteCommentOnDiscussionActionCreator = (downVote) => ({
    type: ActionType.DOWN_VOTE_COMMENT_ON_DISCUSSION,
    payload: {
        downVote
    }
});

export const NetralVoteCommentOnDiscussionActionCreator = (netralVote) => ({
    type: ActionType.NETRAL_VOTE_COMMENT_ON_DISCUSSION,
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

export function asyncUpVoteCommentOnDiscussion({ discussionId, commentId }) {
    return async (dispatch) => {
        try {
            const upVote = await api.upVoteCommentOnDiscussion({ discussionId, commentId });
            dispatch(UpVoteCommentOnDiscussionActionCreator(upVote))
        } catch (error) {
            console.log('Error fetching:', error)
        };
    };
};

export function asyncDownVoteCommentOnDiscussion({ discussionId, commentId }) {
    return async (dispatch) => {
        try {
            const downVote = await api.downVoteCommentOnDiscussion({ discussionId, commentId });
            dispatch(DownVoteCommentOnDiscussionActionCreator({ downVote }));
        } catch (error) {
            console.log('Error fetching:', error);
        }
    }
};

export function asyncNetralVoteCommentOnDiscussion({ discussionId, commentId }) {
    return async (dispatch) => {
        try {
            const netralVote = await api.netralVoteCommentOnDiscussion({ discussionId, commentId });
            dispatch(NetralVoteCommentOnDiscussionActionCreator(netralVote));
        } catch (error) {
            console.log('Error fetching:', error);
        };
    };
};