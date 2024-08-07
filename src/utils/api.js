const api = (() => {
    const BASE_URL = 'https://restapi-greenway.vercel.app';

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

    return {
        campaigns,
        getCampaignDetail,
        reviews,
        articles,
        destinations
    };
})();

export default api;