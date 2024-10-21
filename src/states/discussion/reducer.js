import { ActionType } from "./action";

export const discussionReducer = (discussions = [], action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DISCUSSION:
            return [...action.payload.discussions];
        case ActionType.UP_VOTE:
            return discussions.map(discussion => {
                if (discussion.id === action.payload.upVote.id) {
                    return {
                        ...discussion,
                        upVotesBy: action.payload.upVote.upVotesBy
                    };
                }
                return discussion;
            });
        case ActionType.NETRAL_VOTE:
            return discussions.map(discussion => {
                if (discussion.id === action.payload.netralVote.id) {
                    return {
                        ...discussion,
                        upVotesBy: discussion.upVotesBy.filter(userId => userId !== action.payload.netralVote.userId),
                        downVotesBy: discussion.downVotesBy.filter(userId => userId !== action.payload.netralVote.userId)
                    };
                }
                return discussion;
            });
        default:
            return discussions;
    }
}