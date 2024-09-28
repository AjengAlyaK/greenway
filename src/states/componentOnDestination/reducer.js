import { ActionType } from "./action"

export const commentOnDstination = (comment = [], action = {}) => {
    switch (action.type) {
        case ActionType.ADD_COMMENT:
            return [...comment, action.payload.comment]
        default:
            return comment
    };
};