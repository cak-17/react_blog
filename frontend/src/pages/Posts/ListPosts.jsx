import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Card, Row, Col, Typography, message, Spin,
} from 'antd';

import { DeleteOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import {
    fetchPosts, deletePost, selectPosts, selectIsLoading,
} from '../../store/postsSlice';
import { selectAuth } from '../../store/authSlice';

const info = (id) => {
    message.info(`Post ${id} Deleted`);
};

const ListPosts = () => {
    const posts = useSelector(selectPosts);
    const isLoading = useSelector(selectIsLoading);
    const isAuthenticated = useSelector(selectAuth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deletePost(id, info));
    };

    return (
        <Col span={12} offset={6}>
            <Col span={24} align="center">
                <h2>Posts Index</h2>
            </Col>
            {isLoading
                ? (
                    <Col span={24}>
                        <Row justify="center" align="middle">
                            <Spin spinning={isLoading} />
                        </Row>
                    </Col>
                ) : posts ? posts.map((p) => {
                    const deleteAction = isAuthenticated ? <DeleteOutlined key="delete" onClick={() => handleDelete(p.id)} /> : '';
                    return (
                        <Row key={p.id} gutter={[48, 48]}>
                            <Col span={24}>
                                <Card
                                    title={p.title}
                                    style={{ width: '100%' }}
                                    actions={[deleteAction]}
                                >
                                    <p>{p.content}</p>
                                </Card>
                            </Col>
                        </Row>
                    );
                })
                    : (
                        <Col span={24}>
                            <Row justify="center" align="middle">
                                <Typography.Text>No Posts Found</Typography.Text>
                            </Row>
                        </Col>
                    )}
            <Outlet />
        </Col>
    );
};
export default ListPosts;
