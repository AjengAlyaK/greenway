// import api from "../../utils/api";

export const ActionType = {
    RECEIVE_DISCUSSION_DETAIL: 'RECEIVE_DISCUSSION_DETAIL',
    CLEAR_DETAIL_DESTIATION: 'CLEAR_DETAIL_DESTIATION',
};

export const receiveDiscussionDetailActionCreator = (discussion) => ({
    type: ActionType.RECEIVE_DISCUSSION_DETAIL,
    payload: {
        discussion
    }
});

export const clearDiscussionDetailActionCreator = () => ({
    type: ActionType.CLEAR_DETAIL_DESTIATION
});

// export const asyncReceiveDiscussionDetail = () => {
//     return async (dispatch) => {
//         const discussion = await api.
//     }
// };