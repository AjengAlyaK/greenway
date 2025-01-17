import api from "../../utils/api";

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser,
        },
    };
}

function unsetAuthUserActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            authUser: null,
        },
    };
}

function asyncSetAuthUser({ email, password }) {
    return async (dispatch) => {
        // two condition if there is already exist token and if not
        try {
            const token = await api.login({email, password});
            // console.log(token);
            api.putAccessToken(token);
            const authUser = await api.getOwnProfile();
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.message);
            console.log(error.message)
        }
    };
}

// function asyncInitializeAuthUser() {
//     return async (dispatch) => {
//         const token = api.getAccessToken(); // Get token from localStorage
//         if (token) {
//             try {
//                 const authUser = await api.getOwnProfile(); // Fetch user data
//                 dispatch(setAuthUserActionCreator(authUser));
//             } catch (error) {
//                 console.error("Failed to fetch user:", error);
//                 api.putAccessToken(''); // Clear invalid token
//             }
//         }
//     };
// }

function asyncUnsetAuthUser() {
    return (dispatch) => {
        dispatch(unsetAuthUserActionCreator());
        api.putAccessToken('');
    }
}

export {
    ActionType,
    setAuthUserActionCreator,
    unsetAuthUserActionCreator,
    asyncSetAuthUser,
    // asyncInitializeAuthUser,
    asyncUnsetAuthUser
}