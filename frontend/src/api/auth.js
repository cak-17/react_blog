import axios from "axios"

let API_HOST_ADDRESS = import.meta.env.VITE_API_HOST_URL

const axiosInstance = axios.create({
    baseURL: "api",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFTOKEN',
})

class AuthAPI {
    constructor() {
        this.axios =  axiosInstance
        this.endpoint = "/auth"
    }

    // Login
    login = async (credentials, message) => {
        try {
            const response = await this.axios.post(
                `${this.endpoint}/login/`,
                credentials,
            )
            message(`${credentials.username} has logged in!`)
            return response.data
        } catch (error) { this.handleApiError(error.message) }
    }

    logout = async () => {
        try {
            const response = await this.axios.get(`${this.endpoint}/logout/`)
            return response.data
        } catch (error) { this.handleApiError(error.message)}
    }

    setCsrf = async () => {
        await this.axios.get('/core/set-token/');
    }


    // Default API error handler
    handleApiError(error) {
        console.error(`API Error in ${this.endpoint}:`, error);
        throw error;
    }

}



export default AuthAPI