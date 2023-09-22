/* eslint-disable no-template-curly-in-string */
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/postsSlice';
import { useSnackbar } from 'notistack';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    style: { maxWidth: 600 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const CreateNewPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleError = (error) => {
        enqueueSnackbar(`Oops, something happened! ${error}`, 'error');
    };

    const info = (title) => {
        enqueueSnackbar(`Post ${title} Created`, 'success');
    };

    const handleSubmit = (formData) => {
        dispatch(createPost(formData, info, navigate));
    };

    return (
       0
    );
};

export default CreateNewPost;
