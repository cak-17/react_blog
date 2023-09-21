import React from 'react';
import { useSelector } from 'react-redux';
import { Menu, Input } from 'antd';
import {
    HomeOutlined,
    FileTextOutlined,
    UserOutlined,
    LogoutOutlined,
    FileAddOutlined,
    StarTwoTone,
    LoginOutlined,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const { Search } = Input;

const MenuWrapper = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        navigate('/logout');
    };

    const onClick = (e) => {
        console.log('click ', e);
    };

    const handleSearch = (searchText) => {
        navigate(`/search?query=${searchText}`);
    };

    const menuItems = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: 'Posts',
            key: 'posts',
            children: [
                {
                    label: <Link to="/posts"> Read All Posts</Link>,
                    key: 'read-all-posts',
                    icon: <FileTextOutlined />,
                },
                {
                    label: <Link to="/add">Add New Post</Link>,
                    key: 'add-new-post',
                    disabled: !isAuth,
                    icon: <FileAddOutlined />,
                },
            ],
        },
        {
            label: <Search placeholder="Search for Posts Title..." onSearch={handleSearch} enterButton="Search" />,
            key: 'search',
        },
        isAuth
            ? {
                label: user.username,
                key: 'user',
                icon: user.is_superuser ? <StarTwoTone /> : <UserOutlined />,
                children: [
                    {
                        label: 'Profile',
                        key: 'profile',
                        disabled: true,
                    },
                    user.is_superuser
                        ? {
                            label: 'Settings',
                            key: 'settings',
                        } : null,
                    {
                        label: 'Divider',
                        key: 'divider',
                        type: 'divider',
                    },
                    {
                        label: 'Logout',
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        onClick: handleLogout,
                    },
                ],
            }
            : {
                label: 'Login',
                key: 'login',
                onClick: handleLogin,
                icon: <LoginOutlined />,
            },
    ];

    return (
        <Menu onClick={onClick} mode="horizontal" items={menuItems} className="top-navigation" />
    );
};

export default MenuWrapper;
