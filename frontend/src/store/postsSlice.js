/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import PostsAPI from '../api/posts';

const initialState = {
    posts: [],
    count: 0,
    next: '',
    previous: '',
    loading: false,
    error: null,
    selectedPost: null,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsRequest: (state) => {
            state.loading = true;
        },
        postsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // GET
        fetchPostsSuccess: (state, action) => {
            state.loading = false;
            state.posts = action.payload.results;
            state.count = action.payload.count;
            state.previous = action.payload.previous;
            state.next = action.payload.next;
        },

        // GET {ID}
        fetchPostSuccess: (state, action) => {
            state.loading = false;
            console.log(`fetch post success ${action.payload}`)
            state.selectedPost = action.payload;
        },

        // POST
        createPostSuccess: (state, action) => {
            state.posts.push(action.payload);
            state.loading = false;
        },
        // DELETE
        deletePostSuccess: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
            state.loading = false;
        },
    },
});

export const {
    postsRequest,
    postsFailure,
    fetchPostsSuccess,
    fetchPostSuccess,
    createPostSuccess,
    deletePostSuccess,
} = postsSlice.actions;

export const fetchPost = (id) => async (dispatch) => {
    dispatch(postsRequest());
    await PostsAPI.getByID(id)
        .then((data) => {
            console.log(data)
            dispatch(fetchPostSuccess(data));
        })
        .catch((error) => dispatch(postsFailure(error.massage)));
};

export const fetchPosts = () => async (dispatch) => {
    dispatch(postsRequest());
    await PostsAPI.getAll()
        .then((data) => {
            dispatch(fetchPostsSuccess(data));
        })
        .catch((error) => dispatch(postsFailure(error.message)));
};
export const createPost = (postData, message, redirectTo) => async (dispatch) => {
    dispatch(postsRequest());
    await PostsAPI.createPost(postData)
        .then((data) => {
            dispatch(createPostSuccess(data));
            message();
            redirectTo(`/posts/${data.id}`);
        })
        .catch((error) => dispatch(postsFailure(error.message)));
};
export const deletePost = (id, message, redirectTo) => async (dispatch) => {
    dispatch(postsRequest());
    await PostsAPI.deletePost(id)
        .then((_data) => {
            console.log(_data);
            dispatch(deletePostSuccess(id));
            message();
            redirectTo('/posts');
        })
        .catch((error) => { dispatch(postsFailure(error.message)); });
};

export const selectPosts = (state) => state.posts.posts;
export const selectIsLoading = (state) => state.posts.loading;

export default postsSlice.reducer;
