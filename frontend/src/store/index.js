import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "./postsSlice"
import mainReducer from "./mainSlice"
import authReducer from "./authSlice"

export default configureStore({
    reducer: {
        posts: postsReducer,
        main: mainReducer,
        auth: authReducer
    }
})