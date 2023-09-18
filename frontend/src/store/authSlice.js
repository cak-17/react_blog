import { createSlice } from "@reduxjs/toolkit";
import AuthAPI from "../api/auth";

const apiInstance = new AuthAPI()

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        auth: null,
        loading: false,
        error: null
    },
    reducers: {
        authRequest: state => {
            state.loading = true
        },
        authLoginSuccess: (state, action) => {
            state.user = action.payload.user
            state.auth = action.payload.auth
            state.loading = false
        },
        authFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        authLogoutSuccess: (state) => {
            state.user = null
            state.auth = null
            state.loading = false
        },
    }
})

export const {
    authRequest,
    authLoginSuccess,
    authFailure,
    authLogoutSuccess
} = authSlice.actions

export const login = (credentials, message) => {
    return async dispatch => {
        dispatch(authRequest())
        await apiInstance.login(credentials, message)
            .then(data => {
                console.log(data)
                dispatch(authLoginSuccess(data))
            })
            .catch(error => dispatch(authFailure(error)))
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch(authRequest())
        await apiInstance.logout()
        .then(data => {
            console.log(data)
            dispatch(authLogoutSuccess())
        })
        .catch(error => dispatch(authFailure(error)))
    }
}
export const selectUser = state => state.auth.user
export const selectError = state => state.auth.error
export default authSlice.reducer