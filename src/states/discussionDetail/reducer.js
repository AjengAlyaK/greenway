import { ActionType } from "./action";

export const discussionDetailReducer = (discussion = null, action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DISCUSSION_DETAIL:
            return action.payload?.discussion || discussion;
        case ActionType.CLEAR_DISCUSSION_DETAIL:
            return null;
        case ActionType.ADD_COMMENT_ON_DISCUSSION:
            return {
                ...discussion,
                comments: [...(discussion?.comments || []), action.payload.comment],
            };
        default:
            return discussion
    }
}