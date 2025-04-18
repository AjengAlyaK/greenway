import { ActionType } from "./action";

export const discussionReducer = (discussions = [], action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DISCUSSION:
            return [...action.payload.discussions];
        case ActionType.ADD_DISCUSSION:
            return [action.payload.discussion, ...discussions];
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
        case ActionType.DOWN_VOTE:
            return discussions.map(discussion => {
                if(discussion.id === action.payload.downVote.id) {
                    return {
                        ...discussion,
                        downVotesBy: action.payload.downVote.downVotesBy
                    };
                }
                return discussion;
            });
        case ActionType.NETRAL_VOTE:
            return discussions.map(discussion => {
                if (discussion.id === action.payload.netralVote.id) {
                    return {
                        ...discussion,
                        upVotesBy: discussion.upVotesBy.filter(idUser => idUser !== action.payload.netralVote.idUser),
                        downVotesBy: discussion.downVotesBy.filter(idUser => idUser !== action.payload.netralVote.idUser)
                    };
                }
                return discussion;
            });
        case ActionType.DELETE_DISCUSSION:
            return discussions.filter(discussion => discussion.id !== action.payload.discussionId);
        default:
            return discussions;
    }
}