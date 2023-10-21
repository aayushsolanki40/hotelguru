import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  ApartmentOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import React Router's Link component

const { Sider } = Layout;

type Props = {};

const items = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
    path: '/dashboard', // Define the path for this menu item
  },
  {
    key: 'customers',
    icon: <UserOutlined />,
    label: 'Customers',
    path: '/customers', // Define the path for this menu item
  },
  {
    key: 'beds',
    icon: <ApartmentOutlined />,
    label: 'Beds',
    path: '/beds', // Define the path for this menu item
  },
];

export default function Slider({}: Props) {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          bottom: 0,
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </div>
  );
}