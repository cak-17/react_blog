import axios from 'axios';

let API_HOST_ADDRESS = import.meta.env.VITE_API_HOST_URL;

if (API_HOST_ADDRESS === undefined) {
    API_HOST_ADDRESS = 'http://localhost:8000/api';
}

const axiosInstance = axios.create({
    // baseURL: `${API_HOST_ADDRESS}`,
    baseURL: 'api',
    headers: {
        'Content-type': 'application/json',
    },
    withCredentials: true,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFTOKEN',
});

export default axiosInstance;
