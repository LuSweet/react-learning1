/*
 * @Author: lu.zhu@hand-china.com
 * @Date: 2022-03-03 21:08:04
 * @Description: admin用户页面
 */
import React, { useState } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import TopHeader from '../../components/TopHeader';
// import Home from './components/Home';
// import AuditManage from './components/AuditManage';
// import NewManage from './components/NewManage';
// import PublicManage from './components/PublicManage';
// import RoleList from './components/RoleList';
// import UserList from './components/UserList';
// import RightList from './components/RightList';
import './Admin.css';

const { Content } = Layout;

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <SideMenu collapsed={collapsed} />
      <Layout className="site-layout">
        <TopHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
          }}>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}
