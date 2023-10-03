import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

import { Box, Button, ButtonGroup } from '@mui/material';
import BackButton from '../../components/BackButton';

import { logout } from '../../store/authSlice';

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

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout(info, navigate));
    };

    return (
        <Box>
            <h2>Logout</h2>
            <p>Are you sure you want to proceed?</p>
            <ButtonGroup>
                <Button variant="outlined" onClick={(e) => handleLogout(e)}>Yes</Button>
                <BackButton />
            </ButtonGroup>
        </Box>
    );
};

export default LogoutPage;
