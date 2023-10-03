import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Container } from '@mui/material';
import { selectAuth, selectUser } from '../../store/authSlice';

const Home = () => {
    const isAuthenticated = useSelector(selectAuth);
    const user = useSelector(selectUser);

    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
                padding: '0 20px',
            }}
        >
            <Box>
                <h1>Welcome Home</h1>
            </Box>
            {isAuthenticated
                ? (
                    <h2>
                        {user.username}
                        {' '}
                        {user.icon}
                    </h2>
                )
                : (
                    null
                )}
        </Container>
    );
};

export default Home;
