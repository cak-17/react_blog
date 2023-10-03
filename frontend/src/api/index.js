import axios from 'axios';

const API_HOST_ADDRESS = import.meta.env.VITE_API_HOST_URL;

const axiosInstance = axios.create({
    baseURL: `${API_HOST_ADDRESS}`,

    headers: {
        'Content-type': 'application/json',
    },

    withCredentials: true,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFTOKEN',
});

export default axiosInstance;
