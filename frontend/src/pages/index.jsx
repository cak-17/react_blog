import React from "react";
import { Layout, Menu, theme } from "antd";
import NavigationMenu from "../components/Menu";
import { Outlet, Link } from "react-router-dom";
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";



const AppLayout = () => {
    const { Header, Content, Footer, Sider } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout>
            <Header style={{ display: "flex", alignItems: "center" }}>
                <NavigationMenu />
            </Header>
            <Content style={{ padding: "0 50px" }}>
                <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
                    <Content style={{ padding: "0 24px", minHeight: 280 }}>
                    <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                ©2023 Created by <Link to="http://github.com/cak-17/">cak-17</Link>
            </Footer>
        </Layout>
    );
};

export default AppLayout;
