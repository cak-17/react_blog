import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth, selectUser } from '../../store/authSlice';

export default function Home() {
    const isAuthenticated = useSelector(selectAuth);
    const user = useSelector(selectUser);
    const welcomeMsg = isAuthenticated ? user : '';
    return (
        <h1>
            Welcome
            {' '}
            {welcomeMsg}
        </h1>
    );
}
