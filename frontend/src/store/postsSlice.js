import { createSlice } from "@reduxjs/toolkit";
import PostsAPI from "../api/api";
import { setMenu } from "./mainSlice";

const API = new PostsAPI()

const initialState = {
    posts: [],
    loading: false,
    error: null
}

export const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        postsRequest: state => { 
            state.loading = true 
        },
        postsFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        // GET ALL
        fetchPostsSuccess: (state, action) => { 
            state.loading = false 
            state.posts = action.payload
        },
        // POST
        createPostSuccess: (state, action) => { 
            state.posts.push(action.payload)
            state.loading = false
        },
        // DELETE
        deletePostSuccess: (state, action) => {
            console.log(state.posts.filter(post => post.id != action.payload))
            state.posts = state.posts.filter(post => post.id != action.payload)
            state.loading = false
        }
    }
})

export const { 
    postsRequest,
    postsFailure,
    fetchPostsSuccess,
    createPostSuccess,
    deletePostSuccess
} = postsSlice.actions

export const fetchPosts =  () => {
    return async (dispatch)  => {
        dispatch(postsRequest())
        await API.getAll()
            .then(data => {
                dispatch(fetchPostsSuccess(data))
            })
            .catch(error => dispatch(postsFailure(error)))
    }
}
export const createPost = (postData, message) => {
    return async (dispatch) => {
        dispatch(postsRequest())
        await API.createPost(postData, message)
            .then(data => { 
                console.log
                dispatch(createPostSuccess(data))
                dispatch(setMenu(1))
            })
            .catch(error => dispatch(postsFailure(error.message)))
    }
}
export const deletePost = (id, message) => {
    return async (dispatch) => {
        dispatch(postsRequest())
        await API.deletePost(id, message)
            .then(data => { 
                console.log(data)
                dispatch(deletePostSuccess(id)) 
            })
            .catch(error => { dispatch(postsFailure(error.message)) })
    }
}

export const selectPosts = state => state.posts.posts
export const selectIsLoading = state => state.posts.loading

export default postsSlice.reducer