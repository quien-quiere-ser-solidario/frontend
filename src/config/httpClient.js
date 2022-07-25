import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'https://qqss-admin.herokuapp.com/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true
});

export default ApiClient;