import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'http://qqss-admin.herokuapp.com/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true
});

export default ApiClient;