import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'https://qqss-admin.herokuapp.com/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    },
    withCredentials: true
});

export default ApiClient;