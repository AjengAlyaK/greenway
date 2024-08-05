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

    return {
        campaigns,
        getCampaignDetail,
        reviews
    };
})();

export default api;