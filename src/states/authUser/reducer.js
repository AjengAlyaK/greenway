import { ActionType } from "./action";

const initialState = {
    authUser: null,
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case ActionType.SET_AUTH_USER:
            return {
                ...state,
                authUser: action.payload.authUser,
            };
        case ActionType.UNSET_AUTH_USER:
            return {
                ...state,
                authUser: null,
            };
        default:
            return state;
    }
}

export default authReducer;
