import React from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import ListPosts from './ListPosts';
import { selectUser, selectAuth } from '../../store/authSlice';

function Posts() {
    const user = useSelector(selectUser);
    const isAuthenticated = useSelector(selectAuth);
    console.log(`The Session ID is ${Cookies.get('sessionid')}`);
    return (
        <>
            <h2>
                Welcome
                {isAuthenticated ? user : null}
            </h2>
            <ListPosts />
        </>
    );
}

export default Posts;
