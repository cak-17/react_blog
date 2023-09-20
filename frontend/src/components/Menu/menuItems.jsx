import React from 'react';
import {
    FileAddOutlined,
    FileFilled,
    FolderOpenOutlined,
    HomeOutlined,
    LoginOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const menuItems = [
    {
        label: <Link to="/">Home</Link>,
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: 'Posts',
        key: 'posts',
        icon: <FolderOpenOutlined />,
        children: [
            {
                label: <Link to="/posts">Read</Link>,
                key: 'read-posts',
                icon: <FileFilled />,
            },
            {
                label: <Link to="/add">Add</Link>,
                key: 'add-post',
                icon: <FileAddOutlined />,
            },
        ],
    },

    {
        label: <Link to="/login">Login</Link>,
        key: 'login',
        icon: <LoginOutlined />,
    },
];

export default menuItems;
