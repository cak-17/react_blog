/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import AuthAPI from '../api/auth';

const apiInstance = new AuthAPI();

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        isAuth: false,
        loading: false,
    },
    reducers: {
        authRequest: (state) => {
            state.loading = true;
        },
        authLoginSuccess: (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.loading = false;
        },
        authFailure: (state) => {
            state.loading = false;
        },
        authLogoutSuccess: (state) => {
            state.user = {};
            state.isAuth = false;
            state.loading = false;
        },
    },
});

export const {
    authRequest,
    authLoginSuccess,
    authFailure,
    authLogoutSuccess,
} = authSlice.actions;

export const login = (credentials, message, redirectTo) => async (dispatch) => {
    dispatch(authRequest());
    await apiInstance.setCsrf()
        .then(
            await apiInstance.login(credentials)
                .then((data) => {
                    dispatch(authLoginSuccess(data));
                    message(`Hello ${credentials.username}, your login was successful.`);
                    redirectTo('/');
                })
                .catch((error) => {
                    dispatch(authFailure());
                    message(`Something went wrong:\n ${error.message}`);
                }),
        );
};

export const logout = (message, redirectTo) => async (dispatch) => {
    dispatch(authRequest());
    await apiInstance.logout()
        // eslint-disable-next-line no-unused-vars
        .then((_data) => {
            dispatch(authLogoutSuccess());
            message();
            redirectTo('/');
        })
        .catch((error) => dispatch(authFailure(error)));
};
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectAuth = (state) => state.auth.isAuth;
export default authSlice.reducer;
