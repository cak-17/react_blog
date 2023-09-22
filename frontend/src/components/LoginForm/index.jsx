/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login, selectAuth } from '../../store/authSlice';
import { useSnackbar } from 'notistack';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const isAuthenticated = useSelector(selectAuth);

    if (isAuthenticated) {
        navigate('/');
    }

    const info = (content) => {
        enqueueSnackbar(content, 'success');
    };

    const handleSubmit = (values) => {
        dispatch(login(values, info, navigate));
    };

    return (
        0
    );
};

export default LoginForm;
