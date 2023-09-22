import React from 'react';
import { useSelector } from 'react-redux';

import { Col, Row } from 'antd';

import { StarTwoTone } from '@ant-design/icons';
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
        <Col style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <Row>
                <Col>
                    <h1>
                        Welcome
                        {' '}
                        {userName}
                        {' '}
                        {superUser}
                        {staffIcon}
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SearchForm />
                </Col>
            </Row>
        </Col>
    );
};

export default Home;
