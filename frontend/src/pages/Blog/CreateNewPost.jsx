/* eslint-disable no-unused-vars */
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/postsSlice";

const CreateNewPost = () => {
    const dispatch = useDispatch()
    const layout = {
        labelCol: {span: 5},
        wrapperCol: {span: 12},
    }
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
        message.info(`Post ${title} Created`)
    }
    const handleSubmit = (formData) => {
        dispatch(createPost(formData, info))
    }

    return (
        <Form
            {... layout}
            name="nest-messages"
            onFinish={handleSubmit}
            validateMessages={validateMessages}>

            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                <Input/>
            </Form.Item>

            <Form.Item name="content" label="Content" rules={[{ required: true }]}>
                <Input/>
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    )
}

export default CreateNewPost