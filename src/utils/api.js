const api = (() => {
    const BASE_URL = 'https://restapi-greenway.vercel.app';

    function getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    async function _fetchWithAuth(url, options = {}) {
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${getAccessToken()}`,
            },
        });
    }

    function putAccessToken(token) {
        localStorage.setItem('accessToken', token)
    }

    async function campaigns() {
        const response = await fetch(`${BASE_URL}/campaigns`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        }
        const { data: { campaigns } } = responseJson;
        return campaigns;
    }

    async function getCampaignDetail(id) {
        const response = await fetch(`${BASE_URL}/campaign/${id}`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        }
        const { data: { campaign } } = responseJson;
        return campaign;
    }

    async function reviews() {
        const response = await fetch(`${BASE_URL}/reviews`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        }
        const { data: { reviews } } = responseJson;
        return reviews;
    }

    async function articles() {
        const response = await fetch(`${BASE_URL}/articles`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        }
        const { data: { articles } } = responseJson;
        return articles;
    }

    async function destinations() {
        const response = await fetch(`${BASE_URL}/destinations`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        }
        const { data } = responseJson;
        return data;
    }

    async function getDestinationDetail(id) {
        const response = await fetch(`${BASE_URL}/destination/${id}`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data: { detailDestination } } = responseJson;
        return detailDestination;
    }

    async function commentOnDestination({ text, id }) {
        const response = await _fetchWithAuth(`${BASE_URL}/destination/${id}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment: text,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const responseJson = await response.json();

        const { status, message, data } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        return data.comment;
    }

    async function login({ email, password }) {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        }
        const { data: { token } } = responseJson;
        return token;
    }

    async function getOwnProfile() {
        const response = await _fetchWithAuth(`${BASE_URL}/me`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data } = responseJson;
        return data;
    }

    async function register({ name, email, password }) {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        }

        const { data: { user } } = responseJson;
        return user;
    }

    async function discussions() {
        const response = await fetch(`${BASE_URL}/discussions`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        }
        const { data: { discussions } } = responseJson;
        return discussions;
    }

    async function addDiscussion({ title, category, body }) {
        const request = await _fetchWithAuth(`${BASE_URL}/discussion`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                category,
                body
            }),
        });

        const responseJson = request.json();
        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        };

        const { data: { discussion } } = responseJson;
        return discussion;
    }

    async function getDiscussionDetail(id) {
        const response = await fetch(`${BASE_URL}/discussion/${id}`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data: { detailDiscussion } } = responseJson;
        return detailDiscussion;
    }

    async function upVoteDiscussion({ discussionId }) {
        const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/up-votes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data: { vote } } = responseJson;
        return vote;
    }

    async function downVoteDiscussion({ discussionId }) {
        const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/down-votes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data: { vote } } = responseJson;
        return vote;
    }

    async function netralVoteDiscussion({ discussionId }) {
        const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/netral-votes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data: { vote } } = responseJson;
        return vote;
    }

    async function addCommentOnDiscussion({ text, id }) {
        const request = await _fetchWithAuth(`${BASE_URL}/discussion/${id}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment: text
            }),
        });

        const responseJson = await request.json();
        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        };

        const { data: { comment } } = responseJson;
        return comment;
    }

    async function upVoteCommentOnDiscussion({ discussionId, commentId }) {
        const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/comment/${commentId}/up-votes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data: { vote } } = responseJson;
        return vote;
    }

    async function downVoteCommentOnDiscussion({ discussionId, commentId }) {
        const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/comment/${commentId}/down-votes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data: { vote } } = responseJson;
        return vote;
    }

    async function netralVoteCommentOnDiscussion({ discussionId, commentId }) {
        const response = await _fetchWithAuth(`${BASE_URL}/discussion/${discussionId}/comment/${commentId}/netral-votes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        };
        const { data: { vote } } = responseJson;
        return vote;
    }
    
    return {
        getAccessToken,
        _fetchWithAuth,
        putAccessToken,
        campaigns,
        getCampaignDetail,
        reviews,
        articles,
        destinations,
        getDestinationDetail,
        commentOnDestination,
        discussions,
        addDiscussion,
        getDiscussionDetail,
        upVoteDiscussion,
        downVoteDiscussion,
        netralVoteDiscussion,
        addCommentOnDiscussion,
        login,
        getOwnProfile,
        register,
        upVoteCommentOnDiscussion,
        downVoteCommentOnDiscussion,
        netralVoteCommentOnDiscussion
    };
})();

export default api;