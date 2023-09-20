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

class AuthAPI {
    constructor() {
        this.axios = axiosInstance;
        this.endpoint = '/core';
    }

    // Login
    login = async (credentials) => {
        try {
            const response = await this.axios.post(
                `${this.endpoint}/login/`,
                credentials,
            );
            return response.data;
        } catch (error) {
            this.handleApiError(error.message);
        }
    };

    logout = async () => {
        try {
            const response = await this.axios.get(`${this.endpoint}/logout/`);
            return response.data;
        } catch (error) {
            this.handleApiError(error.message);
        }
    };

    setCsrf = async () => {
        await this.axios.get('core/set-token/');
    };

    // Default API error handler
    handleApiError(error) {
        console.error(`API Error in ${this.endpoint}:`, error);
        throw error;
    }
}

export default AuthAPI;
