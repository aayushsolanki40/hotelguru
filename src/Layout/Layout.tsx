import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const { Header, Content, Footer } = Layout;

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sidebar collapsed={collapsed} setIsCollapsed={setCollapsed} />
      <Layout className="site-layout" style={{ marginLeft: collapsed ? '80px' : '200px', transition: 'all 0.2s' }}>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
          </Menu>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>OpenAdminLTE ©2023 Created by <a href='https://opensourcejet.com'>OpenSourceJet.com</a></Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;