import api from "../../utils/api";

const ActionType = {
    RECEIVE_ARTICLES: 'RECEIVE_ARTICLES',
};

function receiveArticlesActionCreator(articles) {
    return {
        type: ActionType.RECEIVE_ARTICLES,
        payload: {
            articles,
        }
    }
}

function asyncReceiveArticles() {
    return async (dispatch) => {
        try {
            const articles = await api.articles();
            dispatch(receiveArticlesActionCreator(articles));
            console.log(articles)
        } catch (error) {
            console.error('Error fetching:', error);
        }
    }
}

export {
    ActionType,
    receiveArticlesActionCreator,
    asyncReceiveArticles
}