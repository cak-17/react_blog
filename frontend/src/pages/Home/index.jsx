import React from 'react';
import { useSelector } from 'react-redux';
import { StarTwoTone } from '@ant-design/icons';
import { selectAuth, selectUser } from '../../store/authSlice';

export default function Home() {
    const isAuthenticated = useSelector(selectAuth);
    const user = useSelector(selectUser);

    const welcomeMsg = isAuthenticated ? user.username : '';
    const superUser = user.is_superuser ? <StarTwoTone /> : '';
    return (
        <h1>
            Welcome
            {' '}
            {welcomeMsg}
            {superUser}
        </h1>
    );
}
