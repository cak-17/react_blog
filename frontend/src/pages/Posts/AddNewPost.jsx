import React from 'react';
import { Box } from '@mui/material';
import AddNewPostForm from './components/AddNewPostForm';

const AddNewPost = () => (
    <Box style={{ padding: '1rem' }}>
        <h2>Add New Post</h2>
        <AddNewPostForm />
    </Box>
);

export default AddNewPost;
