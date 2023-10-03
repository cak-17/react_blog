import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import { deletePost, fetchPost } from '../../store/postsSlice';
import BackButton from '../../components/BackButton';

const PostDetailView = () => {
    // fetch data from ID and render post info
    // const {title, content, createdAt, lastUpdate} = post;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const post = useLoaderData();
    const isAuthenticated = useSelector((state) => state.auth.isAuth);
    const isLoading = useSelector((state) => state.posts.loading);
    console.log(post)
    const info = () => {
        enqueueSnackbar(`${post.id} has been deleted.`);
    };
    const handleDelete = () => {
        dispatch(deletePost(post.id, info, navigate));
    };

    const staffDeleteButton = isAuthenticated ? <Button onClick={handleDelete}>Delete</Button> : '';

    const renderedPost = post instanceof String
        ? (
            <React.Fragment>
                <ul>
                    <li>{post.id}</li>
                    <li>{post.title}</li>
                    <li>{post.content}</li>
                </ul>
                {staffDeleteButton}
                <BackButton />
            </React.Fragment>
        )
        : (
            <p>
                {post}
            </p>
        );
    return (
        <Box>
            {!isLoading ? renderedPost : 'Loading....'}
        </Box>
    );
};

export default PostDetailView;
