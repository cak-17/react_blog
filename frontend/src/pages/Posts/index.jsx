import React from 'react';
import { Box } from '@mui/material';
import PostsList from './components/PostsList';

const Posts = () => (
    <Box style={{ padding: '1rem' }}>
        <h2>Posts</h2>
        <PostsList />
    </Box>
);

export default Posts;
