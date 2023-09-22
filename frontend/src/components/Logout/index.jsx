import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import { logout } from '../../store/authSlice';
import BackButton from '../BackButton';
import { ConfirmationNumber } from '@mui/icons-material';

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const isAuthenticated = useSelector((state) => state.auth.isAuth);

    if (!isAuthenticated) {
        navigate('/');
    }

    const info = () => {
        enqueueSnackbar('You have logged out successfully', 'success');
    };

    const handleLogout = () => {
        dispatch(logout(info, navigate));
    };

    return (
        0
    );
};

export default LogoutPage;
