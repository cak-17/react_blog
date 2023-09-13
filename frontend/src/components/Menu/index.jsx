import { useState } from "react";

import { Menu } from "antd";



const MenuWrapper= (props) => {
    const [current, setCurrent] = useState("mail");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            // eslint-disable-next-line react/prop-types
            items={props.items}
        />
    );
};

export default MenuWrapper;
