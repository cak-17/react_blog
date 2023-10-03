import React from 'react';
import { Box } from '@mui/material';
import LoginForm from './components/LoginForm';

const LoginPage = () => (
    <Box sx={{ padding: '1rem' }}>
        <h2>Login</h2>
        <LoginForm />
    </Box>
);

export default LoginPage;
