import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import AppLayout from '.';

import ListPosts from './Posts/ListPosts';
import CreateNewPost from './Posts/CreateNewPost';
import LoginForm from './LoginForm';
import ErrorPage from './error-page';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'posts',
                element: <ListPosts />,
            },
            {
                path: 'add',
                element: <CreateNewPost />,
            },
            {
                path: 'login',
                element: <LoginForm />,
            },
        ],
    },
]);

export default router;
