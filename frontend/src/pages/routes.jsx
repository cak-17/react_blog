import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import AppLayout from '.';

import ListPosts from './Posts/ListPosts';
import CreateNewPost from './Posts/CreateNewPost';
import LoginForm from '../components/LoginForm'; // to become login page
import ErrorPage from './error-page';
import LogoutPage from '../components/Logout';
import SearchResults from '../components/Menu/SearchResultPage';

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
            {
                path: 'logout',
                element: <LogoutPage />,
            },
            {
                path: 'search',
                element: <SearchResults />,
            },
        ],
    },
]);

export default router;
