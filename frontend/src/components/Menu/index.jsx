import React from 'react';
import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

const Menu = () => {};

const MenuWrapper = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);

    const navigate = useNavigate();

    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <Menu onClick={onClick} mode="horizontal" items={menuItems} className="top-navigation" />
    );
};

export default MenuWrapper;
