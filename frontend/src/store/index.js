import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "./postsSlice"
import mainReducer from "./mainSlice"


export default configureStore({
    reducer: {
        posts: postsReducer,
        main: mainReducer
    }
})