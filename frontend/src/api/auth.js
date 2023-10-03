import axiosInstance from '.';

class Auth {
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
            this.handleApiError(error);
        }
    };

    logout = async () => {
        try {
            const response = await this.axios.get('auth/logout/');
            return response.data;
        } catch (error) {
            this.handleApiError(error);
        }
    };

    setCsrf = async () => {
        await this.axios.get('core/set-token/');
    };

    // Default API error handler
    handleApiError(error) {
        console.error(`API Error in ${this.endpoint}:`, error.message);
        throw error;
    }
}

const AuthAPI = new Auth();
export default AuthAPI;
