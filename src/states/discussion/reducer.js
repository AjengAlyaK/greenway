import { ActionType } from "./action"

export const discussionReducer = (discussions = [], action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DISCUSSION:
            return [...action.payload.discussions];
        case ActionType.UP_VOTE:
            return discussions.map(discussion => {
                if (discussion.id === action.payload.upVote.id){
                    return {
                        ...discussion,
                        upVotesBy: action.payload.upVote.upVotesBy
                    };
                }
                return discussion;
            });
        default:
            return discussions;
    }
}