import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import AppLayout from '../layout';
import PostsAPI from '../api/posts';

// Pages
import Posts from './Posts';
import AddNewPost from './Posts/AddNewPost';

// Auth
import LoginPage from './Auth/Login';
import LogoutPage from './Auth/Logout';

// Utils
import ErrorPage from './error-page';
import SearchResults from './SearchResults';
import PostDetailView from './Posts/PostDetailView';

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
                children: [
                    {
                        index: true,
                        element: <Posts />,
                    },
                    {
                        path: 'add',
                        element: <AddNewPost />,
                    },
                    {
                        path: ':postId',
                        element: <PostDetailView />,
                        loader: async ({ params }) => {
                            const post = await PostsAPI.getByID(params.postId)
                                .then((data) => {
                                    console.log(`ROUTES.JSX OK -> ${data}`);
                                    return data;
                                })
                                .catch((error) => {
                                    console.log(`ROUTES.JSX NO -> ${error}`);
                                    return null;
                                });
                            if (!post) {
                                return "Post Not Found";
                            }
                            return { post };
                        },
                    },
                ],
            },
            {
                path: 'login',
                element: <LoginPage />,
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
