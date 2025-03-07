import { ActionType } from "./action";

const initialState = {
    id: "",
    owner: {
        id: "",
        name: "",
        photo: "",
    },
    createdAt: "",
    title: "",
    body: "",
    category: "",
    upVotesBy: [],
    downVotesBy: [],
    comments: [],
};

export const discussionDetailReducer = (discussion = initialState, action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DISCUSSION_DETAIL:
            return { ...discussion, ...action.payload.discussion };
        case ActionType.CLEAR_DISCUSSION_DETAIL:
            return initialState;
        case ActionType.ADD_COMMENT_ON_DISCUSSION:
            return {
                ...discussion,
                comments: [...(discussion?.comments || []), action.payload.comment],
            };
        case ActionType.UP_VOTE_COMMENT_ON_DISCUSSION:
            return {
                
            }
        default:
            return discussion
    }
}