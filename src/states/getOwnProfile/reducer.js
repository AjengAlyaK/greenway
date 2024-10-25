import { ActionType } from "./action"

export const getOwnProfileReducer = (profile = {}, action = {}) => {
    switch (action.type) {
        case ActionType.RECEIVE_PROFILE:
            return action.payload.profile
        default:
            return profile
    }
}