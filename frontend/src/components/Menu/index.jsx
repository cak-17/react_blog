import React from 'react';
import { useSelector } from 'react-redux';
import { Menu } from 'antd';
import {
    HomeOutlined,
    UserOutlined,
    LogoutOutlined,
    StarTwoTone,
    LoginOutlined,
    DashboardTwoTone,
    ControlOutlined,
    SettingOutlined,
    FileTextTwoTone,
    FileAddTwoTone,
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

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
                    icon: <FileTextTwoTone />,
                },
                {
                    label: <Link to="/add">Add New Post</Link>,
                    key: 'add-new-post',
                    disabled: !isAuth,
                    icon: <FileAddTwoTone />,
                },
            ],
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
                        icon: <ControlOutlined />,
                        disabled: true,
                    },
                    user.is_staff
                        ? {
                            label: 'Settings',
                            key: 'settings',
                            icon: <SettingOutlined />,
                        } : null,
                    user.is_superuser
                        ? {
                            label: <Link to="/api/admin/">Admin</Link>,
                            key: 'django-settings',
                            icon: <DashboardTwoTone />,
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
