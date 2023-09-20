import axiosInstance from '.';

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
