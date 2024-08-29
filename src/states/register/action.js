import api from "../../utils/api";

const ActionType = {
    REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
    REGISTER_USER_FAILURE: 'REGISTER_USER_FAILURE',
};

function registerUserSuccess(user) {
    return {
        type: ActionType.REGISTER_USER_SUCCESS,
        payload: {
            user,
        },
    };
}

function registerUserFailure(error) {
    return {
        type: ActionType.REGISTER_USER_FAILURE,
        payload: {
            error,
        },
    };
}

function asyncRegisterUser({ name, email, password }) {
    return async (dispatch) => {
        // dispatch(showLoading());
        try {
            const user = await api.register({ name, email, password });
            dispatch(registerUserSuccess(user));
        } catch (error) {
            dispatch(registerUserFailure(error.message));
            // Optionally, handle error messages in the UI
        }
        // dispatch(hideLoading());
    };
}

export { ActionType, registerUserSuccess, registerUserFailure, asyncRegisterUser };