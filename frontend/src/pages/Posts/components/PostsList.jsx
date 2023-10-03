import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
    fetchPosts, deletePost, selectPosts, selectIsLoading,
} from '../../../store/postsSlice';
import { selectAuth } from '../../../store/authSlice';

const PostsList = () => {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const posts = useSelector(selectPosts);
    const postsCount = useSelector((state) => state.posts.count);

    const isLoading = useSelector(selectIsLoading);
    const isAuthenticated = useSelector(selectAuth);

    const info = (id) => {
        enqueueSnackbar(`Post ${id} Deleted`, 'success');
    };

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleDelete = (e, id) => {
        e.prevendDefault();
        dispatch(deletePost(id, info));
    };

    const authActions = (id) => (isAuthenticated ? <Button onClick={(e) => handleDelete(e, id)}>Delete</Button> : '');

    const renderedPosts = postsCount > 0
        ? posts.map((p) => {
            const deleteAction = authActions(p.id);
            return (
                <Grid item xs={12} md={4} key={p.id}>
                    <Link to={`/posts/${p.id}/read`}>
                        <Box
                            sx={{
                                paddingBlock: '0.2rem',
                                borderRadius: '0.5rem',
                                boxShadow: '0 5px 2rem -0.8rem black',
                            }}
                        >
                            <h4>{p.title}</h4>
                            <p>{p.content}</p>
                            {deleteAction}
                        </Box>
                    </Link>
                </Grid>
            );
        }) : (
            <Grid xs={12} item align="center">
                <p>No Posts Found</p>
            </Grid>

        );

    return (
        <Grid container spacing={6}>
            {!isLoading
                ? renderedPosts
                : <CircularProgress />}
        </Grid>
    );
};

export default PostsList;
