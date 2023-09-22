import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Outlet } from 'react-router-dom';
import {
    fetchPosts, deletePost, selectPosts, selectIsLoading,
} from '../../store/postsSlice';
import { selectAuth } from '../../store/authSlice';
import { useSnackbar } from 'notistack';


const ListPosts = () => {
    const { enqueueSnackbar } = useSnackbar();
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoading);
    const isAuthenticated = useSelector(selectAuth);

    const dispatch = useDispatch();

    const info = (id) => {
        enqueueSnackbar(`Post ${id} Deleted`, 'success');
    };

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deletePost(id, info));
    };

    // const renderedPosts = posts.length > 0
    //     ? posts.map((p) => {
    //         const deleteAction = isAuthenticated ? <DeleteOutlined key="delete" onClick={() => handleDelete(p.id)} /> : '';
    //         return (
    //             <Row key={p.id} gutter={[48, 48]}>
    //                 <Col span={24}>
    //                     <Card
    //                         title={p.title}
    //                         style={{ width: '100%' }}
    //                         actions={[deleteAction]}
    //                     >
    //                         <p>{p.content}</p>
    //                     </Card>
    //                 </Col>
    //             </Row>
    //         );
    //     })
    //     : (
    //         <Col span={24}>
    //             <Row justify="center" align="middle">
    //                 <Typography.Text>No Posts Found</Typography.Text>
    //             </Row>
    //         </Col>
    //     );

    return (
       0
    );
};
export default ListPosts;
