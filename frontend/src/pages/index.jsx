import React from 'react';
import { Layout, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import MenuWrapper from '../components/Menu';

const AppLayout = () => {
    const {
        Header, Content, Footer,
    } = Layout;
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Header>
                <MenuWrapper />
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                ©2023 Created by
                {' '}
                <Link to="http://github.com/cak-17/">cak-17</Link>
            </Footer>
        </Layout>
    );
};

export default AppLayout;
