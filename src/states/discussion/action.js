import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION: 'RECEIVE_DISCUSSION',
    UP_VOTE: 'UP_VOTE',
    DOWN_VOTE: 'DOWN_VOTE',
    NETRAL_VOTE: 'NETRAL_VOTE'
};

export const receiveDiscussionActionCreator = (discussions) => ({
    type: ActionType.RECEIVE_DISCUSSION,
    payload: {
        discussions
    },
});

export const upVoteActionCreator = (upVote) => ({
    type: ActionType.UP_VOTE,
    payload: {
        upVote
    }
});

export const downVoteActionCreator = (payload) => ({
    type: ActionType.DOWN_VOTE,
    payload
});

export const netralActionCreator = (payload) => ({
    type: ActionType.NETRAL_VOTE,
    payload
})

export function asyncReceiveDiscussions() {
    return async (dispatch) => {
        try {
            const discussions = await api.discussions();
            dispatch(receiveDiscussionActionCreator(discussions));
        } catch (error) {
            console.log('Error fetching:', error)
        }
    };
}

export function asyncUpVote({ discussionId }) {
    return async (dispatch) => {
        try {
            const upVote = await api.upVoteDiscussion({ discussionId });
            dispatch(upVoteActionCreator(upVote))
        } catch (error) {
            console.log('Error fetching:', error)
        }
    }
}