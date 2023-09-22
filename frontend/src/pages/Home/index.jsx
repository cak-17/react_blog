import React from 'react';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import SearchForm from '../../components/SearchForm';
import { selectAuth, selectUser } from '../../store/authSlice';

const Home = () => {
    const isAuthenticated = useSelector(selectAuth);
    const user = useSelector(selectUser);

    const userName = isAuthenticated ? user.username : '';
    const superUser = user.is_superuser ? <StarTwoTone /> : '';
    const staffIcon = user.is_staff ? <FontAwesomeIcon icon={faUser} /> : '';

    return (
        0
    );
};

export default Home;
