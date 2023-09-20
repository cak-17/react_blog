import React, { useState } from 'react';
import { Menu } from 'antd';
import menuItems from './menuItems';

function MenuWrapper() {
    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        // need to add dispatch here to navigate to correct url?
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={menuItems}
        />
    );
}

export default MenuWrapper;
