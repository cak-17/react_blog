import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Row,
    Col,
    Button,
    message,
} from 'antd';

import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton';
import { logout } from '../../store/authSlice';

const info = () => {
    message.info('You have logged out successfully');
};

const LogoutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuth);

    if (!isAuthenticated) {
        navigate('/');
    }

    const handleLogout = () => {
        dispatch(logout(info, navigate));
    };

    return (
        <Col span={12} offset={6}>
            <h2>Logout</h2>
            <Row gutter={[48, 48]}>
                <Col span={24}>
                    <h3>
                        Are you
                        <b> really </b>
                        sure you want to logout?
                    </h3>
                    <Button type="primary" onClick={handleLogout}>Logout</Button>
                    <BackButton />
                </Col>
            </Row>
        </Col>
    );
};

export default LogoutPage;
