import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION: 'RECEIVE_DISCUSSION',
    UP_VOTE: 'UP_VOTE',
    DOWN_VOTE: 'DOWN_VOTE',
    NETRAL_VOTE: 'NETRAL_VOTE',
    ADD_DISCUSSION: 'ADD_DISCUSSION',
};

export const receiveDiscussionActionCreator = (discussions) => ({
    type: ActionType.RECEIVE_DISCUSSION,
    payload: {
        discussions
    },
});

export const addDiscussionActionCreator = (discussion) => ({
    type: ActionType.ADD_DISCUSSION,
    payload: {
        discussion
    },
});

export const upVoteActionCreator = (upVote) => ({
    type: ActionType.UP_VOTE,
    payload: {
        upVote
    },
});

export const downVoteActionCreator = (downVote) => ({
    type: ActionType.DOWN_VOTE,
    payload: {
        downVote
    },
});

export const netralActionCreator = (netralVote) => ({
    type: ActionType.NETRAL_VOTE,
    payload: {
        netralVote
    },
});

export function asyncReceiveDiscussions() {
    return async (dispatch) => {
        try {
            const discussions = await api.discussions();
            dispatch(receiveDiscussionActionCreator(discussions));
        } catch (error) {
            console.log('Error fetching:', error)
        };
    };
};

export function asyncAddDiscussion({ title, category, body }) {
    return async (dispatch) => {
        try {
            const discussion = await api.addDiscussion({ title, category, body });
            dispatch(addDiscussionActionCreator(discussion));
        } catch (error) {
            console.log('Error fetching:', error);
        };
    };
};

export function asyncUpVote({ discussionId }) {
    return async (dispatch) => {
        try {
            const upVote = await api.upVoteDiscussion({ discussionId });
            dispatch(upVoteActionCreator(upVote))
        } catch (error) {
            console.log('Error fetching:', error)
        };
    };
};

export function asyncDownVote({ discussionId }) {
    return async (dispatch) => {
        try {
            const downVote = await api.downVoteDiscussion({ discussionId });
            dispatch(downVoteActionCreator({ downVote }));
        } catch (error) {
            console.log('Error fetching:', error);
        }
    }
};

export function asyncNetralVote({ discussionId }) {
    return async (dispatch) => {
        try {
            const netralVote = await api.netralVoteDiscussion({ discussionId });
            dispatch(netralActionCreator(netralVote));
        } catch (error) {
            console.log('Error fetching:', error);
        };
    };
};
