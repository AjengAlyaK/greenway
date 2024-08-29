import { ActionType } from "./action";

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                error: null,
                loading: false,
            };
        case ActionType.REGISTER_USER_FAILURE:
            return {
                ...state,
                user: null,
                error: action.payload.error,
                loading: false,
            };
        default:
            return state;
    }
};

export default registerReducer;
