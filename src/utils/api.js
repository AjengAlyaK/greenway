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

    // campaign
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
        }
        const { data: { detailDestination } } = responseJson;
        return detailDestination;
    }

    async function commentOnDestination({ text, id }) {
        console.log('Sending Comment:', { text });
        const response = await _fetchWithAuth(`${BASE_URL}/destination/${id}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comment: text,
            }),
        });

        const responseJson = await response.json();
        const { status, message } = responseJson;

        if (status !== 'success') {
            throw new Error(message);
        };

        const { data: { comment } } = responseJson;

        return comment;
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
        console.log(token);
        return token;
    }

    async function getOwnProfile() {
        const response = await _fetchWithAuth(`${BASE_URL}/me`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if (status !== 'success') {
            throw new Error(message);
        }
        const { data: { user } } = responseJson;
        return user;
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
        login,
        getOwnProfile,
        register
    };
})();

export default api;