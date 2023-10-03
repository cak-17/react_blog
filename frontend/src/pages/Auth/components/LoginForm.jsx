import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useSnackbar } from 'notistack';
import { Button, TextField } from '@mui/material';
import { login, selectAuth } from '../../../store/authSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isAuthenticated = useSelector(selectAuth);

    if (isAuthenticated) {
        navigate('/');
    }

    const info = (content) => {
        enqueueSnackbar(content, 'success');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData, info, navigate));
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            style={{
                display: 'grid',
                gap: '1rem',
            }}
        >
            <TextField
                name="username"
                label="Username"
                value={FormData.username}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                name="password"
                type="password"
                label="Password"
                value={FormData.username}
                onChange={handleChange}
                required
                fullWidth
            />
            <Button
                type="submit"
                color="primary"
                variant="contained"
                style={{ margin: '1rem' }}
            >
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
