import axiosInstance from '.';

class PostsAPI {
    constructor() {
        this.axios = axiosInstance;
        this.endpoint = '/posts';
    }

    // Fetch all Posts from API
    getAll = async () => {
        try {
            const response = await this.axios.get(`${this.endpoint}/`);
            return response.data;
        } catch (error) { this.handleApiError(error); }
    };

    // Create new Post
    createPost = async (data, message) => {
        try {
            const response = await this.axios.post(`${this.endpoint}/`, data);
            message(data.title);
            return response.data;
        } catch (error) { this.handleApiError(error); }
    };

    // Delete Post by ID
    deletePost = async (id, message) => {
        try {
            const response = await this.axios.delete(`${this.endpoint}/${id}`);
            message(id);
            return response.data;
        } catch (error) { this.handleApiError(error); }
    };

    // Default API error handler
    handleApiError(error) {
        console.error(`API Error in ${this.endpoint}:`, error);
        throw error;
    }
}

export default PostsAPI;
