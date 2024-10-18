import { ActionType } from "./action"

export const discussionReducer = (discussions = [], action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_DISCUSSION:
            return [...action.payload.discussions];
        default:
            return discussions;
    }
}