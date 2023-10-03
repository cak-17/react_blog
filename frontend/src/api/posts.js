import axiosInstance from '.';

class Posts {
    constructor() {
        this.axios = axiosInstance;
        this.endpoint = '/posts';
    }

    // Fetch Post from API
    getByID = async (id) => {
        console.log(`${this.endpoint}/${id}/`);
        try {
            const response = await this.axios.get(`${this.endpoint}/${id}/`);
            console.log(response.data);
            return response.data;
        } catch (error) { this.handleApiError(error); }
    };

    // Fetch all Posts from API
    getAll = async () => {
        try {
            const response = await this.axios.get(`${this.endpoint}/`);
            return response.data;
        } catch (error) { this.handleApiError(error); }
    };

    // Create new Post
    createPost = async (postData) => {
        try {
            const response = await this.axios.post(`${this.endpoint}/`, postData);
            return response.data;
        } catch (error) { this.handleApiError(error); }
    };

    // Delete Post by ID
    deletePost = async (id) => {
        try {
            const response = await this.axios.delete(`${this.endpoint}/${id}/`);
            return response.data;
        } catch (error) { this.handleApiError(error); }
    };

    // Default API error handler
    handleApiError(error) {
        console.error(`API Error in ${this.endpoint}:`, error);
        throw error;
    }
}

const PostsAPI = new Posts();

export default PostsAPI;
