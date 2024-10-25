import api from "../../utils/api";

export const ActionType = {
    RECEIVE_PROFILE: 'RECEIVE_PROFILE'
};

export const receiveProfileActionCreator = (profile) => ({
    type: ActionType.RECEIVE_PROFILE,
    payload: {
        profile
    }
});

export function asyncGetOwnProfile() {
    return async (dispatch) => {
        try {
            const profile = await api.getOwnProfile();
            dispatch(receiveProfileActionCreator(profile));
            console.log('dari act', profile)
        } catch (error) {
            console.log('Error fetching:', error);
        };
    };
};