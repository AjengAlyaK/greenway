const api = (() => {
    const BASE_URL = 'https://restapi-greenway.vercel.app';

    async function campaigns() {
        const response = await fetch(`${BASE_URL}/campaigns`);
        const responseJson = await response.json();
        const { status, message } = responseJson;
        if(status !== 'success'){
            throw new Error(message);
        }
        const {data: {campaigns}} = responseJson;
        return campaigns;
    }

    return {
        campaigns
    };
})();

export default api;