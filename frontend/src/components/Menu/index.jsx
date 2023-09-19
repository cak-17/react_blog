import { useState } from "react";
import menuItems from "./menuItems";
import { Menu } from "antd";


const MenuWrapper= () => {
    const [current, setCurrent] = useState("home");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
        // need to add dispatch here to navigate to correct url?
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            // eslint-disable-next-line react/prop-types
            items={menuItems}
        />
    );
};

export default MenuWrapper;
