import { ActionType } from "./action";

function articlesReducer(articles = [], action = {}) {
    switch (action.type) {
        case ActionType.RECEIVE_ARTICLES:
            return [...action.payload.articles];
        default:
            return articles;
    }
}

export default articlesReducer;