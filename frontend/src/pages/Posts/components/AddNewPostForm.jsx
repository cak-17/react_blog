/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';
import { createPost } from '../../../store/postsSlice';

const AddNewPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const info = () => {
        enqueueSnackbar(`Post ${formData.title} Created`, 'success');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleError = (error) => {
        enqueueSnackbar(`Oops, something happened! ${error}`, 'error');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(formData, info, navigate));
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
            <TextField
                name="title"
                label="title"
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
                onError={handleError}
                fullWidth
                required
            />
            <TextField
                name="content"
                label="Content"
                variant="outlined"
                value={formData.content}
                onChange={(e) => handleChange(e)}
                required
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" sx={{ margin: '1rem' }}>
                Add
            </Button>
        </form>
    );
};

export default AddNewPostForm;
