/* eslint-disable no-template-curly-in-string */
import React from 'react';
import {
    Col, Row, Form, Input, Button, message,
} from 'antd';
import { useDispatch } from 'react-redux';
import { createPost } from '../../store/postsSlice';

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

const info = (title) => {
    message.info(`Post ${title} Created`);
};

function CreateNewPost() {
    const dispatch = useDispatch();

    const handleSubmit = (formData) => {
        dispatch(createPost(formData, info));
    };

    const handleError = (error) => {
        message.error(error);
    };

    return (
        <Col span={12} offset={6}>
            <h2>Add New Post</h2>
            <Row gutter={[48, 48]}>
                <Col span={24}>
                    <Form
                        {... layout}
                        name="nest-messages"
                        onFinish={handleSubmit}
                        onFinishFailed={handleError}
                        validateMessages={validateMessages}
                    >
                        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="content" label="Content" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </Col>
    );
}

export default CreateNewPost;
