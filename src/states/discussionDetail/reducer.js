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
        case ActionType.DELETE_COMMENT_ON_DISCUSSION:
            return {
                ...discussion,
                comments: discussion.comments.filter(comment => comment.id !== action.payload.commentId && comment.discussionId !== action.payload.discussionId)
            }
        case ActionType.UP_VOTE:
            return {
                ...discussion,
                comments: discussion.comments.map(comment => {
                    if (comment.discussionId === action.payload.upVote.discussionId) {
                        return {
                            ...comment,
                            upVotesBy: [...comment.upVotesBy, action.payload.upVote.userId],
                        }
                    }
                    return comment
                })
            };
        case ActionType.DOWN_VOTE:
            return {
                ...discussion,
                comments: discussion.comments.map(comment => {
                    if (comment.discussionId === action.payload.downVote.discussionId) {
                        return {
                            ...comment,
                            downVotesBy: [...comment.downVotesBy, action.payload.downVote.userId]
                        }
                    }
                    return comment;
                })
            }
        case ActionType.NETRAL_VOTE:
            return {
                ...discussion,
                comments: discussion.comments.map(comment => {
                    if (comment.discussionId === action.payload.netralVote.discussionId) {
                        return {
                            ...comment,
                            upVotesBy: comment.upVotesBy.filter(idUser => idUser !== action.payload.netralVote.idUser),
                            downVotesBy: comment.downVotesBy.filter(idUser => idUser !== action.payload.netralVote.idUser),
                        }
                    }
                    return comment;
                })
            }
        default:
            return discussion
    }
}