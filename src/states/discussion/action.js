import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION: 'RECEIVE_DISCUSSION',
};

export const receiveDiscussionActionCreator = (discussions) => ({
    type: ActionType.RECEIVE_DISCUSSION,
    payload: {
        discussions
    },
});

export function asyncReceiveDiscussions() {
    return async (dispatch) => {
        try {
            const discussions = await api.discussions();
            dispatch(receiveDiscussionActionCreator(discussions));
        } catch (error) {
            console.log('Error fetching:', error)
        }
    };
}
