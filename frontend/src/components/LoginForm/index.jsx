/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Row,
    Col,
    Form,
    Input,
    Button,
    message,
} from 'antd';
import { login, selectAuth } from '../../store/authSlice';

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

const info = (messageContent) => {
    message.info(messageContent);
};

const LoginForm = () => {
    const isAuthenticated = useSelector(selectAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (isAuthenticated) {
        navigate('/');
    }

    const handleSubmit = (values) => {
        dispatch(login(values, info, navigate));
    };

    const handleError = (error) => {
        message.error(error);
    };

    return (
        <Col span={12} offset={6}>
            <h2>Please Login</h2>
            <Row gutter={[48, 48]}>
                <Col span={24}>
                    <Form
                        {...layout}
                        name="login-form"
                        onFinish={handleSubmit}
                        onFinishFailed={handleError}
                        validateMessages={validateMessages}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                            <Button type="primary" htmlType="submit">Login</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </Col>
    );
};

export default LoginForm;
